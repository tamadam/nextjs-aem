/* eslint-disable @typescript-eslint/no-explicit-any */

import DynamicComponent from "./DynamicComponent";

const Container = ({ data, baseContainerPath }: any) => {
  return (
    <div
      data-aue-type="container"
      data-aue-label="Container"
      data-aue-resource={`urn:aemconnection:${baseContainerPath}`}
      data-aue-filter="container-filter"
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
