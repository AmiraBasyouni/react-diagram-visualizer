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

Testing:
Write simple tests to check if nodes and themes display correctly, using our testing tools (Jest and React Testing Library).

## Pull Requests

1. **Branch** from main:

   ```bash
   git checkout -b fix-bug-header
   ```

2. **Write clear commits**:
   Example:`feat(App): implement React Flow visualization for component schema`

3. **Push** and open a pull request.

4. Include **screenshots or schema output** if your change affects visualization or parsing.

## Testing your Changes

Because react-diagram-visualizer is a React application and currently does not include automated tests or sample projects, here’s how you can manually test your changes:

1. **Provide** your own **test schema**

   You can generate a schema inside a `schema.json` file using [`react-diagram-schema`](https://github.com/AmiraBasyouni/react-diagram-schema), place the file in the `src/` directory of `react-diagram-visualizer` to load its content. This helps confirm that your changes work with real React code.

   You can also copy the sample `schema.json` from [`react-diagram-schema`](https://github.com/AmiraBasyouni/react-diagram-schema)'s `README.md` to the `react-diagram-visualizer` repository's `src/` directory.

   Note: The `schema.json` file describes your React components (e.g., names, props).

2. **Start** the **development server**:

   run the visualizer locally using:

   ```bash
   npm run dev
   ```

   This will launch the app on localhost, where you can interactively test your updates.

3. **Check** the **console** for errors or warnings  
   As you load and interact with diagrams, watch the browser console for any issues. Clear, error-free rendering indicates success.

4. **Look for unexpected** visual **behavior**:

   Example Issues:
   - Layout issues (nodes overlapping, misaligned nodes or edges)

   - Missing data (e.g. props or state not appearing)

   - Theme bugs (styles not applied (e.g. wrong border color))

5. **Test multiple schema** structures if possible  
   If you're working on rendering or layout logic, try schemas of different sizes or complexity. This helps ensure your update is robust across various component trees.

6. Optional: **Add** a visual **screenshot**  
   If your change affects layout or appearance, consider capturing a screenshot for your pull request. It helps reviewers understand the impact quickly.

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
