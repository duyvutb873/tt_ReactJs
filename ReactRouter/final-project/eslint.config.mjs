import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: true, // Thêm hỗ trợ biến Jest
      },
      parser: parserTs, // Parser cho TypeScript
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Hỗ trợ JSX
        },
      },
    },
    plugins: {
      react: pluginReact,
      "@typescript-eslint": pluginTs,
      prettier: pluginPrettier,
    },
    rules: {
      // React rules
      "react/react-in-jsx-scope": "off", // Không cần import React trong JSX
      "react/prop-types": "off", // Tắt kiểm tra PropTypes

      // TypeScript rules
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn"],

      // Common rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      indent: ["error", 2],

      // Prettier integration
      // "prettier/prettier": "error",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": ["error"], // Bắt buộc khai báo kiểu trả về cho TypeScript
    },
  },
  {
    ignores: [
      'node_modules/',
      'build/',
      'dist/',
      '.next/',
      '*.config.js',
      'src/reportWebVitals.js',
      'src/setupTests.js',
      '*.config.mjs',
    ],
  },
];
