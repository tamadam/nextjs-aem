"use client";

import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { usePrefix } from "@carbon/react";
import clsx from "clsx";

interface NiLinkProps extends LinkProps {
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
}

export default function NiLink({
  className,
  children,
  ...props
}: NiLinkProps & PropsWithChildren) {
  const prefix = usePrefix();
  const combinedClassNames = clsx(`${prefix}--link`, className);

  return (
    <Link className={combinedClassNames} {...props}>
      {children}
    </Link>
  );
}
