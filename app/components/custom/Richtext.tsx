/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { BASE_CONTAINER_PATH } from "../../constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RichtextComponent = ({ data, itemKey }: any) => {
  /* const path = `${BASE_CONTAINER_PATH}/${itemKey}`; */
  const path = data[":path"];
  return (
    <div
      dangerouslySetInnerHTML={data.text ? { __html: data.text } : undefined}
      data-aue-resource={`urn:aemconnection:${path}`}
      data-aue-type="richtext"
      data-aue-prop="text"
      data-aue-model="richtext"
      data-aue-label="Rich Text"
      data-aue-behavior="component"
    />
  );
};

export default RichtextComponent;
