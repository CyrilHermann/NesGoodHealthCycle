export function detectCycleCard(calendar, team, dateKey) {
  const todayShift = getShift(calendar, team, dateKey);

  const previousShifts = getShiftsAround(calendar, team, dateKey, -5);
  const nextShifts = getShiftsAround(calendar, team, dateKey, 5);

  if (todayShift === "matin") {
    return "matins";
  }

  if (todayShift === "apresMidi" || todayShift === "jour") {
    return "joursLongs";
  }

  if (todayShift === "nuit") {
    return "nuits";
  }

  const hasUpcomingNight = nextShifts.includes("nuit");
  const hasPreviousNight = previousShifts.includes("nuit");

  if (!todayShift && hasUpcomingNight) {
    return "transitionJourNuit";
  }

  if (!todayShift && hasPreviousNight) {
    return "retourJour";
  }

  return null;
}

function getShift(calendar, team, dateKey) {
  return calendar[dateKey]?.[team]?.shift || null;
}

function getShiftsAround(calendar, team, dateKey, range) {
  const dates = Object.keys(calendar).sort();
  const index = dates.indexOf(dateKey);

  if (index === -1) return [];

  const result = [];

  if (range > 0) {
    for (let i = index + 1; i <= index + range && i < dates.length; i++) {
      const shift = getShift(calendar, team, dates[i]);
      if (shift) result.push(shift);
    }
  }

  if (range < 0) {
    for (let i = index - 1; i >= index + range && i >= 0; i--) {
      const shift = getShift(calendar, team, dates[i]);
      if (shift) result.push(shift);
    }
  }

  return result;
}
