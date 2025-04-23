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
      <div></div>
      <div
        className="editable-text"
        data-aue-resource="urn:aemconnection:/content/test-ue-page/jcr:content/editable_text_node"
        data-aue-prop="text"
        data-aue-type="richtext"
        data-aue-label="Editable Body Text"
        data-aue-filter="text"
        dangerouslySetInnerHTML={{
          __html: data?.editableTextNode?.text || "",
        }}
      ></div>
    </div>
  );
}
