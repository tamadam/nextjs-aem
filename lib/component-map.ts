import LinkComponent from "@/app/components/custom/Link/LinkComponent";
import RichtextComponent from "@/app/components/custom/Richtext";
import TitleComponent from "@/app/components/custom/Title";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentMap: any = {
  "demo-app/components/title": TitleComponent,
  "demo-app/components/text": RichtextComponent,
  "demo-app/components/link": LinkComponent,
};
