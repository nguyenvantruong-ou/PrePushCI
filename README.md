# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```



install eslint
go to .git and create pre-commit file 

#!/bin/sh
echo "Running ESLint..."
npm run lint
npm run test
npm run format

if [ $? -ne 0 ]; then
  echo "ESLint failed. Fix the errors before committing."
  exit 1
fi

echo "ESLint passed. Proceeding with the commit."

set package.json
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx",
    "test": "jest",
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx}\""
  }

## Pre-commit Hook Setup

This project uses a **pre-commit hook** to ensure code quality before each commit.  
It runs **ESLint**, **Jest tests**, and **Prettier formatting** automatically.

### Installation Steps
1. Install ESLint:
    ```bash
    npm install eslint --save-dev
    ```

2. Go to the `.git/hooks` directory and create a file named `pre-commit`:
    ```bash
    touch .git/hooks/pre-commit
    ```

3. Add the following script to `.git/hooks/pre-commit`:
    ```sh
    #!/bin/sh
    echo "Running ESLint..."
    npm run lint
    npm run test
    npm run format

    if [ $? -ne 0 ]; then
      echo "ESLint failed. Fix the errors before committing."
      exit 1
    fi

    echo "ESLint passed. Proceeding with the commit."
    ```

4. Make the `pre-commit` file executable:
    ```bash
    chmod +x .git/hooks/pre-commit
    ```

---

### Update `package.json` Scripts
Add the following scripts to your `package.json`:
```json
"scripts": {
  "lint": "eslint . --ext .ts,.tsx",
  "test": "jest",
  "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx}\""
}
