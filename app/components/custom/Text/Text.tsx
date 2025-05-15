/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import styles from "./Text.module.scss";

const Text = ({ data }: any) => {
  const path = data[":path"];

  const {
    text = "Text",
    "text-size": textSize = "md",
    weight = "normal",
    color = "charcoal",
    "text-transform": textTransform = "none",
    "vertical-spacing": verticalSpacing = "none",
  } = data;

  const classes = clsx({
    // Base class
    [styles.text]: true,

    // Font weights
    [styles.weightNormal]: weight === "normal",
    [styles.weightBold]: weight === "bold",

    // Font colors
    [styles.charcoal]: color === "charcoal",
    [styles.niDigitalGreen]: color === "niDigitalGreen",

    // Font transform
    [styles.lowercase]: textTransform === "lowercase",
    [styles.uppercase]: textTransform === "uppercase",

    // Margin block
    [styles.verticalSpacingNone]: verticalSpacing === "none",
    [styles.verticalSpacingSmall]: verticalSpacing === "small",
    [styles.verticalSpacingMedium]: verticalSpacing === "medium",
    [styles.verticalSpacingLarge]: verticalSpacing === "large",

    // Font sizes
    [styles.fontSizeXS]: textSize === "xs",
    [styles.fontSizeS]: textSize === "s",
    [styles.fontSizeBase]: textSize === "base",
    [styles.fontSizeL]: textSize === "l",
    [styles.fontSizeXL]: textSize === "xl",
    [styles.fontSize2XL]: textSize === "2xl",
  });

  return (
    <p
      data-aue-resource={`urn:aemconnection:${path}`}
      data-aue-type="component"
      data-aue-label="Text"
      data-aue-model="text"
      className={classes}
    >
      {text}
    </p>
  );
};

export default Text;
