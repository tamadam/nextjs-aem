/* eslint-disable @typescript-eslint/no-unused-vars */
export const dynamic = "force-dynamic";

import { getAemData, getContainerPath } from "@/lib/aem-service";
import Container from "../components/Container";
import { notFound } from "next/navigation";
import Selector from "../components/selectorstatic/Selector";

import { Metadata } from "next";
import { formatTitleFromSlug } from "@/lib/format-page-title";

export async function generateMetadata({
  params,
}: {
  params: { slug?: string[] };
}): Promise<Metadata> {
  const slugPath = params.slug?.join("/") || "home";
  const title = formatTitleFromSlug(slugPath);

  return {
    title,
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug?: string[] };
  searchParams: { [key: string]: string | undefined };
}) {
  // for future usage like ?editor=true
  // console.log(searchParams);
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
      <Selector />
      <Container
        data={result.data.container}
        baseContainerPath={containerPath}
      />
    </div>
  );
}
