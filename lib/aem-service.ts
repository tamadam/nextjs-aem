export async function getAemData() {
  try {
    const res = await fetch(
      "https://localhost:8443/content/test-ue-page.model.json",
      {
        headers: {
          Authorization:
            "Basic " + Buffer.from("admin:admin").toString("base64"),
          cache: "no-store", // optional: prevents caching during dev
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch AEM data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
}
