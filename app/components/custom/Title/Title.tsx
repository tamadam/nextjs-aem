import clsx from "clsx";
import styles from "./Title.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TitleComponent = ({ data, isLocked = false }: any) => {
  const path = data[":path"];

  const {
    title,
    type = "h2",
    weight = "normal",
    color = "charcoal",
    "text-transform": textTransform = "none",
    "vertical-spacing": verticalSpacing = "none",
  } = data;
  const classes = clsx({
    // Base class
    [styles.title]: true,

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
  });

  const TitleTag = type;
  const titleProps = {
    className: classes,
    dangerouslySetInnerHTML: title ? { __html: title } : undefined,
    "data-aue-resource": `urn:aemconnection:${path}`,
    "data-aue-label": "Title",
    "data-aue-model": "title",
    ...(!isLocked && { "data-aue-type": "component" }),
  };

  return <TitleTag {...titleProps} />;
};

export default TitleComponent;
