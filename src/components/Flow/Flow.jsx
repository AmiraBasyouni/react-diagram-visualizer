import React from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  //  Controls,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import schema from "../../schema.json";
import ComponentNode from "../ComponentNode";

const { filename, components } = schema;

const nodes = [];
//schema.forEach( file =>
components.forEach((component) => {
  nodes.push({
    id: `${component.name}@${filename}:${component.location.start}`,
    position: { x: 0, y: 0 },
    data: component,
    type: "component",
  });
});
//);

const edges = [];
components.forEach((component) => {
  component.descendants.forEach((descendant) => {
    edges.push({
      id: `${component.name}->${descendant.name}`,
      source: `${component.name}@${filename}:${component.location.start}`,
      target: `${descendant.name}@${descendant.sourceFile}:${descendant.line}`,
    });
  });
});

const nodeTypes = {
  component: ComponentNode,
  //  context: "ContextNode"
};

/*
function Flow() {
  return (
    <ReactFlowProvider>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow 
	nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Background />
        <Controls />
	<ReactFlow/>
      </div>
    </ReactFlowProvider>
  );
}
*/

function Flow() {
  return (
    <ReactFlowProvider>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
          <Background variant="lines" gap={12} size={1} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}

export default Flow;
