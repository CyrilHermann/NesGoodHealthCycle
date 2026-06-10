export function parseExcel(workbook) {
  console.log("Excel Parser lancé");

  const colorToTeam = {
    "66CCFF": "bleu",
    "FF3300": "rouge",
    "FFFF00": "jaune",
    "92D050": "vert"
  };

  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  const calendar = [];

  Object.keys(worksheet).forEach((cellAddress) => {
    if (cellAddress.startsWith("!")) return;

    const cell = worksheet[cellAddress];
    const color = cell?.s?.fgColor?.rgb;
    const team = colorToTeam[color];

    if (!team) return;

    const decoded = XLSX.utils.decode_cell(cellAddress);
    const row = decoded.r;
    const col = decoded.c;
    const shift = cell.v;

    if (!["Matin", "A-M", "Nuit", "Jour"].includes(shift)) return;

    const dayNumber = findDayNumberOnLeft(worksheet, row, col);

    calendar.push({
      day: dayNumber,
      team,
      shift: normalizeShift(shift),
      cell: cellAddress
    });
  });

  console.log("Calendrier brut :", calendar.slice(0, 80));

  return {
    sheetName: firstSheetName,
    totalEntries: calendar.length,
    preview: calendar.slice(0, 80)
  };
}

function findDayNumberOnLeft(worksheet, row, col) {
  for (let c = col - 1; c >= Math.max(0, col - 5); c--) {
    const address = XLSX.utils.encode_cell({ r: row, c });
    const cell = worksheet[address];

    if (typeof cell?.v === "number") {
      return cell.v;
    }
  }

  return null;
}

function normalizeShift(value) {
  if (value === "Matin") return "matin";
  if (value === "A-M") return "apresMidi";
  if (value === "Nuit") return "nuit";
  if (value === "Jour") return "jour";
  return "inconnu";
}
