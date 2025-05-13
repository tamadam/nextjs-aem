export const dynamic = "force-dynamic";

import { getAemData, getContainerPath } from "@/lib/aem-service";
import Container from "../components/Container";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slugPath = params.slug?.join("/") || "";
  const containerPath = getContainerPath(slugPath);

  const fullPath = `/content/${slugPath}`;
  const result = await getAemData(fullPath);
  if (result?.notFound) {
    notFound();
  }

  if (result?.error || !result?.data) {
    return <div>Something went wrong while fetching the page.</div>; // fallback UI
  }

  return (
    <div>
      Next.js Dynamic Page:
      <Container
        data={result.data.container}
        baseContainerPath={containerPath}
      />
    </div>
  );
}
