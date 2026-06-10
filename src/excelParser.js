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

    if (!color) return;

    const team = colorToTeam[color];

    if (!team) return;

    const decoded = XLSX.utils.decode_cell(cellAddress);

    const row = decoded.r;
    const col = decoded.c;

    const shift = cell.v;

    if (!["Matin", "A-M", "Nuit", "Jour"].includes(shift)) return;

    const dayCellAddress = XLSX.utils.encode_cell({
      r: row,
      c: col - 1
    });

    const dayCell = worksheet[dayCellAddress];

    let dayNumber = dayCell?.v;

    if (typeof dayNumber !== "number") {
      dayNumber = null;
    }

    calendar.push({
      day: dayNumber,
      team,
      shift,
      cell: cellAddress
    });

  });

  console.log("Calendrier brut :", calendar.slice(0, 50));

  return {
    sheetName: firstSheetName,
    totalEntries: calendar.length,
    preview: calendar.slice(0, 50)
  };

}
