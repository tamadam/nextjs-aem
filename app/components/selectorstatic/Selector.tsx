"use client";

import { Button } from "@carbon/react";
import styles from "./Selector.module.scss";
import clsx from "clsx";

const items = [
  "Overview",
  "Editions & Pricing",
  "Buy LabVIEW",
  "Add-ons",
  "Services",
  "Resources",
];

const Selector = () => {
  return (
    <div className={styles.selectorWrapper}>
      <div className={styles.selectorTitle}>LabVIEW</div>
      <div>
        <ul className={styles.selectorItems}>
          {items.map((item) => (
            <li
              key={item}
              className={clsx({
                [styles.item]: true,
                [styles.active]: item === "Add-ons",
              })}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.selectorButton}>
        <Button kind="tertiary">Start free trial</Button>
      </div>
    </div>
  );
};

export default Selector;
