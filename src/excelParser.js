export function parseExcel(workbook) {

  console.log("Excel Parser lancé");

  const firstSheetName = workbook.SheetNames[0];

  const worksheet = workbook.Sheets[firstSheetName];

  const jsonData = XLSX.utils.sheet_to_json(
    worksheet,
    { header: 1 }
  );

  console.log("Nombre de lignes :", jsonData.length);

  return {
    sheetName: firstSheetName,
    totalRows: jsonData.length
  };
}
