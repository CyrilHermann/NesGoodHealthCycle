export function parseExcel(workbook) {
  console.log("Excel Parser lancé");

  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  const coloredCells = [];

  Object.keys(worksheet).forEach((cellAddress) => {
    if (cellAddress.startsWith("!")) return;

    const cell = worksheet[cellAddress];

    if (cell.s && cell.s.fgColor) {
      coloredCells.push({
        cell: cellAddress,
        value: cell.v,
        color: cell.s.fgColor.rgb || cell.s.fgColor.indexed || cell.s.fgColor.theme
      });
    }
  });

  console.log("Cellules colorées :", coloredCells.slice(0, 50));

  return {
    sheetName: firstSheetName,
    coloredCellsCount: coloredCells.length,
    sample: coloredCells.slice(0, 20)
  };
}
