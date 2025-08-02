/* Goal: check that ComponentNode renders correctly
 * Assert:
 * It displays props, state, context, etc.
 * Styling/classes are correct for certain conditions.
 */

import { render, screen } from "@testing-library/react";

import React from "react";
import ComponentNode from "../../src/components/ComponentNode";
import LayoutProvider from "../../src/components/LayoutProvider";
import { ReactFlowProvider } from "@xyflow/react";

test("renders state and props correctly with layout context", () => {
  const mockData = {
    id: "Header::Header.jsx",
    name: "Header",
    descendants: [],
    internal: { states: [["count", "setCount"]], functions: [] },
    external: { props: ["title"], context: [], constants: [] },
    location: { line: 1, filepath: "Header.jsx" },
  };

  const mockSchema = {
    "Header::Header.jsx": {
      name: "Header",
      description: "",
      descendants: [],
      internal: {
        states: [["count", "setCount"]],
        functions: [],
      },
      external: {
        props: ["title"],
        context: [],
        constants: [],
      },
      location: {
        line: 1,
        filepath: "Header.jsx",
      },
    },
  };

  render(
    <LayoutProvider schema={mockSchema}>
      <ReactFlowProvider>
        <ComponentNode data={mockData} />
      </ReactFlowProvider>
    </LayoutProvider>,
  );

  expect(screen.getByText("+ title")).toBeInTheDocument();
  expect(screen.getByText("- [count,setCount]")).toBeInTheDocument();
});
