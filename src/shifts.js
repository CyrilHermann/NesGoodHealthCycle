export const shifts = {
  repos: {
    start: "Repos",
    end: "Repos"
  },

  matin: {
    start: "06:10",
    end: "14:10"
  },

  apresMidi: {
    start: "14:00",
    end: "22:10"
  },

  nuit: {
    start: "22:00",
    end: "06:10"
  },

  jour: {
    start: "06:40 / 06:20",
    end: "18:40 / 18:20"
  }
};

export function getCardFromShift(shift) {
  switch (shift) {
    case "matin":
      return "matins";

    case "apresMidi":
      return "joursLongs";

    case "nuit":
      return "nuits";

    case "jour":
      return "joursLongs";

    case "repos":
      return "retourJour";

    default:
      return null;
  }
}
