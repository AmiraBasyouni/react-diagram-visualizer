import React from "react";
import ELK from "elkjs/lib/elk.bundled.js";
//import InitialElementsContext from "../InitialElementsProvider";
import { initialNodes, initialEdges } from "../../initialFlowElements.js";

export const LayoutContext = React.createContext();

//--------------------------------------------ELK logic
const elk = new ELK();

//CONSTRUCT elk graph
const graph = {
  id: "root",
  layoutOptions: {
    "elk.algorithm": "layered",
    "elk.direction": "DOWN",
    "elk.layered.spacing.nodeNodeBetweenLayers": "100",
    "elk.spacing.nodeNode": "80",
  },
  children: [],
  edges: [],
};

//POPULATE children: child -> { id:"", width:#, height:# }
initialNodes.forEach((node) => {
  graph.children.push({ id: node.id, width: 0, height: 0 });
});

//POPULATE edges: edge -> { id:"", sources:[source], targets:[target] }
initialEdges.forEach((edge) => {
  graph.edges.push({
    id: edge.id,
    sources: [edge.source],
    targets: [edge.target],
  });
});

//PRINT TO CONSOLE: the elk graph
elk.layout(graph).then(console.log).catch(console.error);

//CONSTRUCT nodeDimension data: (width and height)
const nodeDimension = new Set();
function setNodeDimension(component_id, w, h) {
  // each component node tries to find itself in graph.children
  const element = graph.children.filter((node) => {
    return node.id === component_id;
  })[0];
  // and update its dimensions
  element.width = w;
  element.height = h;
  nodeDimension.add(element);
}
//-----------------------------------------------------------

function LayoutProvider({ children }) {
  const [layoutIsReady, setLayoutIsReady] = React.useState(false);

  //const { initialNodes, initialEdges } = React.useContext(InitialElementsContext);

  function isLayoutReady() {
    return graph.children.length === nodeDimension.size;
  }

  //BUILD diagram layout with elk after node dimensions are collected
  function useLayout(setNodes) {
    React.useLayoutEffect(() => {
      if (!layoutIsReady) {
        return;
      }

      elk
        .layout(graph)
        .then((layout) => {
          const laidOutNodes = layout.children.map((node) => ({
            id: node.id,
            position: { x: node.x, y: node.y },
          }));

          setNodes((prevNodes) =>
            prevNodes.map((n) => {
              const laidOut = laidOutNodes.find((ln) => ln.id === n.id);
              return laidOut ? { ...n, position: laidOut.position } : n;
            }),
          );
        })
        .catch(console.error);
    }, [setNodes, layoutIsReady]);
  }

  const value = {
    isLayoutReady,
    setLayoutIsReady,
    setNodeDimension,
    useLayout,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}

export default LayoutProvider;
