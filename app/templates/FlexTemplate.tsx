/* eslint-disable @typescript-eslint/no-explicit-any */

import Container from "../components/Container";
import FlexContainer from "../components/custom/FlexContainer/FlexContainer";
import TitleComponent from "../components/custom/Title/Title";

const FlexTemplate = ({ data, baseContainerPath }: any) => {
  const items = data[":items"] || {};
  const titleNode = items.title;
  const flexContainer = items.flexcontainer;
  if (!flexContainer) {
    <Container data={data} baseContainerPath={baseContainerPath} />;
  }

  return (
    <>
      <TitleComponent data={titleNode} isPartOfTemplate />
      <FlexContainer data={flexContainer} />
    </>
  );
};

export default FlexTemplate;
