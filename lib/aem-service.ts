export async function getAemData() {
  const token = process.env.TOKEN;

  try {
    const res = await fetch(
      process.env.LOCAL === "1"
        ? "https://localhost:8443/content/test-ue-page.model.json"
        : "https://author-p12074-e30717.adobeaemcloud.com/content/test-ue-page.model.json",
      {
        headers: {
          Authorization:
            process.env.LOCAL === "1"
              ? "Basic " + Buffer.from("admin:admin").toString("base64")
              : `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    console.log("after fetch");

    if (!res.ok) {
      throw new Error(
        `Failed to fetch AEM data ${res.status} ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
}
