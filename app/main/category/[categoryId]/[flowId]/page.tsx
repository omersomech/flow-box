"use client";

import FlowComponent from "@/components/reactFlow/flow-componenet";
import { Button } from "@/components/ui/button";
import React from "react";
import { ReactFlowProvider } from "reactflow";
import { toast } from "sonner";

const Page = ({
  params,
}: {
  params: {
    categoryId: string;
    flowId: string;
  };
}) => {
  return (
    <div className="h-full">
      {/* <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button> */}
      <ReactFlowProvider>
        <FlowComponent />
      </ReactFlowProvider>
    </div>
  );
};

export default Page;
