# Roadmap: react-diagram-visualizer
This file outlines the phases and tasks for building the `react-diagram-visualizer` tool.

---
## MVP: Visualize a Schema
Goal: Take a `schema.json` file as input and render a basic diagram using [React Flow](https://reactflow.dev/).
### Core Features:
- [ ] Load schema from `public/schema.json`
- [ ] Visualize components as nodes
- [ ] Display internally defined states and functions
- [ ] Display externally defined props and context
- [ ] Basic styling and layout
- [ ] Draw edges based on component hierarchy


### Near-Term Goals
Features planned to improve flexibility and manual augmentation:

- [ ] Allow manual editing of node metadata (e.g. add prop types)
- [ ] Enable editing of a component’s description
- [ ] Save modified schema back to file (or prepare for export)

---
## 🚀 Long-Term Vision

Features to explore in future versions or when transitioning to a full web app:

- [ ] Treat react-diagram-schema as a dependency to support schema generation within the visualizer

- Allow importing schemas from multiple sources:
  - [ ] public/schema.json (default)
  - [ ] Local file system
  - [ ] API endpoints
  - [ ] Directly from react-diagram-schema

- [ ] Save, export, and share diagrams
- [ ] Dark mode and theming support

### 🔁 Next.js Migration Prep
To ensure an easy migration from Parcel to Next.js in the future, we’re following these practices:
- [x] All components use **CSS Modules**
- [x] `schema.json` lives in the `public/` directory
- [x] No **Parcel-specific features** used (e.g. no custom transformers or entry points)
- [x] App entry is designed to later move to `/src/app/page.js` (App Router structure)


---
Contributions welcome! Feel free to open a discussion or PR if you have ideas or feedback

