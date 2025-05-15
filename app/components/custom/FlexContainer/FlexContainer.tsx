/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import DynamicComponent from "../../DynamicComponent";
import styles from "./FlexContainer.module.scss";

const FlexContainer = ({ data }: any) => {
  const path = data[":path"];
  console.log(data);
  const {
    "flex-direction": flexDirection = "row",
    "flex-wrap": flexWrap = "nowrap",
    "flex-align": flexAlign = "stretch",
    "flex-justify": flexJustify = "flexStart",
  } = data;
  const classes = clsx({
    // Base class
    [styles.flexContainer]: true,

    // Flex direction
    [styles.flexDirectionRow]: flexDirection === "row",
    [styles.flexDirectionRowReverse]: flexDirection === "rowReverse",
    [styles.flexDirectionColumn]: flexDirection === "column",
    [styles.flexDirectionColumnReverse]: flexDirection === "columnReverse",

    // Flex wrap
    [styles.flexWrapNoWrap]: flexWrap === "nowrap",
    [styles.flexWrapWrap]: flexWrap === "wrap",
    [styles.flexWrapWrapReverse]: flexWrap === "wrapReverse",

    // Align items
    [styles.alignItemsStretch]: flexAlign === "stretch",
    [styles.alignItemsFlexStart]: flexAlign === "flexStart",
    [styles.alignItemsCenter]: flexAlign === "center",
    [styles.alignItemsFlexEnd]: flexAlign === "flexEnd",
    [styles.alignItemsSpaceAround]: flexAlign === "spaceAround",
    [styles.alignItemsBaseline]: flexAlign === "baseline",

    // Justify content
    [styles.justifyContentFlexStart]: flexJustify === "flexStart",
    [styles.justifyContentCenter]: flexJustify === "center",
    [styles.justifyContentFlexEnd]: flexJustify === "flexEnd",
    [styles.justifyContentSpaceBetween]: flexJustify === "spaceBetween",
    [styles.justifyContentSpaceAround]: flexJustify === "spaceAround",
    [styles.justifyContentSpaceEvenly]: flexJustify === "spaceEvenly",
  });

  return (
    <div
      data-aue-type="container"
      data-aue-label="Flex Container"
      data-aue-resource={`urn:aemconnection:${path}`}
      data-aue-filter="container-filter"
      data-aue-model="flexcontainer"
      className={classes}
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

export default FlexContainer;
