//import tokenData from "../tokens/token.json";

export async function getAemData() {
  const token = process.env.TOKEN;
  console.log(token);
  const accessToken = token;

  try {
    const res = await fetch(
      "https://author-p12074-e30717.adobeaemcloud.com/content/test-ue-page.-1.json",
      //"https://localhost:8443/content/test-ue-page.model.json",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          cache: "no-store",
        },
      }
    );

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
