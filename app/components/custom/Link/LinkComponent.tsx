import styles from "./LinkComponent.module.css";
import clsx from "clsx";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LinkComponent = ({ data }: any) => {
  const path = data[":path"];
  const {
    type = "link",
    label = <span>Link</span>,
    href = "#",
    openInNewTab = false,
    "link-variant": linkVariant = "default",
    "link-color": linkColor = "green",
    "button-type": buttonType = "primary",
  } = data;

  const target = openInNewTab ? "_blank" : undefined;

  const classes = clsx({
    // Base class
    [styles.link]: type === "link",
    [styles.button]: type === "button",

    // Link variants
    [styles.linkDefault]: type === "link" && linkVariant === "default",
    [styles.linkQuiet]: type === "link" && linkVariant === "quiet",

    // Link colors
    [styles.linkGreen]: type === "link" && linkColor === "green",
    [styles.linkRed]: type === "link" && linkColor === "red",

    // Button types
    [styles.buttonPrimary]: type === "button" && buttonType === "primary",
    [styles.buttonSecondary]: type === "button" && buttonType === "secondary",
    [styles.buttonOutline]: type === "button" && buttonType === "outline",
  });

  return (
    <a
      dangerouslySetInnerHTML={{ __html: label }}
      data-aue-resource={`urn:aemconnection:${path}`}
      data-aue-type="component"
      data-aue-model="link"
      data-aue-label="Link"
      className={classes}
      href={href}
      target={target}
    />
  );
};

export default LinkComponent;
