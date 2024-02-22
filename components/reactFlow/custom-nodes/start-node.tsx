import { cn } from "@/lib/utils";
import { Waypoints } from "lucide-react";
import React, { memo } from "react";
import { Handle, Position } from "reactflow";

function StartNode({ data, selected }: { data: any; selected: boolean }) {
  return (
    <div
      className={cn(
        "px-4 py-2 shadow-md rounded-md bg-white border-2 border-green-600",
        {
          "border-red-600": selected,
        }
      )}
    >
      <div className="flex  items-center">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-green-500">
          <Waypoints className="text-white" />
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.name}</div>
          <div className="text-gray-500">{data.job}</div>
        </div>
      </div>
      {/* <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      /> */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />
    </div>
  );
}

export default memo(StartNode);
