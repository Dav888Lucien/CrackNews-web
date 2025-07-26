// eslint.config.js
import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  // 1) Extend all your base configs, including Prettier
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
  ),

  // 2) Folders to ignore
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'src/shadcn/**',
      'src/assets',
      'public/**',
      'src/lib/**',
      'vite.config.js',
    ],
  },

  // 3) Your JS/JSX rules + parser settings
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.json'],
          moduleDirectory: ['node_modules', 'src'],
        },
        alias: {
          map: [['@', path.resolve(__dirname, 'src')]],
          extensions: ['.js', '.jsx', '.json'],
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/namespace': 'off',
      'import/no-named-as-default': 'off',
      'semi': [2, 'always'],

      // Enforce single quotes (and allow templates / avoid escape)
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
    },
  },
];
