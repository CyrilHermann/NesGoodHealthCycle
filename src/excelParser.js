export function parseExcel(workbook) {
  console.log("Excel Parser lancé");

  const firstSheetName = workbook.SheetNames[0];

  const worksheet = workbook.Sheets[firstSheetName];

  return worksheet;
}
