
import { cards } from "./cards.js";
import { calendar } from "./calendar.js";

function getTodayKey() {
  return "2026-06-08"; // date test pour l’instant
}

function afficherEquipe(couleur) {
  const todayKey = getTodayKey();
  const phase = calendar[todayKey]?.[couleur];
  const data = cards[phase];

  if (!data) {
    document.getElementById("resultat").innerHTML =
      "<p>Aucune donnée trouvée pour cette équipe aujourd’hui.</p>";
    return;
  }

  document.getElementById("resultat").innerHTML = `
    <h2>${couleur.toUpperCase()}</h2>
    <h3>${data.titre}</h3>
    <p><strong>Objectif :</strong> ${data.objectif}</p>

    <h3>🛌 Sommeil</h3>
    <p>${data.sommeil}</p>

    <h3>🍽️ Nutrition</h3>
    <p>${data.nutrition}</p>

    <h3>🏃 Activité</h3>
    <p>${data.activite}</p>

    <h3>🍴 Recette proposée</h3>
    <p>${data.recette}</p>
  `;
}

document.getElementById("vert").addEventListener("click", () => afficherEquipe("vert"));
document.getElementById("jaune").addEventListener("click", () => afficherEquipe("jaune"));
document.getElementById("bleu").addEventListener("click", () => afficherEquipe("bleu"));
document.getElementById("rouge").addEventListener("click", () => afficherEquipe("rouge"));
