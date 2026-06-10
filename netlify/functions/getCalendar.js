
export async function handler() {
  try {
    const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const TABLE_NAME = "Calendar1";

    let allRecords = [];
    let offset = null;

    do {
      const url = new URL(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(TABLE_NAME)}`
      );

      if (offset) {
        url.searchParams.set("offset", offset);
      }

      const response = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        return {
          statusCode: 500,
          body: `Erreur Airtable : ${errorText}`
        };
      }

      const data = await response.json();
      allRecords = allRecords.concat(data.records);
      offset = data.offset;
    } while (offset);

    const calendar = {};

    allRecords.forEach((record) => {
      const fields = record.fields;

      const date = fields.Date;
      const team = fields.Team;
      const shift = fields.shift;

      if (!date || !team || !shift) return;

      if (!calendar[date]) {
        calendar[date] = {};
      }

      calendar[date][team] = {
        shift
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(calendar)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: `Erreur serveur : ${error.message}`
    };
  }
}
