"use client";

import { Button } from "@carbon/react";
import styles from "./LinkComponent.module.css";
import clsx from "clsx";
import NiLink from "../../carbon/custom-link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LinkComponent = ({ data }: any) => {
  const path = data[":path"];

  const {
    type = "link",
    label = <span>Link</span>,
    href = "#",
    openInNewTab = false,
    "link-variant": linkVariant = "default",
    "button-type": buttonType = "default",
    fullWidth = false,
  } = data;

  const target = openInNewTab ? "_blank" : undefined;

  const classes = clsx({
    // Base class
    [styles.link]: type === "link",
    [styles.button]: type === "button",

    // Link variants
    [styles.linkDefault]: type === "link" && linkVariant === "default",
    [styles.linkQuiet]: type === "link" && linkVariant === "quiet",
  });

  if (type === "button") {
    const buttonClasses = clsx({
      [styles.strechButton]: fullWidth,
    });
    return (
      <Button
        kind={buttonType !== "default" ? buttonType : undefined}
        data-aue-resource={`urn:aemconnection:${path}`}
        data-aue-type="component"
        data-aue-model="link"
        data-aue-label="Link"
        className={buttonClasses}
      >
        <a href={href} target={target} className={styles.linkAsButton}>
          {label}
        </a>
      </Button>
    );
  }

  return (
    <NiLink
      data-aue-resource={`urn:aemconnection:${path}`}
      data-aue-type="component"
      data-aue-model="link"
      data-aue-label="Link"
      className={classes}
      href={href}
      target={target}
    >
      {label}
    </NiLink>
  );
};

export default LinkComponent;
