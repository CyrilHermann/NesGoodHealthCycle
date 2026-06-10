export function parseExcel(workbook) {

  console.log("Excel Parser lancé");

  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  const jsonData = XLSX.utils.sheet_to_json(
    worksheet,
    { header: 1 }
  );

  console.log("Ligne 3 :", jsonData[3]);
  console.log("Ligne 4 :", jsonData[4]);
  console.log("Ligne 5 :", jsonData[5]);
  console.log("Ligne 6 :", jsonData[6]);
  console.log("Ligne 7 :", jsonData[7]);
  console.log("Ligne 8 :", jsonData[8]);

  return {
    ok: true
  };
}
