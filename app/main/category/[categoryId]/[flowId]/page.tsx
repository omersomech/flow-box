import FlowComponent from "@/components/reactFlow/flow-componenet";
import { Button } from "@/components/ui/button";
import React from "react";
import { ReactFlowProvider } from "reactflow";
import { toast } from "sonner";
import FlowProvider from "./componenets/flow-provider";
import { prisma } from "@/lib/db";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BookTemplate, Terminal } from "lucide-react";
import { startBlankFlow, updateUser } from "@/app/actions";

const initNodes = [
  {
    id: "1",
    type: "start",
    data: { name: "Start", job: "New blank flow", emoji: "😎" },
    position: { x: 0, y: 50 },
  },
];
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
  console.log(flow);

  return (
    <div className="h-full">
      {flow?.reactFlow ? (
        <FlowProvider>
          <FlowComponent flow={flow} />
        </FlowProvider>
      ) : (
        <div className="container flex flex-col justify-center items-center h-full w-96 gap-3">
          <form action={startBlankFlow.bind(null, initNodes, params.flowId)}>
            <Alert className="hover:bg-slate-200 cursor-pointer">
              <Button type="submit">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Create new blank flow</AlertTitle>
                <AlertDescription>
                  You can create a new flow by clicking the button below.
                </AlertDescription>
              </Button>
            </Alert>
          </form>
          <Alert className="hover:bg-slate-200 cursor-pointer">
            <BookTemplate className="h-4 w-4" />
            <AlertTitle>Create new from template</AlertTitle>
            <AlertDescription>
              You can create a new flow from a template by clicking the button
              below.
            </AlertDescription>
          </Alert>
        </div>
      )}
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
    </div>
  );
};

export default Page;
