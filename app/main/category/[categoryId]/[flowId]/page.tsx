import FlowComponent from "@/components/reactFlow/flow-componenet";
import React from "react";

const Page = ({
  params,
}: {
  params: {
    categoryId: string;
    flowId: string;
  };
}) => {
  return (
    <div className="">
      <div>klslkd</div>
      <FlowComponent />
    </div>
  );
};

export default Page;
