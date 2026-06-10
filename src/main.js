import { cards } from "./cards.js";
import { calendar } from "./calendar.js";
import { shifts, getCardFromShift } from "./shifts.js";

function getTodayKey() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function afficherEquipe(couleur) {
  const todayKey = getTodayKey();
  const dayData = calendar[todayKey]?.[couleur];

  if (!dayData) {
    document.getElementById("resultat").innerHTML =
      "<p>Aucune donnée trouvée pour cette équipe aujourd’hui.</p>";
    return;
  }

  const cardKey = getCardFromShift(dayData.shift);
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
