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

  const detectedTeams = [];

  Object.keys(worksheet).forEach((cellAddress) => {
    if (cellAddress.startsWith("!")) return;

    const cell = worksheet[cellAddress];

    const color = cell?.s?.fgColor?.rgb;

    if (!color) return;

    const team = colorToTeam[color];

    if (!team) return;

    detectedTeams.push({
      cell: cellAddress,
      shift: cell.v,
      team: team,
      color: color
    });
  });

  console.log("Équipes détectées :", detectedTeams);

  return {
    sheetName: firstSheetName,
    teamsDetected: detectedTeams.length,
    teams: detectedTeams
  };
}
