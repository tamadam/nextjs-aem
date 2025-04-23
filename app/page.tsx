import styles from "./page.module.css";

async function getAemData() {
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
export default async function Home() {
  const data = await getAemData();

  return (
    <div>
      Next.js Static Content
      <div
        className={styles.container}
        data-aue-type="container"
        data-aue-resource="urn:aemconnection:/content/test-ue-page/jcr:content/container"
        data-aue-behavior="component"
      >
        <div
          className={styles.editableText}
          data-aue-resource="urn:aemconnection:/content/test-ue-page/jcr:content/container/editable_text_node"
          data-aue-prop="text"
          data-aue-type="richtext"
          data-aue-label="Editable Text"
          data-aue-behavior="component"
          data-aue-filter="text"
          dangerouslySetInnerHTML={{
            __html: data?.container?.editable_text_node?.text || "",
          }}
        ></div>
      </div>
    </div>
  );
}
