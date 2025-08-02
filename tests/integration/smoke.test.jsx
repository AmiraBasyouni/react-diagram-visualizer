/* Goal: check if the full pipline (schema parsing → flow elements → diagram render) runs successfully
 * Assert that:
 * no errors are thrown during rendering
 * the key UI pieces appear (e.g., at least one node shows up)
 */

import { render } from "@testing-library/react";
import { expect } from "vitest";
import React from "react";
import App from "../../src/components/App";
import sample_schema from "../fixtures/sample-schema.json";

test("smoke: renders diagram with a sample schema without crashing", () => {
  const { container } = render(<App schema={sample_schema} />);

  // Minimal assertion to ensure something rendered
  expect(container.querySelector(".react-flow")).toBeTruthy();
});
