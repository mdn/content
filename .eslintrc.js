module.exports = {
  extends: [
    // "plugin:json/recommended"
    "plugin:markdown/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    // allows top-level await among other things
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};