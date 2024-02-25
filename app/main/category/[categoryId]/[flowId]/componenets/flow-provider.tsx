"use client";

import React from "react";
import { ReactFlowProvider } from "reactflow";

const FlowProvider = ({ children }: { children: React.ReactNode }) => {
  return <ReactFlowProvider>{children}</ReactFlowProvider>;
};

export default FlowProvider;
