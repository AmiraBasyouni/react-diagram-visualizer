import React from "react";

// ReactFlow tooling: components/css
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import ComponentNode from "../ComponentNode";

// node types
const nodeTypes = {
  component: ComponentNode,
  //  context: "ContextNode"
};

import { LayoutContext } from "../LayoutProvider";

function Flow({ initialNodes, initialEdges }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const { useLayout } = React.useContext(LayoutContext);
  useLayout(setNodes);

  return (
    <ReactFlowProvider>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={initialEdges}
          nodeTypes={nodeTypes}
        >
          <Background variant="lines" />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}

export default Flow;
