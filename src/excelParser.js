export function parseExcel(workbook) {
  console.log("Excel Parser lancé");

  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  const colorsFound = [];

  Object.keys(worksheet).forEach((cellAddress) => {
    if (cellAddress.startsWith("!")) return;

    const cell = worksheet[cellAddress];

    if (cell?.s?.fgColor) {
      colorsFound.push({
        cell: cellAddress,
        value: cell.v,
        fgColor: cell.s.fgColor,
        fill: cell.s
      });
    }
  });

  console.log("Couleurs trouvées :", colorsFound.slice(0, 100));

  return {
    sheetName: firstSheetName,
    colorsFoundCount: colorsFound.length,
    sample: colorsFound.slice(0, 20)
  };
}
