import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import css from "@eslint/css";
import vitest from "eslint-plugin-vitest"
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,

  //  Override specific React rules
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      "react/prop-types": "off", //  Disable prop-types warning
    },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
	  {
    files: ["**/*.test.js", "**/*.test.jsx", "**/*.test.mjs"],
    plugins: {
      vitest,
    },  
    languageOptions: {
      globals: {
        ...globals.vitest,
      },  
    },  
    rules: {
      ...vitest.configs.recommended.rules,
    },  
  },  

]);
