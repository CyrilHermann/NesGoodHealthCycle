import { getStore } from "@netlify/blobs";

export async function handler() {
  try {
    const store = getStore("nesgood-calendar");

    const saved = await store.get("calendar", {
      type: "json"
    });

    if (saved?.calendar) {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=300"
        },
        body: JSON.stringify(saved.calendar)
      };
    }

    return {
      statusCode: 404,
      body: "Aucun calendrier sauvegardé dans Netlify. Réimporte le calendrier depuis admin.html."
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: `Erreur serveur : ${error.message}`
    };
  }
}
