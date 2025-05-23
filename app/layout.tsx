import type { Metadata } from "next";
import Script from "next/script";
import "./globals.scss";
import NiWrapper from "./components/carbon/ni-wrapper";

export const metadata: Metadata = {
  title: "Next.js - AEM - Universal Editor",
  description: "App for testing Next.js with AEM and the Universal Editor",

  other:
    process.env.LOCAL === "1"
      ? {
          ["urn:adobe:aue:system:aemconnection"]: "aem:https://localhost:8443",
          ["urn:adobe:aue:config:service"]: "https://localhost:8000",
        }
      : {
          /*  ["urn:adobe:aue:config:service"]:
            "https://author-p12074-e30717.adobeaemcloud.com", */
          ["urn:adobe:aue:system:aemconnection"]:
            "aem:https://author-p12074-e30717.adobeaemcloud.com",
        },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/vnd.adobe.aue.component+json"
          src="/aem/component-definition.json"
          async
        ></script>
        <script
          type="application/vnd.adobe.aue.model+json"
          src="/aem/component-models.json"
          async
        ></script>
        <script
          type="application/vnd.adobe.aue.filter+json"
          src="/aem/component-filters.json"
          async
        ></script>

        <Script
          src={
            process.env.LOCAL === "1"
              ? "https://localhost:8000/corslib/LATEST"
              : "https://universal-editor-service.adobe.io/cors.js"
          }
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <NiWrapper>
          <main>{children}</main>
        </NiWrapper>
      </body>
    </html>
  );
}
