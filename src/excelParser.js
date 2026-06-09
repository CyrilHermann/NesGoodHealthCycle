export function parseExcel(workbook) {
  console.log("Excel Parser lancé");

  const colorToTeam = {
    FF66CCFF: "bleu",
    FFFF3300: "rouge",
    FFFFFF00: "jaune",
    FF92D050: "vert"
  };

  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  const coloredCells = [];

  Object.keys(worksheet).forEach((cellAddress) => {
    if (cellAddress.startsWith("!")) return;

    const cell = worksheet[cellAddress];
    const color = cell?.s?.fgColor?.rgb;

    if (!color) return;

    const team = colorToTeam[color];

    if (!team) return;

    coloredCells.push({
      cell: cellAddress,
      value: cell.v,
      color,
      team
    });
  });

  console.log("Cellules équipes détectées :", coloredCells);

  return {
    sheetName: firstSheetName,
    teamsDetected: coloredCells.length,
    cells: coloredCells
  };
}
