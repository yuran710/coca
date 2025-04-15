import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: {
      js,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
      'prettier/prettier': 'error',
    },
  },
]);
