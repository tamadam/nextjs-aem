//import FlexContainer from "@/app/components/custom/FlexContainer/FlexContainer";
import GridContainer from "@/app/components/custom/GridContainer/GridContainer";
import LinkComponent from "@/app/components/custom/Link/LinkComponent";
import PricingCard from "@/app/components/custom/PricingCard/PricingCard";
import RichtextComponent from "@/app/components/custom/Richtext/Richtext";
import Text from "@/app/components/custom/Text/Text";
import TitleComponent from "@/app/components/custom/Title/Title";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentMap: any = {
  "demo-app/components/title": TitleComponent,
  "demo-app/components/richtext": RichtextComponent,
  "demo-app/components/link": LinkComponent,
  "demo-app/components/flexcontainer": React.lazy(() => import('@/app/components/custom/FlexContainer/FlexContainer')),
  "demo-app/components/gridcontainer": GridContainer,
  "demo-app/components/pricingcard": PricingCard,
  "demo-app/components/text": Text,
};
