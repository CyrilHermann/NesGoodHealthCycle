import { cards } from "./cards.js";
import { shifts } from "./shifts.js";
import { detectCycleCard } from "./cycleDetector.js";

let calendar = {};

async function loadCalendar() {
  const response = await fetch("/.netlify/functions/getCalendar");

  if (!response.ok) {
    throw new Error("Impossible de charger le calendrier.");
  }

  calendar = await response.json();
}

function getTodayKey() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
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
  const todayKey = getTodayKey();

  let dayData = calendar[todayKey]?.[couleur];
  let dateAffichee = todayKey;
  let messageSituation = "Tu travailles aujourd’hui.";

  if (!dayData) {
    const nextShift = findNextShift(couleur, todayKey);

    if (!nextShift) {
      document.getElementById("resultat").innerHTML =
        "<p>Aucun prochain shift trouvé pour cette équipe.</p>";
      return;
    }

    dayData = nextShift.data;
    dateAffichee = nextShift.date;
    messageSituation = "Tu ne travailles pas aujourd’hui. Voici ton prochain shift.";
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

    <p>${messageSituation}</p>
    <p><strong>Date :</strong> ${dateAffichee}</p>

    <h3>${card.titre}</h3>
    <p><strong>Objectif :</strong> ${card.objectif}</p>

    ${horaireHtml}

    <h3>🛌 Sommeil</h3>
    <p>${card.sommeil}</p>

    <h3>🍽️ Nutrition</h3>
    <p>${card.nutrition}</p>

    <h3>🏃 Activité</h3>
    <p>${card.activite}</p>

    <h3>🍴 Recette proposée</h3>
    <p>${card.recette}</p>
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
    document.getElementById("resultat").innerHTML =
      "<p>Impossible de charger le calendrier.</p>";
  });
