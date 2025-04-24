import { getAemData } from "@/lib/aem-service";
import Container from "./components/Container";

export default async function Home() {
  const data = await getAemData();

  return (
    <div>
      Next.js Static Content
      <Container data={data.container} />
    </div>
  );
}
