export async function getEditableText() {
  const res = await fetch(
    "https://localhost:8443/content/test-ue-page.model.json",
    {
      headers: {
        // Use auth if needed:
        Authorization: "Basic " + Buffer.from("admin:admin").toString("base64"),
      },
    }
  );

  const data = await res.json();

  return {
    props: { data },
  };
}
