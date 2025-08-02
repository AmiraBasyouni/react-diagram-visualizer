import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // needed for DOM matchers
    globals: true, // so you can use "test" and "expect" without imports
    transformMode: {
      web: [/.[jt]sx$/], // transform JSX/TSX
    },
    setupFiles: "./vitest.setup.js",
  },
  esbuild: {
    loader: "jsx",
    jsx: "automatic", // for React 17+
  },
});
