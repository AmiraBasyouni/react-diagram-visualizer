/* Goal: ensure that ComponentNode is hooked up properly,
 * and that nodeTypes will map to it correctly.
 */

import { render } from "@testing-library/react";
import React from "react";
import { ReactFlow } from "@xyflow/react";
import ComponentNode from "../../src/components/ComponentNode";
import LayoutProvider from "../../src/components/LayoutProvider";

test("renders custom ComponentNode", () => {
  const nodes = [
    {
      id: "Header::Header.jsx",
      type: "component",
      data: {
        id: "Header::Header.jsx",
        name: "Header",
        description: "",
        descendants: [],
        internal: {
          states: [],
          functions: [],
        },
        external: {
          props: [],
          context: [],
          constants: [],
        },
        location: {
          line: 1,
          filepath: "Header.jsx",
        },
      },
      position: { x: 0, y: 0 },
    },
  ];
  const edges = [];

  const mockSchema = {
    "Header::Header.jsx": {
      name: "Header",
      description: "",
      descendants: [],
      internal: {
        states: [],
        functions: [],
      },
      external: {
        props: [],
        context: [],
        constants: [],
      },
      location: {
        line: 1,
        filepath: "Header.jsx",
      },
    },
  };

  const { container } = render(
    <LayoutProvider schema={mockSchema}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ component: ComponentNode }}
      />
      ,
    </LayoutProvider>,
  );

  /* React Flow automatically adds the class .react-flow__node-<type> to each node wrapper.
   * <type> comes from the type property in your nodes array.
   * */
  expect(container.querySelectorAll(".react-flow__node-component").length).toBe(
    1,
  );
});
