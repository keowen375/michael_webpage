# Copilot Instructions for michael_webpage

## Project Overview
- This project is a React web application bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- The main entry point is `src/index.js`, which renders the root `App` component from `src/App.js`.
- Styling is managed with Tailwind CSS, configured via `tailwind.config.js` and `postcss.config.js`. Custom styles can be added in `src/css/input.css` and imported into the main CSS files.
- Static assets (icons, manifest, etc.) are located in the `public/` directory.

## Key Workflows
- **Start development server:** `npm start` (runs on http://localhost:3000)
- **Run tests:** `npm test` (uses Jest, test files like `App.test.js`)
- **Build for production:** `npm run build` (outputs to `build/`)
- **Eject (advanced):** `npm run eject` (irreversible, exposes config files)

## Project Structure & Patterns
- **Component files:** All React components are in `src/`. Main app logic is in `App.js`.
- **Styling:**
  - Use Tailwind utility classes in JSX for most styling.
  - For custom CSS, edit `src/css/input.css` and import as needed.
  - Global styles are in `src/index.css` and `src/App.css`.
- **Testing:**
  - Place test files alongside components, e.g., `App.test.js` for `App.js`.
  - Use Jest and React Testing Library patterns.
- **Assets:**
  - Place static files (images, icons) in `public/` for direct access, or import them in JS for bundling.

## Conventions & Tips
- **Do not edit files in `build/` directly.**
- **Do not commit `node_modules/` or build artifacts.**
- **Follow React functional component patterns.**
- **Use Tailwind for layout and design unless custom CSS is required.**
- **Keep component logic in `src/`, avoid putting logic in `public/` files.**

## Integration Points
- **Tailwind CSS:** Configured via `tailwind.config.js` and `postcss.config.js`. Update these files to change Tailwind behavior.
- **Service Workers:** If enabled, configured in `public/` and `src/` (not enabled by default in CRA).

## References
- See `README.md` for more details on available scripts and workflow.
- For advanced configuration, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
