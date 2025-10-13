# react-diagram-visualizer

A standalone tool that visualizes your React codebase as an interactive UML-style diagram powered by [ReactFlow](https://reactflow.dev/).

**:flashlight: What Makes It Unique:**

- Unlike [Mermaid](https://mermaid.js.org/), `react-diagram-visualizer` specializes in React component hierarchies, leveraging schemas from [`react-diagram-schema`](https://github.com/AmiraBasyouni/react-diagram-schema).

- Seamlessly integrates with [`react-diagram-schema`](https://github.com/AmiraBasyouni/react-diagram-schema)’s schema, supporting [`elkjs`](https://github.com/kieler/elkjs) layouts for hierarchical, scalable diagrams.

**:sparkles: Enterprise Features**:

- Planning to support node grouping by filepath and collapsible nodes for large codebases (50+ components), using [`elkjs`](https://github.com/kieler/elkjs) layouts.
- Planning to add performance metrics for 50+ component diagrams (e.g., rendering time) post-MVP testing.
- For more information about post-MVP and planned features, visit [`ROADMAP.md`](https://github.com/AmiraBasyouni/react-diagram-visualizer/blob/main/ROADMAP.md).

## Arguments

Run the visualizer with the following arguments:

1. **(required)** `<entryDirectory>` or `<entryFile>`  
   Path to your application's entry directory or entry file.  
   Example: `./src/` or `./src/index.js`

2. _(optional)_ `[rootComponentName]`  
   Name of the root React component defined in the entry file.  
   If omitted, the tool falls back to the default export,  
   either from the entry file (if `<entryFile>` was provided)  
   or an index file (`index.tsx`, `index.ts`, `index.jsx`, or `index.js`)
   in the entry directory.  
   Example: `App`

## Example Usage

**Example Command:**  
`npx react-diagram-visualizer ./src/components App`

**Example Input File Content:**

```JS
import React from "react";
import FavouriteColorContext from "./FavouriteColorProvider";
import FavouriteThemeContext from "./FavouriteThemeProvider";

function App({ children, propA, propB, propC }) {
    const [count, setCount] = React.useState(0);
    const [theme, setTheme] = React.useState("");
    const favouriteColor = React.useContext(FavouriteColorContext);
    const { theme1, theme2 } = React.useContext(FavouriteThemeContext);
    function buttonHandler() {
      setCount(count + 1);
      setTheme("dark");
      B();
    }
    function B(color) {
      favouriteColor[color];
      console.log(theme1);
      console.log(theme2);

      function C() {}
      return C();
    }
    return (
      <>
        <Header propA={propA} propB={propB} propC={propC} />
        <main>
          <p>Typical app structure</p>
          {count}
          <button onClick={buttonHandler}>increment counter</button>
          <Content theme={theme}>{children}</Content>
        </main>
      </>
    );
  }

  function Header() {
    return <div></div>;
  }

  function Content() {
    return <p></p>;
  }

  export default App;

```

---

**Example Diagram Output:**

![ReactFlow Diagram showing component hierarchy](assets/diagram-preview_v2.png)  
_The picture previews an interactive UML-style diagram showing component metadata, rendered using [ReactFlow](https://reactflow.dev)._

- Each node represents a React component. Nested components (like B defined inside App) are detected and visualized.
- The **internal** list represents internally defined data (e.g. `[state, stateSetter]` and `nameOfFunction()`).
- The **external** list represents props, and the symbol **+C** represents context props.

**Diagram interactions (MVP):**

- zoom
- drag nodes

**Post-MVP diagram interactions will include:**

- node clicking for file path details
- see [`ROADMAP.md`](https://github.com/AmiraBasyouni/react-diagram-visualizer/blob/main/ROADMAP.md) to learn more about future plans

## Specifications

**Project Dependencies:**

- [`react-diagram-schema`](https://github.com/AmiraBasyouni/react-diagram-schema) for generating the metadata
- [`elkjs`](https://github.com/kieler/elkjs) for generating the layout
- [`ReactFlow`](https://reactflow.dev) for generating the diagram
- [`parcel`](https://parceljs.org/) for hosting the diagram locally on your machine

**Node.js Version:**

- Node.js 18+ recommended (use `nvm use 18` if needed)

## Quick Start

![Quick demo](assets/quick-demo.gif)  
_A short preview showing `react-diagram-visualizer` generating a diagram from a React project._  
[_▶️ Watch the quick demo in full resolution on YouTube_](https://youtu.be/I9kxUosEFdU)

If your entry component is default exported,  
run the following command in the entry component's directory:

```bash
npx react-diagram-visualizer ./
```

Otherwise, explicitly specify the component you'd like to visualize. For example:

```bash
npx react-diagram-visualizer ./ Button
```

## Get Started

1. Install globally:
   ```bash
   npm install -g react-diagram-visualizer
   ```

---

2. **Run** the diagram in the directory of the component you'd like to visualize. Either by running:

   ```bash
   react-diagram-visualizer ./
   ```

   if the component is default exported, or otherwise by explicitly stating the name of the component:

   ```bash
   react-diagram-visualizer ./ App
   ```

   **Tip:**  
   if you'd like to shorten the `react-diagram-visualizer` command, you can create an alias by running:

   ```bash
   echo "alias visualize='react-diagram-visualizer'" >> ~/.bashrc
   ```

   or replace `~/.bashrc` with `~/.zshrc` depending on your terminal environment.  
   Then, restart the terminal and run the visualizer using the format  
   `visualize <entryDirectory> [rootComponent]` as shown above.

---

3. **View** the diagram at `http://localhost:1234` or the URL Parcel prints if 1234 is occupied.

## Troubleshooting Tips

- No diagram?
  - If your component is not default exported, make sure to specify the component name.
  - Ensure you've provided the correct directory.
- Port occupied? Check console output for the correct localhost URL.

## Roadmap

See `react-diagram-visualizer`'s [ROADMAP.md](https://github.com/AmiraBasyouni/react-diagram-visualizer/blob/main/ROADMAP.md) for feature plans and upcoming goals.

## Contributing

Please visit [CONTRIBUTING.md](https://github.com/AmiraBasyouni/react-diagram-visualizer/blob/main/CONTRIBUTING.md) to learn about how you can contribute to `react-diagram-visualizer`.

## License

MIT
