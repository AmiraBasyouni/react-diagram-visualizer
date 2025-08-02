import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

// Add jest-dom matchers
expect.extend(matchers);

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.ResizeObserver = ResizeObserver;
