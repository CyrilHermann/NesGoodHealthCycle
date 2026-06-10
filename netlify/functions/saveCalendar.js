export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Méthode non autorisée"
    };
  }

  try {
    const { calendar } = JSON.parse(event.body);

    if (!calendar) {
      return {
        statusCode: 400,
        body: "Calendrier manquant"
      };
    }

    const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const TABLE_NAME = "Calendar1";

    console.log("BASE ID =", AIRTABLE_BASE_ID);
    console.log("TABLE =", TABLE_NAME);
    console.log("TOKEN PRESENT =", !!AIRTABLE_TOKEN);

    const records = [];

    Object.entries(calendar).forEach(([date, teams]) => {
      Object.entries(teams).forEach(([team, data]) => {
        records.push({
          fields: {
            Date: date,
            Team: team,
            shift: data.shift
          }
        });
      });
    });

    console.log("Records à envoyer :", records.length);

    for (let i = 0; i < records.length; i += 10) {
      const batch = records.slice(i, i + 10);

      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(TABLE_NAME)}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            records: batch
          })
        }
      );

      if (!response.ok) {
        const errorText = await response.text();

        console.error("Erreur Airtable :", errorText);

        return {
          statusCode: 500,
          body: `Erreur Airtable : ${errorText}`
        };
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Calendrier sauvegardé dans Airtable",
        totalRecords: records.length
      })
    };

  } catch (error) {
    console.error("Erreur serveur :", error);

    return {
      statusCode: 500,
      body: `Erreur serveur : ${error.message}`
    };
  }
}
