//-----------------------------------------nodes/edges logic
export default function buildFlowElements(components) {
  // otherwise, build data
  const position = { x: 0, y: 0 };
  const count = {};
  // count will store the number of times each component is paired with a parent.

  const initialNodes = [];
  Object.entries(components).forEach(([componentID, component]) => {
    initialNodes.push({
      id: componentID,
      data: { id: componentID, ...component },
      type: "component",
      position,
    });
    count[componentID] = 0;
    // initially, each component is rendered once and not assigned a parent (i.e. no edges exist yet).
  });

  const initialEdges = [];
  Object.entries(components).forEach(([componentID, component]) => {
    component.descendants?.forEach((descendantID) => {
      /* if a descendant has an invalid file path, fail gracefully */
      const filePath = descendantID.split("::")[1];
      if (!filePath || filePath === "undefined" || filePath === "null") {
        console.warn(
          `react-diagram-visualizer: the file path of descendant "${descendantID}" whose parent is "${componentID}" is invalid. The descendant will be omitted from the diagram.`,
        );
      } else {
        // otherwise,

        const hasParent = count[descendantID] > 0;
        // when we'd like to form an edge between two nodes (i.e. a component and its descendant),
        // form a pair with the parentless descendant.
        // if the descendant has a parent, duplicate the descendant and give the duplicate a new ID
        // (the duplicate will be our parentless descendant).

        // create a descendant ID
        const descendantID_Num = hasParent
          ? descendantID + `_${count[descendantID]}`
          : descendantID;

        if (hasParent) {
          // duplicate the descendant (to get a parentless node)
          initialNodes.push({
            id: descendantID_Num,
            data: { id: descendantID_Num, ...components[descendantID] },
            type: "component",
            position,
          });
        }

        // create an edge connecting this component with its descendant
        initialEdges.push({
          id: `${componentID}->${descendantID_Num}`,
          source: componentID,
          target: descendantID_Num,
        });

        count[descendantID] = count[descendantID] + 1;
      }
    });
  });

  return { initialNodes, initialEdges };
}
