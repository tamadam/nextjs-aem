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
      <div>
        <p
          style={{
            marginBlock: "1rem",
            padding: "1rem",
            border: "1px dotted blue",
          }}
        >
          This is static content inside FlexTemplate served by Next.js to test
          the immutable page structure. It cannot be edited using the Universal
          Editor
        </p>
      </div>
      <TitleComponent data={titleNode} isLocked />
      <FlexContainer data={flexContainer} />
    </>
  );
};

export default FlexTemplate;
