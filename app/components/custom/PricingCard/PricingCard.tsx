/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import DynamicComponent from "../../DynamicComponent";
import styles from "./PricingCard.module.scss";

const PricingCard = ({ data }: any) => {
  const path = data[":path"];

  const classes = clsx({
    // Base class
    [styles.pricingCard]: true,
  });

  return (
    <div
      data-aue-type="container"
      data-aue-label="Pricing Card"
      data-aue-resource={`urn:aemconnection:${path}`}
      data-aue-filter="pricing-card-filter"
      data-aue-model="pricingcard"
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

export default PricingCard;
