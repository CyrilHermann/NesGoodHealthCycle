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
  menstruations: "Menstruations",
  autre: "Autre"
};

const phasePlans = {
  matins: {
    sommeil: "Protège ton coucher et garde une routine stable.",
    nutrition: "Prépare un petit-déjeuner complet et hydrate-toi dès le réveil.",
    activite: "Privilégie une activité douce pour réveiller le corps."
  },

  transitionJourNuit: {
    sommeil: "Prévois une sieste courte et évite les gros décalages brutaux.",
    nutrition: "Mange léger et décale progressivement tes repas.",
    activite: "Garde une activité douce, sans intensité tardive."
  },

  nuits: {
    sommeil: "Protège ton sommeil de jour et limite la lumière forte avant de dormir.",
    nutrition: "Prévois des collations simples, protéinées et peu sucrées.",
    activite: "Bouge par petites séquences pour maintenir la vigilance."
  },

  retourJour: {
    sommeil: "Reviens progressivement à un rythme de jour.",
    nutrition: "Reprends des repas simples aux horaires classiques.",
    activite: "Expose-toi à la lumière naturelle et bouge doucement."
  },

  joursLongs: {
    sommeil: "Protège ta récupération avant et après les longues amplitudes.",
    nutrition: "Anticipe repas, collations et hydratation.",
    activite: "Relâche régulièrement les épaules, le dos et la mâchoire."
  }
};

const eventPlans = {
  mariage: {
    j3: {
      sommeil: "Commence à protéger ton sommeil pour éviter d’arriver avec une dette de fatigue.",
      nutrition: "Prévois des repas simples et une bonne hydratation.",
      activite: "Garde une activité légère, sans chercher à trop en faire."
    },
    j2: {
      sommeil: "Essaie de garder une heure de coucher régulière.",
      nutrition: "Évite les repas très lourds ou très sucrés.",
      activite: "Prépare tranquillement tenue, trajet et organisation."
    },
    j1: {
      sommeil: "Priorise une soirée calme et un coucher raisonnable.",
      nutrition: "Hydrate-toi régulièrement et mange digeste.",
      activite: "Évite les efforts intenses et prépare tout à l’avance."
    },
    jourJ: {
      sommeil: "Si possible, garde un réveil progressif.",
      nutrition: "Prends un repas complet avant la cérémonie ou la fête.",
      activite: "Garde de l’énergie pour profiter pleinement de la journée."
    }
  },

  vacances: {
    j3: {
      sommeil: "Évite de commencer les vacances déjà épuisé.",
      nutrition: "Prévois des repas simples pendant la préparation.",
      activite: "Prépare progressivement les bagages."
    },
    j2: {
      sommeil: "Garde une routine de sommeil stable.",
      nutrition: "Hydrate-toi bien, surtout si un trajet approche.",
      activite: "Évite de tout faire à la dernière minute."
    },
    j1: {
      sommeil: "Prépare ton départ tôt pour ne pas raccourcir ta nuit.",
      nutrition: "Prévois eau et collation pour le trajet.",
      activite: "Allège ta journée autant que possible."
    },
    jourJ: {
      sommeil: "Si le départ est tôt, privilégie un réveil sans précipitation.",
      nutrition: "Bois régulièrement pendant le trajet.",
      activite: "Marche quelques minutes dès que possible."
    }
  },

  randonnee: {
    j3: {
      sommeil: "Commence à sécuriser ton sommeil pour arriver reposé.",
      nutrition: "Mange équilibré et hydrate-toi régulièrement.",
      activite: "Évite les grosses séances qui créent des courbatures."
    },
    j2: {
      sommeil: "Garde une nuit complète si possible.",
      nutrition: "Augmente légèrement les glucides complexes.",
      activite: "Prépare chaussures, sac et équipement."
    },
    j1: {
      sommeil: "Couche-toi tôt pour démarrer avec de l’énergie.",
      nutrition: "Prévois un repas digeste et une bonne hydratation.",
      activite: "Évite les efforts intenses."
    },
    jourJ: {
      sommeil: "Démarre progressivement.",
      nutrition: "Prends un petit-déjeuner adapté à l’effort.",
      activite: "Pense aux pauses, à l’eau et aux collations."
    }
  },

  course: {
    j3: {
      sommeil: "Priorise le sommeil : il soutient la performance.",
      nutrition: "Garde une alimentation habituelle et digeste.",
      activite: "Réduis progressivement l’intensité."
    },
    j2: {
      sommeil: "Évite une soirée trop tardive.",
      nutrition: "Hydrate-toi régulièrement.",
      activite: "Fais une séance légère ou du repos actif."
    },
    j1: {
      sommeil: "Protège ta nuit avant la course.",
      nutrition: "Ne teste aucun nouvel aliment.",
      activite: "Prépare tenue, dossard, chaussures et trajet."
    },
    jourJ: {
      sommeil: "Accepte que la nuit ne soit pas parfaite : reste calme.",
      nutrition: "Mange quelque chose de connu et digeste.",
      activite: "Échauffe-toi progressivement."
    }
  },

  competition: {
    j3: {
      sommeil: "Commence à sécuriser la récupération.",
      nutrition: "Garde une alimentation connue.",
      activite: "Réduis les charges inutiles."
    },
    j2: {
      sommeil: "Garde une routine stable.",
      nutrition: "Hydrate-toi et évite les nouveautés.",
      activite: "Prépare ton matériel."
    },
    j1: {
      sommeil: "Priorise le calme et le coucher raisonnable.",
      nutrition: "Mange simple et digeste.",
      activite: "Évite de vouloir compenser par un dernier gros entraînement."
    },
    jourJ: {
      sommeil: "Réveille-toi progressivement.",
      nutrition: "Mange ce que tu connais déjà.",
      activite: "Respecte ton échauffement et ton plan."
    }
  },

  examen: {
    j3: {
      sommeil: "Le sommeil consolide la mémoire : évite les nuits trop courtes.",
      nutrition: "Mange régulièrement pour soutenir la concentration.",
      activite: "Prévois de courtes pauses actives."
    },
    j2: {
      sommeil: "Évite les révisions tardives prolongées.",
      nutrition: "Hydrate-toi régulièrement.",
      activite: "Prépare une liste des points à revoir."
    },
    j1: {
      sommeil: "Évite la nuit blanche.",
      nutrition: "Mange simple et évite les excès de café.",
      activite: "Prépare documents, matériel et trajet."
    },
    jourJ: {
      sommeil: "Garde un réveil calme.",
      nutrition: "Prends un repas ou une collation stable.",
      activite: "Respire lentement avant de commencer."
    }
  },

  entretien: {
    j3: {
      sommeil: "Protège ton sommeil pour arriver clair et disponible.",
      nutrition: "Garde une alimentation simple.",
      activite: "Prépare les grandes lignes de ton entretien."
    },
    j2: {
      sommeil: "Évite de repousser le coucher.",
      nutrition: "Hydrate-toi régulièrement.",
      activite: "Prépare documents, tenue et trajet."
    },
    j1: {
      sommeil: "Privilégie une soirée calme.",
      nutrition: "Évite trop de café ou de sucre.",
      activite: "Relis tes notes puis coupe mentalement."
    },
    jourJ: {
      sommeil: "Garde un réveil progressif.",
      nutrition: "Mange léger mais suffisant.",
      activite: "Prends quelques respirations lentes avant d’entrer."
    }
  },

  voyage: {
    j3: {
      sommeil: "Évite d’accumuler de la fatigue avant le départ.",
      nutrition: "Garde une bonne hydratation.",
      activite: "Commence les préparatifs progressivement."
    },
    j2: {
      sommeil: "Protège ta nuit.",
      nutrition: "Prévois collations et eau pour le trajet.",
      activite: "Prépare documents, sac et horaires."
    },
    j1: {
      sommeil: "Prépare tout avant le soir pour dormir correctement.",
      nutrition: "Mange digeste.",
      activite: "Allège ta journée si possible."
    },
    jourJ: {
      sommeil: "Évite les départs dans la précipitation.",
      nutrition: "Bois régulièrement.",
      activite: "Marche dès que possible pendant les longues attentes."
    }
  },

  repasMidi: {
    j3: {
      sommeil: "Garde ton rythme habituel.",
      nutrition: "Évite les excès les jours précédents.",
      activite: "Bouge normalement."
    },
    j2: {
      sommeil: "Protège ton sommeil si le repas tombe après un poste exigeant.",
      nutrition: "Hydrate-toi bien.",
      activite: "Garde une activité légère."
    },
    j1: {
      sommeil: "Essaie de dormir suffisamment.",
      nutrition: "Mange simple pour arriver confortable.",
      activite: "Évite une séance intense tardive."
    },
    jourJ: {
      sommeil: "Garde ton énergie pour profiter du moment.",
      nutrition: "Évite d’arriver affamé si le repas est tardif.",
      activite: "Une marche après le repas peut aider la digestion."
    }
  },

  repasSoir: {
    j3: {
      sommeil: "Garde une routine stable.",
      nutrition: "Évite les excès répétés avant le repas.",
      activite: "Bouge normalement."
    },
    j2: {
      sommeil: "Protège ton coucher si tu travailles tôt ensuite.",
      nutrition: "Hydrate-toi régulièrement.",
      activite: "Prévois une activité douce."
    },
    j1: {
      sommeil: "Évite une soirée trop tardive la veille.",
      nutrition: "Mange simple.",
      activite: "Prépare ton organisation."
    },
    jourJ: {
      sommeil: "Si tu dois dormir tôt, limite la durée de la soirée.",
      nutrition: "Profite du repas, puis reprends léger ensuite.",
      activite: "Prévois un retour au calme avant le coucher."
    }
  },

  jeune: {
    j3: {
      sommeil: "Protège ton sommeil pour limiter la fatigue.",
      nutrition: "Prépare progressivement ton hydratation.",
      activite: "Évite les efforts très intenses."
    },
    j2: {
      sommeil: "Garde un rythme stable.",
      nutrition: "Mange équilibré et hydrate-toi.",
      activite: "Privilégie une activité douce."
    },
    j1: {
      sommeil: "Évite une nuit courte avant le jeûne.",
      nutrition: "Hydrate-toi correctement.",
      activite: "Allège l’activité physique."
    },
    jourJ: {
      sommeil: "Écoute les signaux de fatigue.",
      nutrition: "Reprends l’alimentation progressivement selon ton cadre de jeûne.",
      activite: "Évite les efforts intenses si tu te sens faible."
    }
  },

  medecin: {
    j3: {
      sommeil: "Observe ton sommeil et note les éléments importants.",
      nutrition: "Garde tes habitudes pour éviter de brouiller les observations.",
      activite: "Note les symptômes liés à l’effort si nécessaire."
    },
    j2: {
      sommeil: "Prépare les informations sur tes horaires récents.",
      nutrition: "Note tout changement alimentaire important.",
      activite: "Rassemble documents et résultats."
    },
    j1: {
      sommeil: "Essaie de dormir suffisamment.",
      nutrition: "Prépare la liste de questions.",
      activite: "Prévois ton trajet."
    },
    jourJ: {
      sommeil: "Si le rendez-vous suit une nuit, prévois une marge de récupération.",
      nutrition: "Mange simple avant le rendez-vous.",
      activite: "Note les recommandations après le rendez-vous."
    }
  },

  demenagement: {
    j3: {
      sommeil: "Protège ton sommeil avant les efforts physiques.",
      nutrition: "Hydrate-toi et mange suffisamment.",
      activite: "Commence les cartons progressivement."
    },
    j2: {
      sommeil: "Évite une nuit trop courte.",
      nutrition: "Prévois repas simples et faciles.",
      activite: "Organise les charges lourdes avec aide."
    },
    j1: {
      sommeil: "Couche-toi tôt si la journée sera physique.",
      nutrition: "Prépare eau et collations.",
      activite: "Évite de tout porter la veille."
    },
    jourJ: {
      sommeil: "Démarre progressivement.",
      nutrition: "Bois régulièrement et mange par petites prises.",
      activite: "Fractionne l’effort et fais des pauses."
    }
  },

  soiree: {
    j3: {
      sommeil: "Évite d’accumuler une dette de sommeil avant la soirée.",
      nutrition: "Garde une alimentation simple.",
      activite: "Bouge normalement."
    },
    j2: {
      sommeil: "Protège ton rythme.",
      nutrition: "Hydrate-toi bien.",
      activite: "Évite une séance tardive trop intense."
    },
    j1: {
      sommeil: "Essaie de dormir suffisamment.",
      nutrition: "Mange équilibré.",
      activite: "Prévois ton retour."
    },
    jourJ: {
      sommeil: "Si tu travailles tôt ensuite, limite la durée.",
      nutrition: "Hydrate-toi pendant la soirée.",
      activite: "Prévois une récupération le lendemain."
    }
  },
  menstruations: {
    j3: {
      sommeil: "Commence à protéger ton sommeil et évite d’accumuler une dette de fatigue.",
      nutrition: "Hydrate-toi régulièrement et privilégie des repas simples.",
      activite: "Garde une activité douce, sans chercher l’intensité."
    },
    j2: {
      sommeil: "Commence à protéger ton sommeil en te couchant un peu plus tôt si possible. Une bonne récupération aide souvent à mieux vivre cette période.",
      nutrition: "Favorise une alimentation riche en magnésium, en fer et bois régulièrement de l’eau. Réduis progressivement les aliments très salés afin de limiter les ballonnements.",
      activite: "Une marche, quelques étirements ou une séance de yoga doux favorisent la détente musculaire. Prépare aussi une bouillotte ou un coussin chauffant si tu en utilises habituellement."
    },
    j1: {
      sommeil: "Privilégie une soirée calme et conserve un rythme de sommeil régulier afin d’aborder cette période dans les meilleures conditions.",
      nutrition: "Choisis des repas légers et digestes, poursuis une bonne hydratation et limite les excès de sucre ou de sel pouvant accentuer certains inconforts.",
      activite: "Maintiens une activité physique modérée sans rechercher la performance. Prépare aussi tes protections menstruelles et privilégie des vêtements confortables."
    },
    jourJ: {
      sommeil: "Écoute ton niveau d’énergie et accorde-toi davantage de récupération lorsque cela est possible.",
      nutrition: "Privilégie des repas digestes, riches en fer, continue à bien t’hydrater et fractionne les repas si cela améliore ton confort.",
      activite: "La marche, les étirements, le yoga doux ou une activité très légère peuvent aider à diminuer les tensions. Une bouillotte chaude, une douche chaude et des exercices de respiration profonde peuvent aussi contribuer à soulager les douleurs du bas-ventre."
    }
  },
  autre: {
    j3: {
      sommeil: "Protège ton sommeil.",
      nutrition: "Hydrate-toi régulièrement.",
      activite: "Garde une activité modérée."
    },
    j2: {
      sommeil: "Évite d’accumuler de la fatigue.",
      nutrition: "Mange simple.",
      activite: "Prépare ce qui peut l’être."
    },
    j1: {
      sommeil: "Privilégie une soirée calme.",
      nutrition: "Évite les excès.",
      activite: "Allège ta journée."
    },
    jourJ: {
      sommeil: "Écoute ton niveau d’énergie.",
      nutrition: "Prévois eau et collation si besoin.",
      activite: "Adapte ton effort à ta récupération."
    }
  }
};

export function getPlanningAdvice(eventType, cardKey) {
  const eventBlock = eventPlans[eventType] || eventPlans.autre;
  const phase = phasePlans[cardKey] || phasePlans.retourJour;

  return {
    label: eventLabels[eventType] || "Évènement",
    plan: {
      j3: {
        sommeil: `${eventBlock.j3.sommeil} ${phase.sommeil}`,
        nutrition: `${eventBlock.j3.nutrition} ${phase.nutrition}`,
        activite: `${eventBlock.j3.activite} ${phase.activite}`
      },
      j2: {
        sommeil: `${eventBlock.j2.sommeil} ${phase.sommeil}`,
        nutrition: `${eventBlock.j2.nutrition} ${phase.nutrition}`,
        activite: `${eventBlock.j2.activite} ${phase.activite}`
      },
      j1: {
        sommeil: `${eventBlock.j1.sommeil} ${phase.sommeil}`,
        nutrition: `${eventBlock.j1.nutrition} ${phase.nutrition}`,
        activite: `${eventBlock.j1.activite} ${phase.activite}`
      },
      jourJ: {
        sommeil: `${eventBlock.jourJ.sommeil} ${phase.sommeil}`,
        nutrition: `${eventBlock.jourJ.nutrition} ${phase.nutrition}`,
        activite: `${eventBlock.jourJ.activite} ${phase.activite}`
      }
    }
  };
}
