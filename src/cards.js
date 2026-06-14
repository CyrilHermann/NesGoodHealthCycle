export const cards = {
  matins: {
    titre: "Ton prochain cycle est constitué de 5 matins",
    objectif: "Bien démarrer sans accumuler de fatigue.",

    sommeil: `
      <div class="card-subtitle">Limiter la dette de sommeil</div>
      <div class="card-bullet">• Garder un coucher régulier</div>
      <span class="time-note">Idéalement entre 21h30 et 22h30</span>
      <div class="card-bullet">• Éviter les gros décalages horaires</div>
      <div class="card-subtitle">Récupération progressive</div>
      <span class="time-note">Plus de sommeil ou sieste 20–30 min les jours off</span>
    `,

    nutrition: `
      <div class="card-subtitle">Petit-déjeuner complet</div>
      <div class="card-bullet">• Yaourt + flocons d’avoine + fruit</div>
      <div class="card-bullet">• Ou pain complet + œuf</div>
      <div class="card-subtitle">Apport en boisson</div>
      <span class="time-note">1 café + 1 verre d’eau minimum</span>
      <div class="card-subtitle">Collation si besoin</div>
      <span class="time-note">Vers 10h00 - 11h00</span>
      <div class="card-bullet">• Exemple : pomme + 10–15 amandes / fromage blanc</div>
      <div class="card-subtitle">À éviter</div>
      <span class="time-note">Partir sans petit-déjeuner</span>
      <span class="time-note">Viennoiseries seules</span>
    `,

    activite: `
      <div class="card-subtitle">Réveiller le corps</div>
      <div class="card-bullet">• S’étirer vers le haut</div>
      <span class="time-note">10–15 sec</span>
      <div class="card-bullet">• Se redresser complètement</div>
      <div class="card-bullet">• Ouvrir la poitrine</div>
      <div class="card-bullet">• 3 à 5 respirations profondes</div>
      <div class="card-bullet">• Eau froide sur les mains ou le visage</div>
      <div class="card-bullet">• Boire quelques gorgées d’eau</div>
      <div class="card-subtitle">Fréquence</div>
      <span class="time-note">1 fois si démarrage lent</span>
    `,

    recette: `
      <div class="card-subtitle">Recette : Avoine Double Chocolat</div>
      <div class="recipe-visual">🥣 🍫 🌙</div>

      <div class="recipe-grid">
        <div class="recipe-panel">
          <div class="recipe-title">ℹ️ Infos pratiques</div>
          <div class="card-bullet">• Plat : Petit-déjeuner</div>
          <div class="card-bullet">• Catégorie : Recette facile</div>
          <div class="card-bullet">• Préparation : 10 minutes</div>
          <div class="card-bullet">• Repos au réfrigérateur : 8 heures</div>
          <div class="card-bullet">• Portions : 1 portion</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">🧺 Ingrédients</div>
          <div class="card-bullet">• 2 c.s. de protéine en poudre chocolat</div>
          <div class="card-bullet">• 110 g de yaourt grec vanille</div>
          <div class="card-bullet">• 80 ml de lait d’amande non sucré</div>
          <div class="card-bullet">• 15 g de pépites de chocolat noir</div>
          <div class="card-bullet">• 30 g de flocons d’avoine</div>
          <div class="card-bullet">• 15 g de graines de chia</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">👩‍🍳 Instructions</div>
          <div class="card-bullet">1. Mélanger tous les ingrédients ensemble.</div>
          <div class="card-bullet">2. Verser dans un bol.</div>
          <div class="card-bullet">3. Laisser reposer toute la nuit au réfrigérateur.</div>
          <div class="card-bullet">4. Déguster le matin.</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">📝 Notes</div>
          <div class="card-bullet">• Utiliser 80 ml de lait d’amande pour une texture plus épaisse.</div>
          <div class="card-bullet">• Utiliser 120 ml de lait d’amande pour une texture plus liquide.</div>
        </div>
      </div>
    `
  },

  transitionJourNuit: {
    titre: "Tu prépares ton passage au rythme de nuit",
    objectif: "Préparer le passage au rythme de nuit.",

    sommeil: `
      <div class="card-subtitle">Préparer le passage au rythme de nuit</div>
      <div class="card-subtitle">Sieste courte recommandée</div>
      <span class="time-note">20 à 30 min entre 13h00 et 15h00</span>
      <div class="card-bullet">• Décaler progressivement le coucher</div>
      <span class="time-note">Exemple : 22h00 → 23h30–00h00</span>
      <div class="card-bullet">• Éviter les longues siestes tardives</div>
      <span class="time-note">Plus d’1h après 16h–17h = sommeil plus difficile</span>
    `,

    nutrition: `
      <div class="card-subtitle">Faciliter l’adaptation</div>
      <div class="card-bullet">• Décaler progressivement les repas</div>
      <div class="card-bullet">• Manger plus tard le soir que d’habitude</div>
      <div class="card-bullet">• Repas avant la première nuit = léger</div>
      <div class="card-bullet">• Exemple : soupe + tartine / salade + œuf ou poulet</div>
      <div class="card-subtitle">Hydratation régulière</div>
      <span class="time-note">1 à 2 verres d’eau entre repas</span>
      <div class="card-subtitle">À éviter</div>
      <div class="card-bullet">• Repas lourds avant la première nuit</div>
      <div class="card-bullet">• Gros dessert sucré → somnolence</div>
    `,

    activite: `
      <div class="card-subtitle">Activer sans fatiguer</div>
      <div class="card-subtitle">Activité douce</div>
      <span class="time-note">20 à 40 min</span>
      <div class="card-bullet">• Marche, vélo tranquille, étirements</div>
      <div class="card-subtitle">Horaires idéaux</div>
      <span class="time-note">Matin ou début d’après-midi</span>
      <div class="card-subtitle">À éviter</div>
      <span class="time-note">Après 19h–20h</span>
      <div class="card-bullet">• Risque d’excitation → sommeil difficile</div>
    `,

    recette: `
      <div class="card-subtitle">Recette : Muffins aux œufs</div>
      <div class="recipe-visual">🥚 🥦 🧁</div>

      <div class="recipe-grid">
        <div class="recipe-panel">
          <div class="recipe-title">ℹ️ Infos pratiques</div>
          <div class="card-bullet">• Plat : Petit-déjeuner / snack</div>
          <div class="card-bullet">• Catégorie : Recette facile</div>
          <div class="card-bullet">• Préparation : 10 minutes</div>
          <div class="card-bullet">• Cuisson : 18 minutes</div>
          <div class="card-bullet">• Temps total : 28 minutes</div>
          <div class="card-bullet">• Portions : 10 muffins aux œufs</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">🧺 Ingrédients</div>
          <div class="card-bullet">• 5 œufs entiers</div>
          <div class="card-bullet">• 5 blancs d’œuf</div>
          <div class="card-bullet">• 80 g d’oignon en dés</div>
          <div class="card-bullet">• 100 g de champignons en dés</div>
          <div class="card-bullet">• 75 g de poivrons en dés</div>
          <div class="card-bullet">• 1 poignée d’épinards</div>
          <div class="card-bullet">• 90 g de brocoli</div>
          <div class="card-bullet">• 170 g de jambon</div>
          <div class="card-bullet">• 70 ml de lait ou lait d’amande non sucré</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">👩‍🍳 Instructions</div>
          <div class="card-bullet">1. Préchauffer le four à 180°.</div>
          <div class="card-bullet">2. Couper tous les légumes en petits dés.</div>
          <div class="card-bullet">3. Fouetter les œufs et le lait dans un grand bol.</div>
          <div class="card-bullet">4. Ajouter les légumes coupés.</div>
          <div class="card-bullet">5. Verser dans un moule à muffins graissé.</div>
          <div class="card-bullet">6. Cuire 18 à 20 minutes.</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">📝 Notes</div>
          <div class="card-bullet">• Manger léger avant la prise de poste aide à mieux rester éveillé(e).</div>
          <div class="card-bullet">• Préparer à l’avance pour avoir des options sur plusieurs jours.</div>
        </div>
      </div>
    `
  },

  nuits: {
    titre: "Tu es en période de nuits consécutives",
    objectif: "Tenir sur la durée et récupérer.",

    sommeil: `
      <div class="card-subtitle">Récupérer efficacement</div>
      <div class="card-bullet">• Conserver une plage de sommeil stable</div>
      <span class="time-note">Exemple : 7h–12h ou 8h–13h</span>
      <div class="card-bullet">• Environnement : noir complet + 18–19°C + calme</div>
      <div class="card-bullet">• Fractionnement possible</div>
      <span class="time-note">Exemple : 5h matin + sieste 1h30–2h vers 16h</span>
      <div class="card-subtitle">Sommeil total visé</div>
      <span class="time-note">7 à 8 h</span>
      <div class="card-bullet">• Power nap possible en salle de repos</div>
      <span class="time-note">10 à 20 min suffisent</span>
    `,

    nutrition: `
      <div class="card-subtitle">Maintenir l’énergie</div>
      <div class="card-bullet">• Repas principal avant la nuit</div>
      <div class="card-bullet">• Exemple : riz + légumes + poulet</div>
      <div class="card-subtitle">Collations pendant la nuit</div>
      <span class="time-note">Toutes les 3 à 4 h</span>
      <div class="card-bullet">• Yaourt, œuf dur, poignée d’amandes</div>
      <div class="card-bullet">• Hydratation en petites quantités régulières</div>
      <div class="card-subtitle">À éviter</div>
      <div class="card-bullet">• Sodas / sucre continu</div>
      <div class="card-bullet">• Gros repas nocturnes</div>
    `,

    activite: `
      <div class="card-subtitle">Maintenir la vigilance</div>
      <div class="card-bullet">• Changer de position</div>
      <div class="card-bullet">• Rouler les épaules</div>
      <span class="time-note">10 répétitions lentes</span>
      <div class="card-bullet">• Regarder au loin</div>
      <span class="time-note">10–20 secondes</span>
      <div class="card-bullet">• Se masser nuque / tempes</div>
      <span class="time-note">10–15 sec</span>
      <div class="card-bullet">• 3 cycles de respiration lente</div>
      <div class="card-subtitle">À faire</div>
      <div class="card-bullet">• Dès sensation de baisse d’attention</div>
    `,

    recette: `
      <div class="card-subtitle">Recette : Boules énergie amande-coco</div>
      <div class="recipe-visual">🥥 🌰 ⚡</div>

      <div class="recipe-grid">
        <div class="recipe-panel">
          <div class="recipe-title">ℹ️ Infos pratiques</div>
          <div class="card-bullet">• Catégorie : Snacks</div>
          <div class="card-bullet">• Préparation : 10 minutes</div>
          <div class="card-bullet">• Portions : 12 boules d’énergie</div>
          <div class="card-bullet">• Sans cuisson</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">🧺 Ingrédients</div>
          <div class="card-bullet">• 80 g de flocons d’avoine à l’ancienne</div>
          <div class="card-bullet">• 50 g de noix de coco râpée non sucrée</div>
          <div class="card-bullet">• 125 g de beurre d’amande crémeux</div>
          <div class="card-bullet">• 2 mesures de protéines</div>
          <div class="card-bullet">• 30 g de miel</div>
          <div class="card-bullet">• 10 g de mini pépites de chocolat</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">👩‍🍳 Instructions</div>
          <div class="card-bullet">1. Mélanger tous les ingrédients dans un bol.</div>
          <div class="card-bullet">2. Obtenir une pâte homogène.</div>
          <div class="card-bullet">3. Former 12 petites boules.</div>
          <div class="card-bullet">4. Placer dans un contenant hermétique.</div>
          <div class="card-bullet">5. Réfrigérer jusqu’au moment de déguster.</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">📝 Notes</div>
          <div class="card-bullet">• Le sucre donne un boost court, souvent suivi d’un coup de fatigue.</div>
          <div class="card-bullet">• Les snacks protéinés aident à maintenir l’énergie sur la durée.</div>
        </div>
      </div>
    `
  },

  retourJour: {
    titre: "Tu retrouves progressivement un rythme de jour",
    objectif: "Revenir au rythme de jour sans s’épuiser.",

    sommeil: `
      <div class="card-subtitle">Retrouver un rythme de jour rapidement</div>
      <div class="card-bullet">• Après la dernière nuit, dormir 3 à 5 h maximum le matin</div>
      <span class="time-note">Exemple : 7h–11h ou 8h–12h</span>
      <div class="card-bullet">• Éviter de redormir l’après-midi</div>
      <span class="time-note">Si besoin : sieste ≤ 20–30 min avant 15h</span>
      <div class="card-bullet">• Se coucher le soir même entre 21h30 et 23h</div>
      <div class="card-bullet">• S’exposer à la lumière naturelle dès le réveil</div>
      <span class="time-note">Sortir 15–30 min</span>
    `,

    nutrition: `
      <div class="card-subtitle">Relancer le rythme du corps</div>
      <div class="card-bullet">• Revenir à 3 repas “jour”</div>
      <div class="card-bullet">• Petit-déjeuner léger mais structurant</div>
      <div class="card-bullet">• Exemple : yaourt + fruit + tartine / boisson chaude</div>
      <div class="card-bullet">• Repas du midi équilibré</div>
      <div class="card-bullet">• Hydratation régulière</div>
      <span class="time-note">1 verre toutes les 1–2 h</span>
      <div class="card-subtitle">À éviter</div>
      <div class="card-bullet">• Sauter des repas</div>
      <div class="card-bullet">• Continuer à manger comme la nuit</div>
      <div class="card-bullet">• Excès de café</div>
    `,

    activite: `
      <div class="card-subtitle">Relancer le corps en douceur</div>
      <div class="card-bullet">• Lumière + mouvement</div>
      <span class="time-note">Sortir 15 à 30 min</span>
      <div class="card-bullet">• Marche tranquille, extérieur, café dehors</div>
      <div class="card-bullet">• Activité douce : marche, étirements, yoga doux</div>
      <span class="time-note">20–30 min</span>
      <div class="card-bullet">• Vie quotidienne : courses, ménage léger, cuisiner</div>
      <div class="card-bullet">• Moment calme : lecture, musique</div>
      <div class="card-bullet">• Moment social : famille, discussion</div>
      <div class="card-subtitle">À éviter</div>
      <div class="card-bullet">• Sport intense</div>
      <div class="card-bullet">• Rester inactif toute la journée</div>
      <div class="card-bullet">• Écran prolongé toute la journée</div>
    `,

    recette: `
      <div class="card-subtitle">Recette : Smoothie fraise</div>
      <div class="recipe-visual">🍓 🥤 🌿</div>

      <div class="recipe-grid">
        <div class="recipe-panel">
          <div class="recipe-title">ℹ️ Infos pratiques</div>
          <div class="card-bullet">• Catégorie : Petit-déjeuner</div>
          <div class="card-bullet">• Niveau : Facile</div>
          <div class="card-bullet">• Préparation : 5 minutes</div>
          <div class="card-bullet">• Portions : 1</div>
          <div class="card-bullet">• Équipement : Blender</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">🧺 Ingrédients</div>
          <div class="card-bullet">• 230 ml de lait d’amande non sucré</div>
          <div class="card-bullet">• 70 g de fraises tranchées</div>
          <div class="card-bullet">• 160 g de chou-fleur en riz surgelé</div>
          <div class="card-bullet">• 30 ml de noix de cajou crues</div>
          <div class="card-bullet">• 1 cs d’extrait de vanille</div>
          <div class="card-bullet">• Zeste de citron optionnel</div>
          <div class="card-bullet">• 1 cs de protéine en poudre</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">👩‍🍳 Instructions</div>
          <div class="card-bullet">1. Mettre tous les ingrédients dans le blender.</div>
          <div class="card-bullet">2. Mixer jusqu’à obtenir une texture bien lisse.</div>
          <div class="card-bullet">3. Servir immédiatement et savourer.</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">📝 Notes</div>
          <div class="card-bullet">• Après les nuits, le corps a besoin de retrouver un rythme régulier.</div>
          <div class="card-bullet">• Reprendre des repas classiques aide à réinitialiser l’horloge biologique.</div>
        </div>
      </div>
    `
  },

  joursLongs: {
    titre: "Tu es dans une période de journées longues ou d’après-midi",
    objectif: "Préserver la récupération et tenir dans la durée.",

    sommeil: `
      <div class="card-subtitle">Préserver la récupération malgré la longueur des journées</div>
      <div class="card-bullet">• Après une journée longue</div>
      <span class="time-note">Exemple : 06h40–18h40</span>
      <span class="time-note">Coucher entre 22h00 et 23h00</span>
      <div class="card-bullet">• Après un après-midi</div>
      <span class="time-note">14h00–22h10</span>
      <span class="time-note">Coucher entre 23h00 et 00h30 maximum</span>
      <div class="card-bullet">• Retour au calme avant le coucher</div>
      <span class="time-note">30 à 60 min sans écran</span>
      <div class="card-bullet">• Lumière tamisée, lecture, musique, douche tiède</div>
      <div class="card-subtitle">À éviter</div>
      <div class="card-bullet">• Se coucher très tard après un après-midi</div>
      <div class="card-bullet">• Longue sieste tardive après 16h–17h</div>
      <div class="card-bullet">• Enchaîner plusieurs jours avec peu de sommeil</div>
    `,

    nutrition: `
      <div class="card-subtitle">Tenir dans la durée</div>
      <div class="card-bullet">• Repas avant poste</div>
      <div class="card-bullet">• Exemple : féculents + protéines + légumes</div>
      <div class="card-bullet">• Riz / pâtes + viande / œufs + légumes</div>
      <div class="card-subtitle">Collations planifiées</div>
      <span class="time-note">Toutes les 4–5 h</span>
      <div class="card-bullet">• Fruit + noix / fromage blanc</div>
      <div class="card-subtitle">Hydratation</div>
      <span class="time-note">Petites quantités toutes les 1–2 h</span>
      <div class="card-subtitle">À éviter</div>
      <div class="card-bullet">• Grignotage sucré continu</div>
      <div class="card-bullet">• Repas sautés → fatigue accrue</div>
    `,

    activite: `
      <div class="card-subtitle">Relâcher les tensions</div>
      <div class="card-bullet">• Relâcher les épaules volontairement</div>
      <span class="time-note">5–10 sec</span>
      <div class="card-bullet">• Étirement du dos</div>
      <div class="card-bullet">• Secouer doucement bras / mains</div>
      <div class="card-bullet">• Relâcher la mâchoire</div>
      <div class="card-bullet">• Respirations lentes</div>
      <span class="time-note">Inspiration 4 sec / expiration 6 sec</span>
      <div class="card-subtitle">À faire</div>
      <div class="card-bullet">• En fin de demi-journée ou lorsque la tension est ressentie</div>
      <div class="card-bullet">• Power nap possible en salle de repos</div>
      <span class="time-note">10–20 min suffisent</span>
    `,

    recette: `
      <div class="card-subtitle">Recette : Pancakes aux quinoa et myrtilles</div>
      <div class="recipe-visual">🥞 🫐 ⚡</div>

      <div class="recipe-grid">
        <div class="recipe-panel">
          <div class="recipe-title">ℹ️ Infos pratiques</div>
          <div class="card-bullet">• Catégorie : Petit-déjeuner</div>
          <div class="card-bullet">• Portions : 1 portion, environ 4 pancakes</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">🧺 Ingrédients</div>
          <div class="card-bullet">• 460 g de quinoa cuit</div>
          <div class="card-bullet">• 10 ml d’huile de pépins de raisin</div>
          <div class="card-bullet">• 250 g de lait d’amande</div>
          <div class="card-bullet">• 4 œufs</div>
          <div class="card-bullet">• 15 ml de miel</div>
          <div class="card-bullet">• 230 g de myrtilles</div>
          <div class="card-bullet">• 5 ml de sel</div>
          <div class="card-bullet">• 15 ml de levure chimique</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">👩‍🍳 Instructions</div>
          <div class="card-bullet">1. Mixer le lait d’amande, les œufs, le miel, le quinoa et l’huile.</div>
          <div class="card-bullet">2. Ajouter le sel et la levure chimique puis mixer quelques secondes.</div>
          <div class="card-bullet">3. Préchauffer une poêle et graisser légèrement.</div>
          <div class="card-bullet">4. Verser environ 60 ml de pâte pour chaque pancake.</div>
          <div class="card-bullet">5. Ajouter quelques myrtilles pendant la cuisson.</div>
          <div class="card-bullet">6. Retourner quand des bulles apparaissent.</div>
          <div class="card-bullet">7. Servir quand les pancakes sont bien dorés.</div>
        </div>

        <div class="recipe-panel">
          <div class="recipe-title">📝 Notes</div>
          <div class="card-bullet">• Sur une longue journée, l’énergie se gère dans la durée.</div>
          <div class="card-bullet">• Mieux vaut manger régulièrement que faire un gros repas puis grignoter.</div>
        </div>
      </div>
    `
  }
};
