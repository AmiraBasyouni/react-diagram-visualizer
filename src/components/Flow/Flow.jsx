import React from "react";

// ReactFlow tooling: components/css
import { ReactFlow, ReactFlowProvider, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// nodes, edges, and types
import {
  initialNodes,
  initialEdges,
  nodeTypes,
} from "../../initialFlowElements.js";

function Flow() {
  return (
    <ReactFlowProvider>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
        >
          <Background variant="lines" gap={12} size={1} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}

export default Flow;
