import { getAemData } from "@/lib/aem-service";
//import Container from "./components/Container";

export default async function Home() {
  const data = await getAemData();
  console.log(data);
  return (
    <div>
      Next.js Static Content
      {data ? "There is data" : "No data"}
      {/*  <Container data={data.container} /> */}
      <div
        data-aue-type="container"
        data-aue-label="Container"
        data-aue-resource={`urn:aemconnection:/content/test-ue-page/jcr:content/container`}
        style={{
          padding: "1rem",
          border: "1px solid red",
          marginBlock: "1rem",
        }}
      >
        <div
          data-aue-resource="urn:aemconnection:/content/test-ue-page/jcr:content/container/text_comp"
          data-aue-prop="text"
          data-aue-type="richtext"
          data-aue-label="Text component"
          data-aue-behavior="component"
        >
          Editable box
        </div>
      </div>
    </div>
  );
}
