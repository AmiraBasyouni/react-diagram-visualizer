#!/usr/bin/env node

/* cli.js is a developer-facing CLI command (visualize)
 * that takes a React project path,
 * generates a schema with react-diagram-schema,
 * and immediately launches react-diagram-visualizer to render that schema interactively.
 * */

import runCli from "react-diagram-schema/cli-core";
import { spawn } from "child_process";
import fs from "fs";
import process from "process";
import path from "path";
import { fileURLToPath } from "url";

// resolve paths relative to THIS package (not the caller's cwd)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// if cli.js lives in `src/`, repo root is one level up
const visualizerRoot = path.resolve(__dirname, "..");

// write into this package's ./src/schema.json
const targetSchemaPath = path.join(visualizerRoot, "src", "schema.json");

// Capture actual cwd before any monorepo magic
const actualCwd = process.env.INIT_CWD || process.cwd();

// args: stores the CLI user input
// schemaFilePath: will store the relative file path of the schema
const args = process.argv.slice(2);
let schemaFilePath = null;

// silence react-diagram-schema's console log messages
args.push("--quiet");

// runs CLI logic of react-diagram-schema and starts up the visualizer
(async () => {
  try {
    schemaFilePath = await runCli(args, actualCwd); // if runCli is sync, this just returns instantly
  } catch (err) {
    console.error(err?.message || err);
    process.exit(1);
  }

  // early exit when user decides not to save the schema file
  if (!schemaFilePath || schemaFilePath === "") {
    console.warn("No schema file produced; exiting.");
    process.exit(0);
  }
  // cli-core already wrote schema.json somewhere
  // move it into the visualizer's src folder:
  if (path.resolve(targetSchemaPath) != path.resolve(schemaFilePath)) {
    try {
      fs.renameSync(schemaFilePath, targetSchemaPath);
    } catch {
      throw new Error(
        "(cli): Error, visualizer renameSync operation was unsuccessful",
      );
    }
  }

  // launch visualizer via Parcel
  const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
  const child = spawn(npmCmd, ["run", "dev"], {
    cwd: visualizerRoot,
    stdio: "inherit",
  });

  //const child = spawn("parcel", parcelArgs, { stdio: "inherit" }); // or "npx", ["parcel", ...]
  child.on("exit", (code) => process.exit(code ?? 0));
})();
