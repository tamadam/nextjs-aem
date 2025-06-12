/* eslint-disable @typescript-eslint/no-explicit-any */

import FlexTemplate from "@/app/templates/FlexTemplate";
import StandardTemplate from "@/app/templates/StandardTemplate";

export const templateMap: Record<string, React.ComponentType<any>> = {
  "/apps/ni-commons/templates/nextjs-standard": StandardTemplate,
  "/apps/ni-commons/templates/nextjs-flex": FlexTemplate,
};

// Fallback/default template
export const defaultTemplate = StandardTemplate;
