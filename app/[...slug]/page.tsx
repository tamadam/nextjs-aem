export const dynamic = "force-dynamic";

import { getAemData, getContainerPath } from "@/lib/aem-service";
import Container from "../components/Container";

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slugPath = params.slug?.join("/") || "";
  const containerPath = getContainerPath(slugPath);

  const fullPath = `/content/${slugPath}`;
  const data = await getAemData(fullPath);

  return (
    <div>
      Next.js Dynamic Page:
      {data ? " Fetch from AEM was successful" : " Fetch from AEM failed"}
      <Container data={data.container} baseContainerPath={containerPath} />
    </div>
  );
}
