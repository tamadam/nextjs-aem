"use client";

import { ClassPrefix } from "@carbon/react";
import { PropsWithChildren } from "react";

export default function NiWrapper({ children }: PropsWithChildren) {
  return <ClassPrefix prefix="nicrc">{children}</ClassPrefix>;
}
