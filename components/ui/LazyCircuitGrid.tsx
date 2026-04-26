"use client";

import dynamic from "next/dynamic";

const CircuitGrid = dynamic(() => import("./CircuitGrid"), {
  ssr: false,
  loading: () => null,
});

export default CircuitGrid;
