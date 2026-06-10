export function parseExcel(workbook) {
  console.log("Excel Parser lancé");

  const colorToTeam = {
    "66CCFF": "bleu",
    "FF3300": "rouge",
    "FFFF00": "jaune",
    "92D050": "vert"
  };

  const monthNameToNumber = {
    "Janvier": "01",
    "Février": "02",
    "Mars": "03",
    "Avril": "04",
    "Mai": "05",
    "Juin": "06",
    "Juillet": "07",
    "Août": "08",
    "Septembre": "09",
    "Octobre": "10",
    "Novembre": "11",
    "Décembre": "12"
  };

  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  const year = findYear(jsonData);
  console.log("Année détectée :", year);

  const monthBlocks = findMonthBlocks(jsonData, monthNameToNumber);
  console.log("Blocs mois détectés :", monthBlocks);

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
    const month = findMonthForColumn(col, monthBlocks);

    if (!dayNumber || !month || !year) return;

    const date = `${year}-${month}-${String(dayNumber).padStart(2, "0")}`;

    calendar.push({
      date,
      day: dayNumber,
      month,
      team,
      shift: normalizeShift(shift),
      cell: cellAddress
    });
  });

  console.log("Calendrier avec dates :", calendar.slice(0, 100));

  return {
    sheetName: firstSheetName,
    year,
    totalEntries: calendar.length,
    preview: calendar.slice(0, 100),
    calendar
  };
}

function findYear(jsonData) {
  for (const row of jsonData.slice(0, 5)) {
    for (const value of row) {
      if (typeof value === "number" && value >= 2020 && value <= 2100) {
        return value;
      }
    }
  }
  return null;
}

function findMonthBlocks(jsonData, monthNameToNumber) {
  const monthRow = jsonData[2] || [];
  const blocks = [];

  monthRow.forEach((value, col) => {
    if (monthNameToNumber[value]) {
      blocks.push({
        name: value,
        month: monthNameToNumber[value],
        startCol: col
      });
    }
  });

  return blocks;
}

function findMonthForColumn(col, monthBlocks) {
  let currentMonth = null;

  for (const block of monthBlocks) {
    if (col >= block.startCol) {
      currentMonth = block.month;
    }
  }

  return currentMonth;
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
