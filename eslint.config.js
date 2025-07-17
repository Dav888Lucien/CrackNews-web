// eslint.config.js
import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ),

  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "src/shadcn/**",
      "src/assets",
      "public/**",
      "src/lib/**",
      "vite.config.js", // temporary exclude
    ],
  },

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        // keep your node resolver for plain imports:
        node: {
          extensions: [".js", ".jsx", ".json"],
          moduleDirectory: ["node_modules", "src"],
        },
        // add this alias resolver for the "@/" prefix:
        alias: {
          map: [["@", path.resolve(__dirname, "src")]],
          extensions: [".js", ".jsx", ".json"],
        },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "import/namespace": "off",
      // …other overrides
    },
  },
];
