import { cards } from "./cards.js";
import { shifts } from "./shifts.js";
import { detectCycleCard } from "./cycleDetector.js";

let calendar = {};

const teamButtons = [
  document.getElementById("vert"),
  document.getElementById("jaune"),
  document.getElementById("bleu"),
  document.getElementById("rouge")
];

function setButtonsEnabled(enabled) {
  teamButtons.forEach((button) => {
    button.disabled = !enabled;
  });
}

function setCalendarStatus(type, message) {
  const status = document.getElementById("calendarStatus");

  status.className = `calendar-status ${type}`;
  status.textContent = message;
}

async function loadCalendar() {
  setButtonsEnabled(false);
  setCalendarStatus("loading", "Chargement du calendrier...");

  const response = await fetch("/.netlify/functions/getCalendar");

  if (!response.ok) {
    throw new Error("Impossible de charger le calendrier.");
  }

  calendar = await response.json();

  setCalendarStatus("ready", "Calendrier chargé ✓");
setButtonsEnabled(true);

setTimeout(() => {
  const status = document.getElementById("calendarStatus");

  if (status) {
    status.style.display = "none";
  }

  const loadingMessage =
    document.querySelector(".loading-message");

  if (loadingMessage) {
    loadingMessage.style.display = "none";
    }
  }, 2000);
}

function getTodayKey() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
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
  let messageSituation = "Tu travailles aujourd’hui.";
  let titreDate = "Aujourd’hui";

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

  if (!card) {
    document.getElementById("resultat").innerHTML =
      "<p>Aucune carte trouvée pour cette situation.</p>";
    return;
  }

  const horaireHtml = shift
    ? `
      <h3>🕒 Horaire</h3>
      <p><strong>Début :</strong> ${shift.start}</p>
      <p><strong>Fin :</strong> ${shift.end}</p>
    `
    : "";

  document.getElementById("resultat").innerHTML = `
    <h2>${couleur.toUpperCase()}</h2>

    <div class="welcome-box">
      <strong>Hello !</strong><br>
      Nous sommes ${formatFullFrenchDateWithDay(todayKey)}.
    </div>

    <p>${messageSituation}</p>

    <p>
      <strong>${titreDate} :</strong><br>
      ${formatFullFrenchDateWithDay(dateAffichee)}
    </p>

    <h3>${card.titre}</h3>
    <p><strong>Objectif :</strong> ${card.objectif}</p>

    ${horaireHtml}

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
      <p>${card.recette}</p>
    </div>
  `;
}

document.getElementById("vert").addEventListener("click", () => afficherEquipe("vert"));
document.getElementById("jaune").addEventListener("click", () => afficherEquipe("jaune"));
document.getElementById("bleu").addEventListener("click", () => afficherEquipe("bleu"));
document.getElementById("rouge").addEventListener("click", () => afficherEquipe("rouge"));

loadCalendar()
  .then(() => {
    console.log("Calendrier chargé depuis Airtable");
  })
  .catch((error) => {
    console.error(error);
    setButtonsEnabled(true);
    setCalendarStatus("error", "Impossible de charger le calendrier");
    document.getElementById("resultat").innerHTML = `
      <div class="welcome-box">
        Le calendrier n'a pas pu être chargé. Réessaie dans quelques instants.
      </div>
    `;
  });
