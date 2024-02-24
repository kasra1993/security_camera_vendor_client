"use client";

import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";

export const ReactQueryHydrate = (props: HydrateProps): any => {
  return <RQHydrate {...props} />;
};
