/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { BASE_CONTAINER_PATH } from "../../constants";

// Component to render text content
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TitleComponent = ({ data, itemKey }: any) => {
  const TitleTag = data.type || "h2"; // not works yet
  /* const path = `${BASE_CONTAINER_PATH}/${itemKey}`; */
  const path = data[":path"];
  return (
    <TitleTag
      dangerouslySetInnerHTML={data.title ? { __html: data.title } : null}
      data-aue-resource={`urn:aemconnection:${path}`}
      data-aue-type="text"
      data-aue-prop="title"
      data-aue-label="Title label"
      data-aue-model="title-id"
      data-aue-behavior="component"
    />
  );
};

export default TitleComponent;
