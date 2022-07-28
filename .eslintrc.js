module.exports = {
  extends: [
    // "plugin:json/recommended"
    // "eslint:recommended",
  ],
  plugins: ["markdown"],
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
  rules: {},
  overrides: [
    {
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
    {
      // the markdown plugin assigns "virtual filenames" to fenced code blocks inside markdown,
      // see: https://github.com/eslint/eslint-plugin-markdown#advanced-configuration
      files: ["files/en-us/web/api/**/*.md/*.js"],
      rules: {
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "padded-blocks": "off",
        // "no-const-assign": "error",
        // "no-redeclare": "error",
        // "arrow-parens": "error",
        "no-var": "error",
        // "prefer-const": "error",
        // "prefer-template": "error",
        // "template-curly-spacing": "error",
        // "arrow-body-style": ["error", "as-needed"],
        // "no-return-assign": "error",
        // "no-loss-of-precision": "error"
      },
    },
    {
      // see https://github.com/mdn/content/pull/18665#discussion_r928087658
      files: ["files/en-us/web/api/layoutshiftattribution/index.md/*.js"],
      rules: {
        "arrow-body-style": "off",
      },
    },
    // {
    //   files: [
    //     "files/en-us/web/javscript/**/*.md/*.js",
    //     // "files/en-us/web/javascript/**/*.md/*.js,!files/en-us/web/javascript/**/*.md/*.example-bad.js",
    //     // "!files/en-us/web/javascript/**/*.md/*.example-bad.js",
    //   ],
    //   // excludedFiles: "*.js.example-bad",
    //   rules: {
    //     "no-undef": "off",
    //     "no-unused-expressions": "off",
    //     "no-unused-vars": "off",
    //     "padded-blocks": "off",
    //   },
    // },
  ],
};
