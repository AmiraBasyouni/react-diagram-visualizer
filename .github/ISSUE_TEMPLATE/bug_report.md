---
name: Bug report
about: Report an issue with diagram rendering or layout in react-diagram-visualizer
title: "[BUG] <short description>"
labels: bug
assignees: ''

---

## What happened?
Briefly describe the problem (e.g., missing nodes, layout issues, console warnings).

## Steps to reproduce
1. Place your `schema.json` file in the `src` directory.
2. Run `npm install` (first time only) and `npm run dev`.
3. Open the localhost URL in your browser.
4. Describe exactly what you saw.

## Expected behavior
What should the diagram have looked like or done instead?

## Console warnings or errors
Copy any warnings or errors from your browser console (especially messages about missing descendant nodes).

## Attachments
Please include any that apply:
- Your `schema.json` file (or a minimal version that reproduces the issue)
- Screenshot of the diagram
- Error logs from the console
- (Optional) Link to the repo/files that generated the schema

## Environment
- OS: [e.g., Linux Mint 21, Windows 11]
- react-diagram-visualizer version: [e.g., 0.1.0]
- How you ran it: [CLI with Parcel, other]

## Additional notes
- If layout breaks or the app lags, try stopping the dev server and restarting with `npm run dev` before reporting.
- If some nodes don’t render, check console warnings for details on what was skipped.
- Issues often relate to how dependencies were resolved when generating the schema (e.g., inline functions, non-file imports like `'react'` or icon packages).
