import clsx from "clsx";
import styles from "./Title.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TitleComponent = ({ data }: any) => {
  console.log(data);
  const path = data[":path"];
  const {
    title,
    type = "h2",
    weight = "normal",
    color = "charcoal",
    "text-transform": textTransform = "none",
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
  });

  const TitleTag = type;
  return (
    <TitleTag
      className={classes}
      dangerouslySetInnerHTML={title ? { __html: title } : null}
      data-aue-resource={`urn:aemconnection:${path}`}
      data-aue-type="component"
      data-aue-label="Title"
      data-aue-model="title"
    />
  );
};

export default TitleComponent;
