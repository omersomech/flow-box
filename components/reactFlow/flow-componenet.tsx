"use client";

import React, { useCallback, useRef } from "react";
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
} from "reactflow";
// import "reactflow/dist/style.css";
import "reactflow/dist/base.css";
import customNode from "./custom-nodes/custom-node";
import startNode from "./custom-nodes/start-node";
import CustomEdge from "./custom-nodes/custom-edge";
import { toast } from "sonner";
import { formatDateToLocal } from "@/lib/utils";

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

let id = 5;
const getId = () => `${id++}`;
const FlowComponent = () => {
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

  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();
  const onConnect = useCallback((params: any) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onConnectStart = useCallback((_: any, { nodeId }: { nodeId: any }) => {
    connectingNodeId.current = nodeId;
  }, []);

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
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        fitView
        edgeTypes={edgeTypes}
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default FlowComponent;
