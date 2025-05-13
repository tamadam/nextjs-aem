export async function getAemData(slugPath: string) {
  const token = process.env.TOKEN;
  const baseUrl =
    process.env.LOCAL === "1"
      ? "https://localhost:8443"
      : "https://author-p12074-e30717.adobeaemcloud.com";

  const url = `${baseUrl}${slugPath}.model.json`;

  console.log("FETCHURL: ", url);

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

export function getContainerPath(slugPath: string) {
  return `/content/${slugPath}/jcr:content/container`;
}

export async function getAemDataOld() {
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

    if (res.status === 404) {
      return { notFound: true };
    }

    if (!res.ok) {
      throw new Error(
        `Failed to fetch AEM data ${res.status} ${res.statusText}`
      );
    }

    const json = await res.json();
    return { data: json };
  } catch (error) {
    console.error("Error fetching AEM data:", error);
    return { error: true };
  }
}
