"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  EdgeTypes,
  NodeTypes,
  useOnSelectionChange,
} from "reactflow";
// import "reactflow/dist/style.css";
import "reactflow/dist/base.css";
import customNode from "./custom-nodes/custom-node";
import startNode from "./custom-nodes/start-node";
import CustomEdge from "./custom-nodes/custom-edge";
import { toast } from "sonner";
import { formatDateToLocal } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { updateUser } from "@/app/actions";
import { Flow } from "@prisma/client";

const nodeTypes: NodeTypes = {
  custom: customNode,
  start: startNode,
};

const edgeTypes: EdgeTypes = {
  custom: CustomEdge,
};

const initNodes = [
  {
    id: "1",
    type: "start",
    data: { name: "Start", job: "Workflow", emoji: "😎" },
    position: { x: 0, y: 50 },
  },
  {
    id: "2",
    type: "custom",
    data: { name: "Check user auth details", job: "Designer", emoji: "🤓" },

    position: { x: 0, y: 200 },
  },
  {
    id: "3",
    type: "custom",
    data: { name: "Kristi Price", job: "Developer", emoji: "🤩" },
    position: { x: 200, y: 400 },
  },
  {
    id: "4",
    type: "custom",
    data: { name: "Kristi Price", job: "Developer", emoji: "🤩" },
    position: { x: -200, y: 400 },
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    data: {
      label: "true",
      color: "#00ff40",
    },
    type: "custom",
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    data: {
      label: "false",
      color: "#DB6363",
    },
    type: "custom",
  },
];
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };
let id = 5;
const getId = () => `${id++}`;
const initialState = {
  message: "",
};

const FlowComponent = ({ flow }: { flow: Flow }) => {
  const [nodeId, setNodeId] = useState("");
  const [nodeName, setNodeName] = useState("");
  const [nodeDescription, setNodeDescription] = useState("");
  const [changed, setChanged] = useState(0);
  const [nodeHidden, setNodeHidden] = useState(false);
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(
    JSON.parse(flow.reactFlow)
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    JSON.parse(flow.reactEdges)
  );
  const [selectedNodes, setSelectedNodes] = useState<string[]>([]);
  const [selectedEdges, setSelectedEdges] = useState<string[]>([]);
  const { screenToFlowPosition } = useReactFlow();
  const updateUserWithId = updateUser.bind(null, nodes, edges, flow.id);

  const onConnect = useCallback((params: any) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);

  useOnSelectionChange({
    onChange: ({ nodes, edges }) => {
      console.log("selected nodes", nodes);
      setSelectedNodes(nodes.map((node) => node.id));
      setSelectedEdges(edges.map((edge) => edge.id));
      nodes.forEach((node) => {
        setNodeId(node.id);
        setNodeName(node.data.name);
        setNodeDescription(node.data.job);
        setNodeHidden(false);
      });
    },
  });

  const onConnectStart = useCallback((_: any, { nodeId }: { nodeId: any }) => {
    connectingNodeId.current = nodeId;
  }, []);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          // it's important that you create a new object here
          // in order to notify react flow about the change
          node.data = {
            ...node.data,
            name: nodeName,
          };
        }

        return node;
      })
    );
  }, [nodeName, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          // it's important that you create a new object here
          // in order to notify react flow about the change
          node.data = {
            ...node.data,
            job: nodeDescription,
          };
        }

        return node;
      })
    );
  }, [nodeDescription, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          // when you update a simple type you can just update the value
          node.hidden = nodeHidden;
        }

        return node;
      })
    );
    setEdges((eds) =>
      eds.map((edge) => {
        if (edge.id === "e1-2") {
          edge.hidden = nodeHidden;
        }

        return edge;
      })
    );
  }, [nodeHidden, setNodes, setEdges]);

  const onConnectEnd = useCallback(
    (event: any) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        toast(`New node created. id : ${id}`, {
          description: formatDateToLocal(new Date()),
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
        const newNode = {
          id,
          type: "custom",
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: {
            id: id,
            body: "יש להזין תוכן",
            footer: null,
            header: null,
            name: "שלב חדש נוסף",
          },
          origin: [0.5, 0.0],
        };

        setNodes((nds: any) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current!, target: id })
        );
      }
    },
    [screenToFlowPosition]
  );

  return (
    <div className="h-full relative" style={{ direction: "ltr" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(e) => {
          onNodesChange(e);
          setChanged(changed + 1);
        }}
        onEdgesChange={(e) => {
          onEdgesChange(e);
          setChanged(changed + 1);
        }}
        onConnect={(e) => {
          onConnect(e);
          setChanged(changed + 1);
        }}
        nodeTypes={nodeTypes}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        fitView
        edgeTypes={edgeTypes}
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
        defaultViewport={defaultViewport}
        minZoom={0.2}
        maxZoom={4}
        attributionPosition="bottom-left"
      >
        <div className="absolute left-[10px] top-[10px] z-[4] text-sm">
          <form action={updateUserWithId}>
            <Button disabled={changed < 2} variant="outline" type="submit">
              Save
            </Button>
          </form>
        </div>
        <div className="absolute right-[10px] top-[10px] z-[4] text-sm">
          <div className="flex flex-col gap-2">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Name</Label>
              <Input
                value={nodeName}
                onChange={(evt) => setNodeName(evt.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Name</Label>
              <Input
                value={nodeDescription}
                onChange={(evt) => setNodeDescription(evt.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                checked={nodeHidden}
                onCheckedChange={() => setNodeHidden(!nodeHidden)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Hide
              </label>
            </div>
          </div>
        </div>
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default FlowComponent;
