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

const phaseAdvice = {
  matins: [
    "Protège ton coucher les deux soirs précédents pour éviter d’arriver avec une dette de sommeil.",
    "Prépare ton petit-déjeuner et ton hydratation la veille si l’évènement est tôt.",
    "Évite de compenser la fatigue avec trop de café en fin de journée."
  ],

  transitionJourNuit: [
    "Prévois une sieste courte de 20 à 30 minutes si la fatigue monte.",
    "Évite les repas trop lourds avant l’évènement pour limiter la somnolence.",
    "Garde une activité douce, sans séance intense tardive."
  ],

  nuits: [
    "Protège ton sommeil de jour avant l’évènement.",
    "Prévois une stratégie de retour sécurisée si la fatigue est importante.",
    "Évite de compter uniquement sur la caféine pour tenir."
  ],

  retourJour: [
    "Expose-toi à la lumière naturelle le matin pour aider ton corps à revenir au rythme de jour.",
    "Évite de surcharger la journée précédant l’évènement.",
    "Reprends des repas simples aux horaires de jour."
  ],

  joursLongs: [
    "Anticipe repas, collations et hydratation pour éviter le coup de fatigue.",
    "Prévois une vraie récupération après l’évènement.",
    "Garde un retour au calme avant le sommeil."
  ]
};

const eventAdvice = {
  mariage: [
    "Prépare tenue, trajet et affaires la veille pour réduire le stress.",
    "Hydrate-toi régulièrement pendant la journée.",
    "Prévois une récupération calme le lendemain si la soirée se prolonge."
  ],

  vacances: [
    "Essaie de ne pas commencer les vacances déjà épuisé.",
    "Prévois une hydratation régulière pendant le trajet.",
    "Si le départ est tôt, prépare les bagages la veille."
  ],

  randonnee: [
    "Augmente l’hydratation la veille et le matin.",
    "Prévois un repas digeste avec glucides complexes avant l’effort.",
    "Évite une séance sportive intense la veille."
  ],

  course: [
    "Réduis l’intensité sportive la veille.",
    "Évite de tester un nouvel aliment le jour de la course.",
    "Prévois hydratation, échauffement et récupération."
  ],

  competition: [
    "Priorise le sommeil les deux nuits précédentes.",
    "Prépare ton matériel à l’avance.",
    "Garde une alimentation connue et digeste avant l’épreuve."
  ],

  examen: [
    "Évite la nuit blanche : la récupération aide la concentration.",
    "Prépare documents, matériel et trajet la veille.",
    "Prends un repas simple pour éviter le coup de fatigue."
  ],

  entretien: [
    "Prépare ton trajet, tes documents et ta tenue la veille.",
    "Évite trop de café juste avant l’entretien.",
    "Prends quelques respirations lentes avant d’entrer."
  ],

  voyage: [
    "Prévois eau, collation stable et temps de récupération.",
    "Si le trajet est long, marche quelques minutes dès que possible.",
    "Protège ton sommeil avant le départ."
  ],

  repasMidi: [
    "Évite d’arriver affamé si le repas est tardif.",
    "Hydrate-toi avant et après le repas.",
    "Reprends léger au repas suivant si le repas est copieux."
  ],

  repasSoir: [
    "Évite de manger trop lourd si tu dois dormir tôt.",
    "Prévois un retour au calme après le repas.",
    "Limite les excitants en fin de journée."
  ],

  jeune: [
    "Hydrate-toi correctement avant le début du jeûne.",
    "Évite les efforts intenses pendant les périodes de fatigue.",
    "Reprends l’alimentation progressivement."
  ],

  medecin: [
    "Note tes questions avant le rendez-vous.",
    "Prépare documents, traitements et examens utiles.",
    "Si le rendez-vous tombe après une nuit, prévois une marge de récupération."
  ],

  demenagement: [
    "Fractionne l’effort en blocs avec pauses.",
    "Hydrate-toi dès le matin.",
    "Évite de porter lourd si tu sors d’un bloc de nuits."
  ],

  soiree: [
    "Anticipe ton sommeil avant la soirée.",
    "Hydrate-toi régulièrement pendant la soirée.",
    "Prévois une récupération le lendemain."
  ],

  autre: [
    "Protège ton sommeil la veille.",
    "Prévois une hydratation régulière.",
    "Évite de surcharger la journée précédente."
  ]
};

export function getPlanningAdvice(eventType, cardKey) {
  const phaseTips = phaseAdvice[cardKey] || phaseAdvice.retourJour;
  const eventTips = eventAdvice[eventType] || eventAdvice.autre;

  return {
    label: eventLabels[eventType] || "Évènement",
    tips: [...phaseTips, ...eventTips]
  };
}
