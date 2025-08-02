//-----------------------------------------nodes/edges logic
export default function buildFlowElements(components) {
  // otherwise, build data
  const position = { x: 0, y: 0 };

  const initialNodes = [];
  Object.entries(components).forEach(([componentID, component]) => {
    initialNodes.push({
      id: componentID,
      data: { id: componentID, ...component },
      type: "component",
      position,
    });
  });

  const initialEdges = [];
  Object.entries(components).forEach(([componentID, component]) => {
    component.descendants.forEach((descendantID) => {
      /* if a descendant has an invalid file path, fail gracefully */
      const filePath = descendantID.split("::")[1];
      if (!filePath || filePath === "undefined" || filePath === "null") {
        console.warn(
          `react-diagram-visualizer: the file path of descendant "${descendantID}" whose parent is "${componentID}" is invalid. The descendant will be omitted from the diagram.`,
        );
      } else {
        /* otherwise, create an edge connecting the component with its descendant */
        initialEdges.push({
          id: `${componentID}->${descendantID}`,
          source: componentID,
          target: descendantID,
        });
      }
    });
  });

  return { initialNodes, initialEdges };
}
