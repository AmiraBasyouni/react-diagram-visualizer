import schema from "./schema.json";
import ComponentNode from "./components/ComponentNode";

//-----------------------------------------nodes/edges logic
const { filename, components } = schema;

const position = { x: 0, y: 0 };

const initialNodes = [];
//schema.forEach( file =>
components.forEach((component) => {
  const id = `${component.name}@${filename}:${component.location.line}`;
  initialNodes.push({
    id,
    data: { id, ...component },
    type: "component",
    position,
  });
});
//);

const initialEdges = [];
components.forEach((component) => {
  component.descendants.forEach((descendant) => {
    initialEdges.push({
      id: `${component.name}->${descendant.name}`,
      source: `${component.name}@${filename}:${component.location.line}`,
      target: `${descendant.name}@${descendant.sourceFile}:${descendant.location.line}`,
    });
  });
});

const nodeTypes = {
  component: ComponentNode,
  //  context: "ContextNode"
};

export { initialNodes, initialEdges, nodeTypes };
