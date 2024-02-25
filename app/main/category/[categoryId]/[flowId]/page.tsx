import FlowComponent from "@/components/reactFlow/flow-componenet";
import { Button } from "@/components/ui/button";
import React from "react";
import { ReactFlowProvider } from "reactflow";
import { toast } from "sonner";
import FlowProvider from "./componenets/flow-provider";
import { prisma } from "@/lib/db";

const Page = async ({
  params,
}: {
  params: {
    categoryId: string;
    flowId: string;
  };
}) => {
  const flow = await prisma.flow.findUnique({
    include: {
      user: true,
    },
    where: {
      id: params.flowId,
    },
  });
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
      <FlowProvider>
        <FlowComponent
          nodesFromServer={JSON.parse(flow?.reactFlow)}
          edgesFromServer={JSON.parse(flow?.reactEdges)}
        />
      </FlowProvider>
    </div>
  );
};

export default Page;
