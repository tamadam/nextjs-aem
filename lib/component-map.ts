import FlexContainer from "@/app/components/custom/FlexContainer/FlexContainer";
import GridContainer from "@/app/components/custom/GridContainer/GridContainer";
import LinkComponent from "@/app/components/custom/Link/LinkComponent";
import RichtextComponent from "@/app/components/custom/Richtext/Richtext";
import TitleComponent from "@/app/components/custom/Title/Title";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentMap: any = {
  "demo-app/components/title": TitleComponent,
  "demo-app/components/richtext": RichtextComponent,
  "demo-app/components/link": LinkComponent,
  "demo-app/components/flexcontainer": FlexContainer,
  "demo-app/components/gridcontainer": GridContainer,
};
