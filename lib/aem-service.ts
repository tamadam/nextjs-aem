export async function getAemData(slugPath: string) {
  const token = process.env.TOKEN;
  const baseUrl =
    process.env.LOCAL === "1"
      ? "https://localhost:8443"
      : "https://author-p12074-e30717.adobeaemcloud.com";

  const url = `${baseUrl}${slugPath}.model.json`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization:
          process.env.LOCAL === "1"
            ? "Basic " + Buffer.from("admin:admin").toString("base64")
            : `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch AEM data ${res.status} ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching AEM data:", error);
    return null;
  }
}
