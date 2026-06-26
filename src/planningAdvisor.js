export const eventLabels = {
  mariage: "Mariage",
  vacances: "Vacances",
  randonnee: "Randonnée",
  course: "Course",
  competition: "Compétition sportive",
  examen: "Examen",
  entretien: "Entretien",
  voyage: "Voyage",
  repasMidi: "Repas famille midi",
  repasSoir: "Repas famille soir",
  jeune: "Jour de jeûne",
  medecin: "RDV médecin",
  demenagement: "Déménagement",
  soiree: "Soirée festive",
  autre: "Autre"
};

const planningAdvisor = {
  mariage: {
    matins: [
      "Protège ton coucher les deux soirs précédents pour éviter d’arriver fatigué au mariage.",
      "Prépare tenue, trajet et affaires la veille pour alléger le matin.",
      "Le jour J, prends un petit-déjeuner complet et hydrate-toi dès le réveil."
    ],
    transitionJourNuit: [
      "Prévois une sieste courte si la journée risque de se prolonger.",
      "Évite de trop décaler ton rythme juste avant le mariage.",
      "Garde une alimentation simple avant l’évènement pour limiter la somnolence."
    ],
    nuits: [
      "Si tu sors d’une nuit, protège ton sommeil avant les préparatifs.",
      "Prévois une sieste de récupération avant la cérémonie si possible.",
      "Organise un retour sécurisé si la fatigue est importante."
    ],
    retourJour: [
      "Expose-toi à la lumière naturelle le matin pour recaler ton rythme.",
      "Évite de dormir trop longtemps le jour même pour profiter de l’évènement.",
      "Prévois une récupération calme le lendemain."
    ],
    joursLongs: [
      "Anticipe repas, eau et tenue si tu enchaînes travail long et mariage.",
      "Évite d’accumuler manque de sommeil et soirée prolongée.",
      "Allège les obligations du lendemain si possible."
    ]
  },

  vacances: {
    matins: [
      "Prépare les bagages la veille pour ne pas raccourcir ton sommeil.",
      "Garde un coucher régulier avant le départ.",
      "Prévois un petit-déjeuner simple avant de partir."
    ],
    transitionJourNuit: [
      "Évite de commencer les vacances avec une dette de sommeil.",
      "Planifie une sieste courte si le départ tombe après une période de transition.",
      "Hydrate-toi bien avant le trajet."
    ],
    nuits: [
      "Après un bloc de nuits, prévois une journée tampon avant un gros départ si possible.",
      "Protège ton sommeil avant le voyage.",
      "Évite de conduire longtemps juste après une nuit."
    ],
    retourJour: [
      "Utilise la lumière naturelle pour recaler ton rythme avant le départ.",
      "Reprends des repas de jour pour stabiliser ton énergie.",
      "Ne surcharge pas la veille du voyage."
    ],
    joursLongs: [
      "Prépare le départ avant le dernier long poste.",
      "Prévois une collation stable pour le trajet.",
      "Garde une soirée calme avant le départ."
    ]
  },

  randonnee: {
    matins: [
      "Couche-toi tôt la veille pour commencer la randonnée avec de l’énergie.",
      "Prends un petit-déjeuner avec glucides complexes et protéines.",
      "Prévois eau et collation avant de partir."
    ],
    transitionJourNuit: [
      "Évite une randonnée intense si tu es déjà en dette de sommeil.",
      "Fais une sieste courte avant si la fatigue est présente.",
      "Prévois une randonnée plus douce si tu passes bientôt en nuits."
    ],
    nuits: [
      "Évite une grosse randonnée juste après une nuit sans récupération.",
      "Protège ton sommeil avant l’effort.",
      "Prévois plus d’eau et des pauses régulières."
    ],
    retourJour: [
      "La lumière extérieure peut aider ton retour au rythme de jour.",
      "Choisis une randonnée modérée plutôt qu’intense.",
      "Prévois un repas de récupération après l’effort."
    ],
    joursLongs: [
      "Évite de cumuler longue journée de travail et randonnée exigeante.",
      "Prévois une hydratation renforcée.",
      "Planifie une récupération active après la sortie."
    ]
  },

  course: {
    matins: [
      "Protège ton sommeil les deux nuits précédant la course.",
      "Évite de tester un nouvel aliment le jour J.",
      "Prévois un échauffement progressif si la course est tôt."
    ],
    transitionJourNuit: [
      "Réduis l’intensité sportive avant la course.",
      "Garde une sieste courte si la fatigue monte.",
      "Évite un repas lourd avant l’effort."
    ],
    nuits: [
      "Si la course tombe après une nuit, ajuste ton objectif à ton niveau de fatigue.",
      "Privilégie la sécurité plutôt que la performance.",
      "Hydrate-toi et prévois une récupération longue après."
    ],
    retourJour: [
      "Reviens progressivement à un rythme de jour avant la course.",
      "Choisis un repas digeste avant l’effort.",
      "Évite de compenser la fatigue avec trop de café."
    ],
    joursLongs: [
      "Allège l’entraînement si tu enchaînes avec des postes longs.",
      "Prévois une récupération musculaire après la course.",
      "Hydrate-toi régulièrement dès la veille."
    ]
  },

  competition: {
    matins: [
      "Garde une routine stable avant la compétition.",
      "Prépare ton matériel la veille.",
      "Priorise le sommeil plutôt qu’un dernier entraînement intense."
    ],
    transitionJourNuit: [
      "Évite les changements brutaux de rythme avant la compétition.",
      "Planifie une sieste courte si besoin.",
      "Garde des repas simples et connus."
    ],
    nuits: [
      "Si la compétition suit une nuit, adapte tes ambitions.",
      "Protège ton sommeil de jour avant l’épreuve.",
      "Prévois une récupération renforcée après."
    ],
    retourJour: [
      "Expose-toi à la lumière le matin pour retrouver de la vigilance.",
      "Fais un échauffement plus progressif.",
      "Évite une journée trop chargée après l’épreuve."
    ],
    joursLongs: [
      "Anticipe l’alimentation et l’hydratation avant l’épreuve.",
      "Évite de cumuler poste long et performance maximale sans récupération.",
      "Planifie un retour au calme après."
    ]
  },

  examen: {
    matins: [
      "Évite la nuit blanche : le sommeil aide la mémoire.",
      "Prépare documents et matériel la veille.",
      "Prends un petit-déjeuner stable avant l’examen."
    ],
    transitionJourNuit: [
      "Prévois une révision légère, pas une surcharge tardive.",
      "Fais une sieste courte si la concentration baisse.",
      "Évite les repas lourds avant l’examen."
    ],
    nuits: [
      "Si l’examen tombe après une nuit, dors avant dès que possible.",
      "Prévois un trajet simple et sécurisé.",
      "Limite la caféine excessive qui peut augmenter le stress."
    ],
    retourJour: [
      "Expose-toi à la lumière naturelle pour améliorer la vigilance.",
      "Reprends un repas de jour avant l’examen.",
      "Prévois une récupération après l’effort mental."
    ],
    joursLongs: [
      "Planifie les révisions avant les longues journées.",
      "Prépare le matériel à l’avance.",
      "Garde une hydratation régulière pour soutenir l’attention."
    ]
  },

  entretien: {
    matins: [
      "Prépare tenue, trajet et documents la veille.",
      "Garde une routine calme le matin.",
      "Évite trop de café juste avant l’entretien."
    ],
    transitionJourNuit: [
      "Prévois une courte sieste si tu sens une baisse de vigilance.",
      "Évite de trop décaler ton sommeil avant l’entretien.",
      "Prends quelques respirations lentes avant d’entrer."
    ],
    nuits: [
      "Si l’entretien suit une nuit, protège ton sommeil avant.",
      "Prévois une marge de temps pour te réveiller correctement.",
      "Organise un retour sécurisé si tu es fatigué."
    ],
    retourJour: [
      "Utilise la lumière naturelle pour retrouver de l’énergie.",
      "Prévois une préparation simple et structurée.",
      "Évite de surcharger la journée après l’entretien."
    ],
    joursLongs: [
      "Prépare tout avant ton poste long.",
      "Hydrate-toi et mange simple avant l’entretien.",
      "Prévois un temps calme juste avant."
    ]
  },

  voyage: {
    matins: [
      "Prépare le sac la veille pour ne pas raccourcir ton sommeil.",
      "Prends une collation stable pour le trajet.",
      "Hydrate-toi dès le matin."
    ],
    transitionJourNuit: [
      "Évite de commencer le voyage déjà décalé et épuisé.",
      "Prévois une sieste courte avant un long trajet.",
      "Limite les repas lourds avant le départ."
    ],
    nuits: [
      "Évite de conduire longtemps juste après une nuit.",
      "Protège ton sommeil avant le départ.",
      "Prévois eau, collation et pauses régulières."
    ],
    retourJour: [
      "Expose-toi à la lumière naturelle avant de partir.",
      "Reviens à des repas de jour pour stabiliser ton énergie.",
      "Prévois un trajet moins chargé si possible."
    ],
    joursLongs: [
      "Prépare le voyage avant ton long poste.",
      "Évite de partir immédiatement après une journée très exigeante.",
      "Planifie des pauses pendant le trajet."
    ]
  },

  repasMidi: {
    matins: [
      "Ne saute pas le petit-déjeuner si le repas de midi est tardif.",
      "Hydrate-toi avant le repas.",
      "Prévois un dîner léger si le repas est copieux."
    ],
    transitionJourNuit: [
      "Garde un repas de midi équilibré pour ne pas perturber la transition.",
      "Évite l’excès de sucre qui peut accentuer la fatigue.",
      "Hydrate-toi régulièrement."
    ],
    nuits: [
      "Si tu dors le matin, évite de sacrifier trop de sommeil pour le repas.",
      "Prévois une sieste complémentaire si besoin.",
      "Mange modérément pour ne pas nuire au sommeil suivant."
    ],
    retourJour: [
      "Le repas de midi peut aider à réancrer ton rythme de jour.",
      "Garde une assiette équilibrée.",
      "Évite de prolonger la journée si la fatigue reste forte."
    ],
    joursLongs: [
      "Si tu travailles ensuite, évite un repas trop lourd.",
      "Hydrate-toi avant de reprendre le poste.",
      "Prévois une collation plus légère plus tard."
    ]
  },

  repasSoir: {
    matins: [
      "Évite un repas trop tardif si tu dois te lever tôt.",
      "Limite les excitants en fin de soirée.",
      "Prévois un retour au calme avant le coucher."
    ],
    transitionJourNuit: [
      "Le repas du soir peut aider à décaler doucement le rythme.",
      "Garde un repas digeste avant la transition.",
      "Évite les grosses quantités de sucre."
    ],
    nuits: [
      "Si tu pars en nuit ensuite, garde un repas léger et structurant.",
      "Évite de commencer la nuit avec une digestion lourde.",
      "Prévois une collation stable pour plus tard."
    ],
    retourJour: [
      "Utilise le repas du soir pour stabiliser ton retour au rythme de jour.",
      "Évite les repas très lourds qui gênent le sommeil.",
      "Couche-toi à une heure raisonnable."
    ],
    joursLongs: [
      "Après un long poste, privilégie un repas simple.",
      "Évite de repousser trop tard le coucher.",
      "Hydrate-toi avant et après le repas."
    ]
  },

  jeune: {
    matins: [
      "Hydrate-toi correctement avant le début du jeûne.",
      "Évite les efforts intenses pendant le poste.",
      "Reprends l’alimentation progressivement."
    ],
    transitionJourNuit: [
      "Sois prudent si le jeûne tombe juste avant une nuit.",
      "Prévois une hydratation suffisante avant la période de jeûne.",
      "Évite une activité intense tardive."
    ],
    nuits: [
      "Le jeûne pendant une nuit peut accentuer la fatigue : surveille tes signaux.",
      "Priorise l’hydratation dès que possible.",
      "Évite de rompre le jeûne avec un repas trop lourd."
    ],
    retourJour: [
      "Reprends les repas progressivement pour soutenir le retour au rythme de jour.",
      "Hydrate-toi régulièrement.",
      "Évite une journée trop chargée."
    ],
    joursLongs: [
      "Évite de cumuler jeûne, longue journée et effort intense.",
      "Planifie les moments d’hydratation autorisés.",
      "Reste attentif aux signes de fatigue inhabituelle."
    ]
  },

  medecin: {
    matins: [
      "Prépare tes questions et documents la veille.",
      "Garde une marge de temps après le poste.",
      "Note tes symptômes ou observations importantes."
    ],
    transitionJourNuit: [
      "Signale ton rythme de travail si le rendez-vous concerne fatigue ou sommeil.",
      "Évite d’arriver sans avoir dormi si possible.",
      "Prépare les informations sur tes horaires récents."
    ],
    nuits: [
      "Si le rendez-vous suit une nuit, prévois un temps de repos avant.",
      "Note tes questions avant pour ne rien oublier.",
      "Évite de conduire fatigué si tu peux te faire accompagner."
    ],
    retourJour: [
      "Le rendez-vous peut aider à faire le point après les nuits.",
      "Prépare les documents médicaux utiles.",
      "Garde le reste de la journée léger si tu récupères encore."
    ],
    joursLongs: [
      "Anticipe le trajet pour éviter le stress.",
      "Hydrate-toi et mange simple avant le rendez-vous.",
      "Note les recommandations immédiatement après."
    ]
  },

  demenagement: {
    matins: [
      "Prévois les tâches lourdes après une vraie nuit de sommeil.",
      "Hydrate-toi dès le matin.",
      "Fractionne l’effort en blocs courts."
    ],
    transitionJourNuit: [
      "Évite de te fatiguer excessivement avant un bloc de nuits.",
      "Priorise les cartons légers et l’organisation.",
      "Garde une sieste courte si besoin."
    ],
    nuits: [
      "Évite un déménagement lourd juste après une nuit.",
      "Protège ton sommeil avant les efforts physiques.",
      "Demande de l’aide pour les charges lourdes."
    ],
    retourJour: [
      "Reprends doucement l’activité physique après les nuits.",
      "Fractionne le déménagement avec des pauses.",
      "Hydrate-toi régulièrement."
    ],
    joursLongs: [
      "Ne cumule pas poste long et déménagement intense sans pause.",
      "Prévois repas simples et hydratation.",
      "Planifie une récupération le lendemain."
    ]
  },

  soiree: {
    matins: [
      "Évite de te coucher trop tard si tu travailles tôt ensuite.",
      "Hydrate-toi pendant la soirée.",
      "Prévois un retour calme avant le sommeil."
    ],
    transitionJourNuit: [
      "La soirée peut décaler ton rythme, mais évite l’excès si une nuit approche.",
      "Prévois une sieste courte avant si nécessaire.",
      "Hydrate-toi régulièrement."
    ],
    nuits: [
      "Si tu sors après une nuit, protège d’abord ton sommeil.",
      "Évite de conduire si la fatigue est importante.",
      "Prévois une récupération longue après."
    ],
    retourJour: [
      "Évite de casser complètement ton retour au rythme de jour.",
      "Garde une hydratation régulière.",
      "Prévois une journée plus douce le lendemain."
    ],
    joursLongs: [
      "Après un long poste, limite la durée de la soirée si tu es épuisé.",
      "Hydrate-toi et mange avant de sortir.",
      "Garde un plan de retour simple."
    ]
  },

  autre: {
    matins: [
      "Protège ton coucher la veille.",
      "Prépare ce qui peut l’être à l’avance.",
      "Hydrate-toi dès le matin."
    ],
    transitionJourNuit: [
      "Évite de surcharger cette période de transition.",
      "Garde une sieste courte possible.",
      "Prévois des repas simples."
    ],
    nuits: [
      "Protège ton sommeil avant l’évènement.",
      "Prévois une marge de récupération.",
      "Évite les trajets risqués en cas de fatigue."
    ],
    retourJour: [
      "Expose-toi à la lumière naturelle.",
      "Reprends des repères de jour.",
      "Allège la journée si la fatigue est encore présente."
    ],
    joursLongs: [
      "Anticipe alimentation, hydratation et récupération.",
      "Évite d’enchaîner sans pause.",
      "Prévois un retour au calme."
    ]
  }
};

export function getPlanningAdvice(eventType, cardKey) {
  const eventBlock = planningAdvisor[eventType] || planningAdvisor.autre;
  const tips = eventBlock[cardKey] || eventBlock.retourJour;

  return {
    label: eventLabels[eventType] || "Évènement",
    tips
  };
}
