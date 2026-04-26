"use client";

import dynamic from "next/dynamic";

const DotGrid = dynamic(() => import("./DotGrid"), {
  ssr: false,
  loading: () => null,
});

export default DotGrid;
