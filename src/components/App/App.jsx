import React from "react";
import LayoutProvider from "../LayoutProvider";
import Flow from "../Flow";

// nodes and edges
import buildFlowElements from "../../initialFlowElements.js";
import defaultSchema from "../../schema.json";

function App({ schema = defaultSchema }) {
  const { initialNodes, initialEdges } = buildFlowElements(schema);
  return (
    <LayoutProvider schema={schema}>
      <Flow initialNodes={initialNodes} initialEdges={initialEdges} />
    </LayoutProvider>
  );
}

export default App;
