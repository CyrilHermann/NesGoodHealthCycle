import { cards } from "./cards.js";
import { shifts } from "./shifts.js";
import { detectCycleCard } from "./cycleDetector.js";
import { didYouKnowList } from "./didYouKnow.js";
import { recipes } from "./recipes.js";
import { coachTips } from "./coachTips.js";
import { getPlanningAdvice } from "./planningAdvisor.js";

let calendar = {};

const teamButtons = ["vert", "jaune", "bleu", "rouge"].map((id) =>
  document.getElementById(id)
);

function setButtonsEnabled(enabled) {
  teamButtons.forEach((button) => {
    button.disabled = !enabled;
  });
}

function setCalendarStatus(type, message) {
  const status = document.getElementById("calendarStatus");
  if (!status) return;
  status.className = `calendar-status ${type}`;
  status.textContent = message;
}

async function loadCalendar() {
  setButtonsEnabled(false);
  setCalendarStatus("loading", "Chargement du calendrier...");

  const response = await fetch("/calendar.json", { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Impossible de charger calendar.json.");
  }

  calendar = await response.json();

  setCalendarStatus("ready", "Calendrier chargé ✓");
  setButtonsEnabled(true);

  setTimeout(() => {
    const status = document.getElementById("calendarStatus");
    if (status) status.style.display = "none";

    const loadingMessage = document.querySelector(".loading-message");
    if (loadingMessage) loadingMessage.style.display = "none";
  }, 2000);
}

function getTodayKey() {
  const today = new Date();

  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatFullFrenchDateWithDay(dateKey) {
  const date = new Date(`${dateKey}T12:00:00`);

  const dayName = date.toLocaleDateString("fr-FR", {
    weekday: "long"
  });

  const fullDate = date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return `${capitalize(dayName)} ${fullDate}`;
}

function findNextShift(couleur, startDateKey) {
  const dates = Object.keys(calendar).sort();
  const startIndex = dates.indexOf(startDateKey);
  const searchDates = startIndex >= 0 ? dates.slice(startIndex) : dates;

  for (const date of searchDates) {
    if (calendar[date]?.[couleur]) {
      return {
        date,
        data: calendar[date][couleur]
      };
    }
  }

  return null;
}

function getRandomDidYouKnow() {
  return didYouKnowList[Math.floor(Math.random() * didYouKnowList.length)];
}

function getRandomCoachTip(cardKey) {
  const tips = coachTips[cardKey];
  if (!tips || tips.length === 0) return "";
  return tips[Math.floor(Math.random() * tips.length)];
}

function getRandomRecipe(cardKey) {
  const recipeList = recipes[cardKey];
  if (!recipeList || recipeList.length === 0) return null;
  return recipeList[Math.floor(Math.random() * recipeList.length)];
}

function renderList(items) {
  if (!items || items.length === 0) return "";
  return items.map((item) => `<div class="card-bullet">• ${item}</div>`).join("");
}

function renderNumberedList(items) {
  if (!items || items.length === 0) return "";
  return items.map((item, index) => `<div class="card-bullet">${index + 1}. ${item}</div>`).join("");
}

function renderRecipe(recipe) {
  if (!recipe) return "<p>Aucune recette disponible pour cette phase.</p>";

  return `
    <div class="card-subtitle">Recette : ${recipe.title}</div>
    <div class="recipe-visual">${recipe.visual || "🍴"}</div>

    ${
      recipe.nutritionImage
        ? `
          <div class="nutrition-facts-box">
            <div class="recipe-title">📊 Nutrition Facts</div>
            <img src="${recipe.nutritionImage}" alt="Nutrition facts - ${recipe.title}" class="nutrition-facts-img">
          </div>
        `
        : ""
    }

    <div class="recipe-grid">
      <div class="recipe-panel">
        <div class="recipe-title">ℹ️ Infos pratiques</div>
        ${renderList(recipe.infos)}
      </div>

      <div class="recipe-panel">
        <div class="recipe-title">🧺 Ingrédients</div>
        ${renderList(recipe.ingredients)}
      </div>

      <div class="recipe-panel">
        <div class="recipe-title">👩‍🍳 Instructions</div>
        ${renderNumberedList(recipe.instructions)}
      </div>

      <div class="recipe-panel">
        <div class="recipe-title">📝 Notes</div>
        ${renderList(recipe.notes)}
      </div>
    </div>
  `;
}

function getFocusByCard(cardKey) {
  const focus = {
    matins: {
      title: "Bien démarrer sans dette de sommeil",
      light: "Expose-toi à la lumière naturelle dès le matin.",
      water: "Hydrate-toi dès le réveil avant d’attaquer le poste.",
      movement: "Active doucement le corps : étirements, marche ou mobilité.",
      food: "Privilégie un petit-déjeuner complet avec protéines et glucides lents.",
      reminder: "Ton objectif : rester régulier pendant tout le bloc de matins."
    },
    transitionJourNuit: {
      title: "Préparer le passage vers les nuits",
      light: "Garde de la lumière en fin de journée pour repousser légèrement l’endormissement.",
      water: "Arrive hydraté avant la première nuit.",
      movement: "Prévois une activité douce, sans intensité tardive.",
      food: "Mange léger avant la nuit pour éviter la somnolence digestive.",
      reminder: "Ton objectif : arriver à la première nuit avec le moins de fatigue possible."
    },
    nuits: {
      title: "Tenir la nuit et protéger la récupération",
      light: "Limite la lumière forte en rentrant pour faciliter le sommeil.",
      water: "Bois régulièrement par petites quantités.",
      movement: "Bouge quelques minutes lors des baisses de vigilance.",
      food: "Prévois des collations simples, protéinées et peu sucrées.",
      reminder: "Ton objectif : préserver ton sommeil de jour comme un vrai rendez-vous."
    },
    retourJour: {
      title: "Revenir au rythme naturel sans forcer",
      light: "Expose-toi à la lumière du jour le matin.",
      water: "Pense à boire régulièrement tout au long de la journée.",
      movement: "Une marche de 20 minutes en extérieur peut t’aider à te recentrer.",
      food: "Privilégie des repas légers, frais et équilibrés.",
      reminder: "Chaque petit pas compte. Ton corps sait retrouver son rythme."
    },
    joursLongs: {
      title: "Tenir la durée sans casser la récupération",
      light: "Réduis la lumière forte en fin de journée pour préparer le sommeil.",
      water: "Hydrate-toi toutes les 1 à 2 heures.",
      movement: "Relâche les épaules, le dos et la mâchoire pendant le poste.",
      food: "Planifie les repas et collations pour éviter le grignotage continu.",
      reminder: "Ton objectif : gérer ton énergie comme une réserve."
    }
  };

  return focus[cardKey] || focus.matins;
}

function renderFocusBox(cardKey) {
  const focus = getFocusByCard(cardKey);

  return `
    <div class="focus-box">
      <h3>🎯 Focus du jour</h3>

      <p>Ton objectif du jour :</p>
      <strong>${focus.title}</strong>

      <hr>

      <div class="focus-item">
        <strong>☀️ Lumière</strong>
        <p>${focus.light}</p>
      </div>

      <div class="focus-item">
        <strong>💧 Hydratation</strong>
        <p>${focus.water}</p>
      </div>

      <div class="focus-item">
        <strong>🚶 Mouvement</strong>
        <p>${focus.movement}</p>
      </div>

      <div class="focus-item">
        <strong>🥗 Alimentation</strong>
        <p>${focus.food}</p>
      </div>

      <div class="small-reminder-box">
        <strong>❞ Petit rappel</strong>
        <p>${focus.reminder}</p>
      </div>
    </div>
  `;
}

function getEventAdvice(eventType, eventDateKey, couleur) {
  const eventData = calendar[eventDateKey]?.[couleur];
  const shift = eventData?.shift || "repos";

  const cardKey =
    detectCycleCard(calendar, couleur, eventDateKey) || "retourJour";

  const planning = getPlanningAdvice(eventType, cardKey);

  return {
    label: planning.label,
    shift,
    cardKey,
    tips: planning.tips
  };
}

function analyzeEvent(couleur) {
  const dateInput = document.getElementById("eventDate");
  const typeInput = document.getElementById("eventType");
  const resultBox = document.getElementById("eventResult");

  if (!dateInput.value) {
    resultBox.innerHTML = `<p>Choisis une date pour analyser ton cycle.</p>`;
    return;
  }

  if (dateInput.value > "2026-12-31") {
    resultBox.innerHTML = `
      <p>
        Le calendrier n'est actuellement chargé que jusqu'au
        <strong>31 décembre 2026</strong>.
      </p>
    `;
    return;
  }

  const advice = getEventAdvice(typeInput.value, dateInput.value, couleur);

  resultBox.innerHTML = `
    <div class="event-result">
      <strong>${advice.label}</strong><br>
      ${formatFullFrenchDateWithDay(dateInput.value)}<br><br>

      <strong>Shift prévu :</strong> ${advice.shift}<br>
      <strong>Carte associée :</strong> ${cards[advice.cardKey]?.titre || advice.cardKey}

      <div class="event-tips">
        ${advice.tips.map((tip) => `<div class="card-bullet">• ${tip}</div>`).join("")}
      </div>
    </div>
  `;
}

function renderEventPlanner(couleur) {
  return `
    <div class="event-planner-box">
      <h3>📅 Préparation personnalisée</h3>

      <p>
        Tu as un évènement à organiser et tu veux savoir comment t’y préparer ?
      </p>

      <label for="eventDate">Date de l’évènement</label>

      <input
        type="date"
        id="eventDate"
        min="2026-01-01"
        max="2026-12-31"
      >

      <small>
        Calendrier disponible jusqu'au 31 décembre 2026.
      </small>

      <label for="eventType">Type d’évènement</label>

      <select id="eventType">
        <option value="mariage">Mariage</option>
        <option value="vacances">Vacances</option>
        <option value="randonnee">Randonnée</option>
        <option value="course">Course</option>
        <option value="competition">Compétition sportive</option>
        <option value="examen">Examen</option>
        <option value="entretien">Entretien</option>
        <option value="voyage">Voyage</option>
        <option value="repasMidi">Repas famille midi</option>
        <option value="repasSoir">Repas famille soir</option>
        <option value="jeune">Jour de jeûne</option>
        <option value="medecin">RDV médecin</option>
        <option value="demenagement">Déménagement</option>
        <option value="soiree">Soirée festive</option>
        <option value="autre">Autre</option>
      </select>

      <button class="event-btn" id="analyzeEventBtn">
        Préparer mon cycle
      </button>

      <div id="eventResult"></div>
    </div>
  `;
}

function afficherEquipe(couleur) {
  if (!calendar || Object.keys(calendar).length === 0) {
    document.getElementById("resultat").innerHTML = `
      <div class="welcome-box">
        <strong>Chargement en cours...</strong><br><br>
        Le coach de cycle virtuel n'est pas encore prêt.<br><br>
        Merci de patienter quelques secondes puis de re-cliquer sur la couleur de l'équipe souhaitée.
      </div>
    `;
    return;
  }

  const todayKey = getTodayKey();

  let dayData = calendar[todayKey]?.[couleur];
  let dateAffichee = todayKey;
  let messageSituation = "Voici ton shift.";
  let titreDate = "Cycle de travail";

  if (!dayData) {
    const nextShift = findNextShift(couleur, todayKey);

    if (!nextShift) {
      document.getElementById("resultat").innerHTML = `
        <div class="welcome-box">
          <strong>Chargement ou recherche en cours...</strong><br><br>
          Aucun prochain shift trouvé pour cette équipe.<br><br>
          Merci de patienter quelques secondes puis de re-cliquer sur la couleur de l'équipe souhaitée.
        </div>
      `;
      return;
    }

    dayData = nextShift.data;
    dateAffichee = nextShift.date;
    messageSituation = "Tu ne travailles pas aujourd’hui. Voici ton prochain shift.";
    titreDate = "Ton prochain cycle de travail";
  }

  const cardKey =
    detectCycleCard(calendar, couleur, todayKey) ||
    detectCycleCard(calendar, couleur, dateAffichee);

  const card = cards[cardKey];
  const shift = shifts[dayData.shift];
  const didYouKnow = getRandomDidYouKnow();
  const recipe = getRandomRecipe(cardKey);
  const coachTip = getRandomCoachTip(cardKey);

  if (!card) {
    document.getElementById("resultat").innerHTML =
      "<p>Aucune carte trouvée pour cette situation.</p>";
    return;
  }

  const horaireHtml = shift
    ? `
      <div class="horaire-block">
        <h3>🕒 Horaire</h3>
        <p><strong>Début :</strong> ${shift.start}</p>
        <p><strong>Fin :</strong> ${shift.end}</p>
      </div>
    `
    : "";

  document.getElementById("resultat").innerHTML = `
    <h2>${couleur.toUpperCase()}</h2>

    <div class="top-layout">
      <div class="top-left">
        <div class="welcome-box">
          <strong>Hello !</strong><br>
          Nous sommes ${formatFullFrenchDateWithDay(todayKey)}.
        </div>

        ${horaireHtml}

        <p>${messageSituation}</p>

        <p>
          <strong>${titreDate} :</strong><br>
          ${formatFullFrenchDateWithDay(dateAffichee)}
        </p>

        <h3>${card.titre}</h3>
        <p><strong>Objectif :</strong> ${card.objectif}</p>

        <div class="coach-tip-box">
          <div class="coach-tip-header">🎯 Conseil du coach</div>
          <div class="coach-tip-content">${coachTip}</div>
        </div>

        ${renderEventPlanner(couleur)}
      </div>

      <div class="top-right">
        ${renderFocusBox(cardKey)}
      </div>
    </div>

    <div class="details-separator"></div>
    <h3 class="details-title">En détail ci-dessous :</h3>

    <div class="card-section sleep-box">
      <h3>🛌 Sommeil</h3>
      <p>${card.sommeil}</p>
    </div>

    <div class="card-section nutrition-box">
      <h3>🍽️ Nutrition</h3>
      <p>${card.nutrition}</p>
    </div>

    <div class="card-section activity-box">
      <h3>🏃 Activité</h3>
      <p>${card.activite}</p>
    </div>

    <div class="card-section recipe-box">
      <h3>🍴 Recette proposée</h3>
      <div>${renderRecipe(recipe)}</div>
    </div>

    <div class="did-you-know-box">
      <div class="did-you-know-header">💡 Le saviez-vous ?</div>
      <div class="did-you-know-content">${didYouKnow}</div>
    </div>
  `;

  document.getElementById("analyzeEventBtn")
    ?.addEventListener("click", () => analyzeEvent(couleur));
}

document.getElementById("vert").addEventListener("click", () => afficherEquipe("vert"));
document.getElementById("jaune").addEventListener("click", () => afficherEquipe("jaune"));
document.getElementById("bleu").addEventListener("click", () => afficherEquipe("bleu"));
document.getElementById("rouge").addEventListener("click", () => afficherEquipe("rouge"));

loadCalendar()
  .then(() => {
    console.log("Calendrier chargé depuis calendar.json");
  })
  .catch((error) => {
    console.error(error);
    setButtonsEnabled(true);
    setCalendarStatus("error", "Impossible de charger le calendrier");
    document.getElementById("resultat").innerHTML = `
      <div class="welcome-box">
        Le calendrier n'a pas pu être chargé. Vérifie que le fichier calendar.json est bien à la racine du projet.
      </div>
    `;
  });
