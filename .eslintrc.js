module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/prettier'],
  plugins: [],
  rules: {},
  overrides: [
    {
      files: ["src/pages/*.vue"],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
  ],
};
