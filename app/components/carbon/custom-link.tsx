"use client";

import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { usePrefix } from "@carbon/react";

interface NiLinkProps extends LinkProps {
  target?: React.HTMLAttributeAnchorTarget;
}

export default function NiLink(props: NiLinkProps & PropsWithChildren) {
  const prefix = usePrefix();

  return (
    <Link className={`${prefix}--link`} {...props}>
      {props.children}
    </Link>
  );
}
