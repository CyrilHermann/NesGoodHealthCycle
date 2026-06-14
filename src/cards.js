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
      <span class="time-note">Plus de sommeil ou sieste les jours off</span>
    `,

    nutrition: `
      <div class="card-subtitle">Petit-déjeuner complet</div>
      <div class="card-bullet">• À prendre avant la prise de poste</div>

      <div class="card-subtitle">Hydratation</div>
      <div class="card-bullet">• Dès le réveil</div>

      <div class="card-subtitle">Collation éventuelle</div>
      <span class="time-note">Vers 10h00 - 11h00</span>

      <div class="card-subtitle">À éviter</div>
      <span class="time-note">Partir sans petit-déjeuner</span>
      <span class="time-note">Uniquement des viennoiseries</span>
    `,

    activite: `
      <div class="card-subtitle">Réveil progressif du corps</div>

      <div class="card-bullet">• Étirements</div>
      <div class="card-bullet">• Respiration profonde</div>
      <div class="card-bullet">• Eau fraîche sur les mains ou le visage</div>
      <div class="card-bullet">• Hydratation</div>

      <div class="card-subtitle">À utiliser en cas de</div>
      <span class="time-note">Démarrage lent</span>
    `,

    recette: "Avoine Double Chocolat."
  },

  transitionJourNuit: {
    titre: "Tu prépares ton passage au rythme de nuit",
    objectif: "Préparer le passage au rythme de nuit.",

    sommeil: `
      <div class="card-subtitle">Préparer le passage au rythme de nuit</div>

      <div class="card-subtitle">Sieste courte recommandée</div>
      <span class="time-note">20 à 30 min</span>

      <div class="card-subtitle">Créneau idéal</div>
      <span class="time-note">13h00 - 15h00</span>

      <div class="card-bullet">• Décaler progressivement le coucher</div>
      <div class="card-bullet">• Éviter les longues siestes tardives</div>
    `,

    nutrition: `
      <div class="card-subtitle">Faciliter l’adaptation au rythme de nuit</div>

      <div class="card-bullet">• Décaler progressivement les repas</div>
      <div class="card-bullet">• Prévoir un repas léger avant la première nuit</div>
      <div class="card-bullet">• Maintenir une bonne hydratation</div>

      <div class="card-subtitle">À éviter</div>
      <div class="card-bullet">• Repas lourds</div>
      <div class="card-bullet">• Gros desserts sucrés</div>
    `,

    activite: `
      <div class="card-subtitle">Activer sans fatiguer</div>

      <div class="card-subtitle">Activité douce</div>
      <span class="time-note">20 à 40 min</span>

      <div class="card-bullet">• Idéalement le matin ou en début d’après-midi</div>
      <div class="card-bullet">• Éviter une activité tardive</div>
    `,

    recette: "Muffins aux œufs."
  },

  nuits: {
    titre: "Tu es en période de nuits consécutives",
    objectif: "Tenir sur la durée et récupérer.",

    sommeil: `
      <div class="card-subtitle">Récupérer efficacement</div>

      <div class="card-bullet">• Conserver une plage de sommeil stable</div>
      <div class="card-bullet">• Favoriser un environnement noir, calme et frais</div>
      <div class="card-bullet">• Le sommeil peut être fractionné</div>

      <div class="card-subtitle">Sommeil total visé</div>
      <span class="time-note">7 à 8 h</span>

      <div class="card-bullet">• Utiliser les power naps si nécessaire</div>
    `,

    nutrition: `
      <div class="card-subtitle">Maintenir l’énergie pendant la nuit</div>

      <div class="card-bullet">• Prendre le repas principal avant la nuit</div>

      <div class="card-subtitle">Collations régulières</div>
      <span class="time-note">Toutes les 3 à 4 h</span>

      <div class="card-bullet">• S’hydrater régulièrement</div>

      <div class="card-subtitle">À éviter</div>
      <div class="card-bullet">• Sucre en continu</div>
      <div class="card-bullet">• Gros repas nocturnes</div>
    `,

    activite: `
      <div class="card-subtitle">Maintenir la vigilance</div>

      <div class="card-bullet">• Changer de position</div>
      <div class="card-bullet">• Mobiliser les épaules</div>
      <div class="card-bullet">• Reposer les yeux</div>
      <div class="card-bullet">• Pratiquer l’auto-massage</div>
      <div class="card-bullet">• Utiliser une respiration lente</div>
    `,

    recette: "Boules énergie amande-coco."
  },

  retourJour: {
    titre: "Tu retrouves progressivement un rythme de jour",
    objectif: "Revenir au rythme de jour sans s’épuiser.",

    sommeil: `
      <div class="card-subtitle">Retrouver rapidement un rythme de jour</div>

      <div class="card-bullet">• Après la dernière nuit, éviter de dormir toute la journée</div>

      <div class="card-subtitle">Sommeil du matin conseillé</div>
      <span class="time-note">3 à 5 h</span>

      <div class="card-bullet">• Éviter les longues siestes l’après-midi</div>

      <div class="card-subtitle">Coucher du soir</div>
      <span class="time-note">21h30 - 23h00</span>

      <div class="card-bullet">• S’exposer à la lumière naturelle</div>
      <div class="card-bullet">• Reprendre progressivement un rythme classique</div>
    `,

    nutrition: `
      <div class="card-subtitle">Relancer le rythme du corps</div>

      <div class="card-bullet">• Revenir à trois repas de jour</div>
      <div class="card-bullet">• Prendre un petit-déjeuner structurant</div>
      <div class="card-bullet">• Garder un repas équilibré</div>
      <div class="card-bullet">• Maintenir une hydratation régulière</div>

      <div class="card-subtitle">À éviter</div>
      <div class="card-bullet">• Continuer à manger comme pendant les nuits</div>
      <div class="card-bullet">• Excès de café</div>
    `,

    activite: `
      <div class="card-subtitle">Relancer le corps en douceur</div>

      <div class="card-bullet">• Lumière et mouvement</div>
      <div class="card-bullet">• Marche</div>
      <div class="card-bullet">• Étirements</div>
      <div class="card-bullet">• Yoga doux</div>
      <div class="card-bullet">• Activités du quotidien</div>
      <div class="card-bullet">• Moments calmes et sociaux</div>

      <div class="card-subtitle">À éviter</div>
      <div class="card-bullet">• Sport intense</div>
      <div class="card-bullet">• Écrans prolongés</div>
    `,

    recette: "Smoothie fraise."
  },

  joursLongs: {
    titre: "Tu es dans une période de journées longues ou d’après-midi",
    objectif: "Préserver la récupération et tenir dans la durée.",

    sommeil: `
      <div class="card-subtitle">Préserver la récupération</div>

      <div class="card-bullet">• Protéger le sommeil autour des longues journées et des après-midi</div>

      <div class="card-subtitle">Après une journée longue</div>
      <span class="time-note">22h00 - 23h00</span>

      <div class="card-subtitle">Après un poste d’après-midi</div>
      <span class="time-note">23h00 - 00h30</span>

      <div class="card-bullet">• Éviter d’accumuler de la fatigue</div>
      <div class="card-bullet">• Garder un rythme de récupération régulier</div>
    `,

    nutrition: `
      <div class="card-subtitle">Gérer l’énergie sur la durée</div>

      <div class="card-bullet">• Prévoir une alimentation adaptée au poste</div>
      <div class="card-bullet">• Planifier des collations si nécessaire</div>
      <div class="card-bullet">• Maintenir une hydratation régulière</div>

      <div class="card-subtitle">À éviter</div>
      <div class="card-bullet">• Gros repas qui fatiguent pendant le service</div>
    `,

    activite: `
      <div class="card-subtitle">Relâcher les tensions</div>

      <div class="card-bullet">• Épaules</div>
      <div class="card-bullet">• Dos</div>
      <div class="card-bullet">• Bras et mains</div>
      <div class="card-bullet">• Mâchoire</div>
      <div class="card-bullet">• Mouvements doux</div>
      <div class="card-bullet">• Étirements courts</div>
      <div class="card-bullet">• Respiration lente</div>
    `,

    recette: "Pancakes quinoa et myrtilles."
  }
};
