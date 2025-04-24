/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import DynamicComponent from "./DynamicComponent";
import { BASE_CONTAINER_PATH } from "../constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Container = ({ data }: any) => {
  return (
    <div
      data-aue-type="container"
      data-aue-label="Container"
      data-aue-resource={`urn:aemconnection:${BASE_CONTAINER_PATH}`}
      data-aue-filter="container-filter"
      style={{ padding: "1rem", border: "1px solid red", marginBlock: "1rem" }}
    >
      {data[":itemsOrder"] &&
        data[":itemsOrder"].map((itemKey: any, index: number) => {
          // TODO: use ID or something instead of index
          const child = data[":items"][itemKey];

          return (
            <DynamicComponent key={index} data={child} itemKey={itemKey} />
          );
        })}
    </div>
  );
};

export default Container;
