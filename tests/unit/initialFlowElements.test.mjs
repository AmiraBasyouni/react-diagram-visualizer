/* Goal: check that buildFlowElements works correctly
 * Assert:
 * Correct number of nodes
 * Correct number of edges
 * Correct labels
 * Correct connections in edges
 */

import buildFlowElements from "../../src/initialFlowElements.js";


test("schema is transformed to correct nodes/edges", () => {
  /* minimal mock schema */
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
  const { initialNodes, initialEdges } = buildFlowElements(mockSchema);

  expect(initialNodes).toHaveLength(1);
  expect(initialEdges).toHaveLength(0);
  //  expect(edges).toContainEqual(
  //    expect.objectContaining({ source: "A", target: "B" }),
  //  );
});
