/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import styles from "./GridContainer.module.scss";
import DynamicComponent from "../../DynamicComponent";
import { CSSProperties } from "react";

const GridContainer = ({ data }: any) => {
  const path = data[":path"];

  const {
    "ideal-column-size": idealColumnSize = "20rem",
    "max-column-count": maxColumnCount = 3,
    "item-gap": itemGap = "0rem",
    "vertical-spacing": verticalSpacing = "none",
  } = data;

  const columnStyle = {
    "--ideal-column-size": idealColumnSize,
    "--max-column-count": maxColumnCount,
    "--gap": itemGap,
  } as CSSProperties;

  const classes = clsx({
    // Base class
    [styles.gridContainer]: true,

    // Margin block
    [styles.verticalSpacingNone]: verticalSpacing === "none",
    [styles.verticalSpacingSmall]: verticalSpacing === "small",
    [styles.verticalSpacingMedium]: verticalSpacing === "medium",
    [styles.verticalSpacingLarge]: verticalSpacing === "large",
  });

  return (
    <div
      data-aue-type="container"
      data-aue-label="Grid Container"
      data-aue-resource={`urn:aemconnection:${path}`}
      data-aue-filter="container-filter"
      data-aue-model="gridcontainer"
      className={classes}
      style={columnStyle}
    >
      {data[":itemsOrder"] &&
        data[":itemsOrder"].map((itemKey: any) => {
          const child = data[":items"][itemKey];

          return (
            <DynamicComponent
              key={child[":path"]}
              data={child}
              itemKey={itemKey}
            />
          );
        })}
    </div>
  );
};

export default GridContainer;
