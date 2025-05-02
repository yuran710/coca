import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
// Import 'rules' from 'eslint-plugin-prettier' is not needed here
// import { rules } from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended'
    ],
    languageOptions: {
        globals: {
            ...globals.browser, // Добавляем глобальные переменные браузера
            // Здесь можно добавить другие пользовательские глобальные переменные, если они есть
        },
    },
    // Здесь можно добавить другие правила, если нужно переопределить или добавить свои
    // rules: {
    //   'no-unused-vars': 'warn', // Пример: изменить уровень правила
    // },
  },
]);
