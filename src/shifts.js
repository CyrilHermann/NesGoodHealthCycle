export function getCardFromShift(shift) {

  switch (shift) {

    case "matin":
      return "matins";

    case "apresMidi":
      return "joursLongs";

    case "nuit":
      return "nuits";

    case "jour":
      return "retourJour";

    default:
      return "matins";
  }

}
