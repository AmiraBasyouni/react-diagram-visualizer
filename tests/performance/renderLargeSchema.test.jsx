/* Goal: detect regressions in component render speed
 * ⚠️ Limitations:
 * Runs in JSDOM, which is not a real browser, so absolute numbers (e.g., 150ms) are not realistic for a real user.
 * This is a relative testing: great for spotting regressions (150ms → 500ms), not for exact “real-world” timings.
 */

/* WARNING: currently a 50+ component schema does not exist
 * and there are no available schemas with enough components to get enough insight from this test.
 * The test is complete and can run successfully with three components,
 * but it takes many more components to see if there is a dip in performance as the schema scales.
 */

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import App from "../../src/components/App";
import large_schema from "../fixtures/large-schema.json";

// Mock node dimensions
/*beforeAll(() => {
  Object.defineProperty(HTMLElement.prototype, "getBoundingClientRect", {
    value: () => ({
      width: 100,
      height: 50,
      top: 0,
      left: 0,
      bottom: 50,
      right: 100,
    }),
  });
});*/

describe.skip("Performance: Large schema", () => {
  it("renders 50+ nodes within reasonable time", () => {
    const start = performance.now();
    render(<App schema={large_schema} />);
    const end = performance.now();

    // Check node count
    //const renderedNodes = document.querySelectorAll(
    //  ".react-flow__node-componentNode",
    //).length;
    //expect(renderedNodes).toBe(initialNodes.length);

    // Basic performance budget (e.g., under 200ms)
    expect(end - start).toBeLessThan(200);
  });
});
