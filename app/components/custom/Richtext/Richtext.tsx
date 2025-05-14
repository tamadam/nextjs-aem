import clsx from "clsx";
import styles from "./Richtext.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RichtextComponent = ({ data }: any) => {
  const path = data[":path"];
  const { text, color = "charcoal" } = data;

  const classes = clsx({
    // Base class
    [styles.richtext]: true,

    // Font colors
    [styles.charcoal]: color === "charcoal",
    [styles.lightGrey]: color === "lightgrey",
    [styles.niDigitalGreen]: color === "niDigitalGreen",
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
