import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { error: "Missing slug parameter" },
      { status: 400 }
    );
  }

  const token = process.env.TOKEN;
  const isLocal = process.env.LOCAL === "1";
  const domain = isLocal
    ? "https://localhost:8443"
    : "https://author-p12074-e30717.adobeaemcloud.com";

  const fullUrl = `${domain}${slug}.model.json`;

  return NextResponse.json({ futureUrl: fullUrl });
  try {
    const res = await fetch(fullUrl, {
      headers: {
        Authorization: isLocal
          ? "Basic " + Buffer.from("admin:admin").toString("base64")
          : `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `AEM fetch failed: ${res.status} ${res.statusText}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Fetch error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
