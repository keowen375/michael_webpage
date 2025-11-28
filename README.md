# michael_webpage

A modern React web application bootstrapped with Create React App and styled using Tailwind CSS.

## Features
- ⚛️ Built with React (functional components)
- 🎨 Tailwind CSS for rapid, utility-first styling
- 🧪 Jest and React Testing Library for testing
- 🚀 Optimized production builds
- 📁 Organized structure for easy component and asset management

## Getting Started

### Prerequisites
- Node.js (v14 or newer recommended)
- npm (comes with Node.js)

### Installation
```bash
npm install
```

### Development
Start the development server:
```bash
npm start
```
Visit [http://localhost:3000](http://localhost:3000) in your browser. The app reloads automatically on code changes.

### Testing
Run tests in watch mode:
```bash
npm test
```

### Production Build
Create an optimized build in the `build/` directory:
```bash
npm run build
```

## Project Structure
```
public/           # Static assets (index.html, icons, manifest)
src/              # React components and app logic
	App.js          # Main App component
	index.js        # Entry point
	css/input.css   # Custom Tailwind CSS
	...
tailwind.config.js  # Tailwind configuration
postcss.config.js   # PostCSS configuration
```

## Styling
- Use Tailwind utility classes in JSX for most layout and design.
- Add custom styles in `src/css/input.css` if needed.
- Tailwind is configured via `tailwind.config.js` and `postcss.config.js`.

## Conventions
- Keep all React logic in `src/`.
- Place static files in `public/` for direct access.
- Do not edit files in `build/` or commit `node_modules/`.

## References
- [Create React App Docs](https://facebook.github.io/create-react-app/docs/getting-started)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)

---

Feel free to customize this README to better fit your project's unique features or instructions!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
