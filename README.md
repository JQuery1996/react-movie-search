# React Movie Search

## React + TypeScript + Vite :rocket:

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/JQuery1996/react-movie-search.git
```

### Install Despendencies

- Navigate to the project directory and install the dependencies using `Yarn` or `npm'`:

```bash
cd react-movie-search
# using yarn
yarn install
# using npm
npm install
```

### Running the application

- To start the development server, run:

```bash
# using yarn
yarn dev
# using npm
npm run dev
```

This will launch the application in development mode. Open `http://localhost:5173` in your browser to view it.

### Building the application

- To build the production-ready app, use the following command:

```bash
# using yarn
yarn build
# using npm
npm run build
```

This will generate a `dist` folder containing the optimized and minified build.

### Available Scripts

- [x] In the project directory, you can run:
- `yarn dev` or `npm run dev`: Starts the development server.
- `yarn build` or `npm run build`: Builds the app for production.

### Learn More

You can learn more about Vite in the [Vite documentation](https://vitejs.dev/).

> Happy coding! :fire:

```bash
users can choose either Yarn or npm based on their preference for package management.
```
