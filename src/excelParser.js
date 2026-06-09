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

  const jsonData = XLSX.utils.sheet_to_json(
    worksheet,
    { header: 1 }
  );

  console.log("Ligne 3 :", jsonData[3]);
  console.log("Ligne 4 :", jsonData[4]);
  console.log("Ligne 5 :", jsonData[5]);

  const detectedTeams = [];

  Object.keys(worksheet).forEach((cellAddress) => {
    if (cellAddress.startsWith("!")) return;

    const cell = worksheet[cellAddress];
    const color = cell?.s?.fgColor?.rgb;
    const team = colorToTeam[color];

    if (!team) return;

    const decoded = XLSX.utils.decode_cell(cellAddress);

    detectedTeams.push({
      cell: cellAddress,
      row: decoded.r,
      col: decoded.c,
      shift: cell.v,
      team,
      color
    });
  });

  console.log("Équipes détectées :", detectedTeams.slice(0, 50));

  const calendarRows = detectedTeams
    .filter(item => ["Matin", "A-M", "Nuit", "Jour"].includes(item.shift))
    .map(item => ({
      row: item.row,
      col: item.col,
      cell: item.cell,
      team: item.team,
      shift: normalizeShift(item.shift)
    }));

  console.log("Lignes calendrier exploitables :", calendarRows.slice(0, 50));

  return {
    sheetName: firstSheetName,
    teamsDetected: detectedTeams.length,
    calendarRowsCount: calendarRows.length,
    preview: calendarRows.slice(0, 20)
  };
}

function normalizeShift(value) {
  if (value === "Matin") return "matin";
  if (value === "A-M") return "apresMidi";
  if (value === "Nuit") return "nuit";
  if (value === "Jour") return "jour";
  return "inconnu";
}
