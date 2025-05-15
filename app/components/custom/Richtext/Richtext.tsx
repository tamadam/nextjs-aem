import clsx from "clsx";
import styles from "./Richtext.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RichtextComponent = ({ data }: any) => {
  const path = data[":path"];
  const {
    text,
    color = "charcoal",
    "vertical-spacing": verticalSpacing = "none",
  } = data;

  const classes = clsx({
    // Base class
    [styles.richtext]: true,

    // Font colors
    [styles.charcoal]: color === "charcoal",
    [styles.lightGrey]: color === "lightgrey",
    [styles.niDigitalGreen]: color === "niDigitalGreen",

    // Margin block
    [styles.verticalSpacingNone]: verticalSpacing === "none",
    [styles.verticalSpacingVerySmall]: verticalSpacing === "verysmall",
    [styles.verticalSpacingSmall]: verticalSpacing === "small",
    [styles.verticalSpacingMedium]: verticalSpacing === "medium",
    [styles.verticalSpacingLarge]: verticalSpacing === "large",
  });
  return (
    <div
      className={classes}
      dangerouslySetInnerHTML={text ? { __html: text } : undefined}
      data-aue-resource={`urn:aemconnection:${path}`}
      data-aue-type="richtext"
      data-aue-prop="text"
      data-aue-model="richtext"
      data-aue-label="Rich Text"
    />
  );
};

export default RichtextComponent;
