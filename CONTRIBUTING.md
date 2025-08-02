# Contributing to react-diagram-visualizer

Thank you for your interest in contributing! 🎉  
`react-diagram-visualizer` is a standalone CLI tool that generates a JSON schema from React source code, designed to integrate with [`react-diagram-schema`](https://github.com/AmiraBasyouni/react-diagram-schema) for visualizing [ReactFlow](https://reactflow.dev/)-based UML-style diagrams. We aim to make React component architecture more visual, structured, and developer-friendly, and your help can make a big difference.

## How To Get Started

1. Fork this repository

- visit [`react-diagram-visualizer`](https://github.com/AmiraBasyouni/react-diagram-visualizer) and click on the button labeled "Fork"
- alternatively, if you have gh, you can fork the repository using the command:
  ```bash
  gh repo fork AmiraBasyouni/react-diagram-visualizer
  ```

2. Clone your fork

   ```bash
   git clone https://github.com/<your-username>/react-diagram-visualizer.git
   ```

3. Install dependencies
   ```bash
   npm install
   ```

## How You Can Contribute

We welcome:

- **Bug fixes** - spotted something weird? Open an issue or submit a fix.
- **Performance improvements** - optimize rendering for large React projects.
- **UI/UX feedback** — Help make the tool more intuitive, especially for first-time users.
- **Custom styling** — Propose theming support or style improvements to help adapt the visualizer to different teams. Create new themes (e.g., dark, high-contrast) by adding `ThemeCustom.module.css` files with styles for nodes (e.g., background, border) and updating theme imports
- **Interactive features** — Suggest hover, zoom, node collapsing, or other interaction features.
- **Docs and examples** — Share diagrams from your projects to help others see the value.

Please avoid:

- Large refactors without discussion.
- Adding unrelated dependencies.

## Proposing Changes

Before starting major work:

- **Open an issue** describing your proposal.
- If relevant, share an example schema and how your change would improve the output.

Small fixes (typos, minor code tweaks) can skip this step.

## Coding Standards

To keep contributions consistent and maintainable, please follow these standards:

- **Formatting**: We use Prettier and ESLint. Run `npm run lint` and `npm run format` before submitting.
- **React**: Use functional components only. Keep components small and focused.
- **Styles**: Use CSS Modules (e.g. `Component.module.css`). Theme files should follow the naming convention `Theme*.module.css`.
- **Themes**: Add new themes by creating a CSS module in `/src/themes` (theme-switching features soon).
- **Hooks**: Use React hooks properly (no hooks inside conditionals or loops).
- **DOM**: Use ReactFlow’s tools (e.g., for placing nodes on the diagram) instead of using JavaScript code that changes the webpage directly.

## Pull Requests

1. **Branch** from main:

   ```bash
   git checkout -b fix-bug-header
   ```

2. Test your changes:

- Ensure **all tests pass** before submitting (run `npm test`).
- Add new tests when introducing features or fixing bugs.

3. **Write clear commit messages using [Conventional Commits](https://www.conventionalcommits.org/) style:**  
   Use a prefix like `fix`, `feat`, or `docs`, followed by the scope (e.g., app, readme) and a brief description.

   Examples:

- `fix(layout): prevent node overlap in large diagrams`

- `feat(app): add support for custom node styles`

- `docs(readme): clarify theme customization steps`

4. **Push** your branch and open a pull request on GitHub.

5. Include **screenshots or GIFs** in your pull request if your changes affect the diagram’s appearance, layout, or interactions (e.g., new node styles or zoom behavior).

## Testing your Changes

`react-diagram-visualizer` now includes an automated test suite powered by [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/).

**Running the tests**

- To run all tests locally:

  ```bash
  npm test
  ```

- To run a specific test file:

  ```bash
  npx vitest run path/to/file.test.jsx
  ```

- For an interactive watch mode:
  ```bash
  npx vitest
  ```

---

**Test types included**:

- Unit tests:  
  Validate small, isolated pieces of logic (e.g., buildFlowElements).

- Integration tests:  
  Ensure multiple components work together (e.g., schema → LayoutProvider → Flow → ComponentNode).

- Performance tests:  
  Measure rendering time for large schemas.

- Smoke tests:  
  Confirm the app boots with a real schema without crashing.

---

**Adding new tests**

- Place new test files under the `tests/` directory, following the `.test.js`/`.test.jsx` naming convention.

- If adding unit tests for functions, mock only what’s necessary to isolate the logic.

- For UI tests, prefer [React Testing Library](https://testing-library.com/) queries (e.g., `getByText`) over DOM selectors.

- Keep performance tests in a separate `tests/performance/` subdirectory to avoid slowing down the full suite.

---

**Manual testing**

Automated tests catch most issues, but you can still manually verify changes:

1. Generate or modify a `schema.json` in `src/` (or use one from `tests/fixtures/`).

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open the app in the browser, interact with the diagram, and watch the console for warnings or errors.

## New To Open Source?

If you're new to contributing, here are some easy and impactful ways to get started:

- Add new themes using CSS Modules
  - You can create or improve themes by editing CSS files. Just look at how class names are used in the JSX files, and add your own style variations (like light, dark, high-contrast, etc.).

---

- Test different schemas from real projects
  - Try generating schemas using [`react-diagram-schema`](https://github.com/AmiraBasyouni/react-diagram-schema), then load them into the visualizer. Check the console for any warnings or errors and confirm that all components are displayed correctly. If you find any warnings or errors, open an issue! We'd love to take a look.

---

- Improve error messages
  - Look for places where the visualizer throws generic errors or logs unclear messages. Suggest or submit improvements that make debugging easier for users.

---

- Update documentation or add examples
  - If something was confusing while you were testing, help others by adding an explanation, editing the README, or suggesting a better example schema.

## Roadmap & Features

You can view planned features and priorities in the [`ROADMAP.md`](https://github.com/AmiraBasyouni/react-diagram-visualizer/blob/main/ROADMAP.md)  
If you have a suggestion, open an issue or comment on an existing one.

## Questions?

- **Issues**: Open a [GitHub Issue](https://github.com/AmiraBasyouni/react-diagram-visualizer/issues).
- **Discussions**: Start a thread under [Discussions](https://github.com/AmiraBasyouni/react-diagram-visualizer/discussions) (coming soon).

## Thank you

Every contribution counts. Whether it's code, feedback, or docs!
