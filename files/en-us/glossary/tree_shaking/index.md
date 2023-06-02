---
title: Tree shaking
slug: Glossary/Tree_shaking
page-type: glossary-definition
---

{{GlossarySidebar}}

**Tree shaking** is a term commonly used within a JavaScript context to describe the removal of dead code.

It relies on the [import](/en-US/docs/Web/JavaScript/Reference/Statements/import) and [export](/en-US/docs/Web/JavaScript/Reference/Statements/export) statements to detect if code modules are exported and imported for use between JavaScript files.

In modern JavaScript applications, we use module bundlers (e.g., [webpack](https://webpack.js.org/) or [Rollup](https://github.com/rollup/rollup)) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

## See also

- ["Benefits of dead code elimination during bundling"](https://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling) in Axel Rauschmayer's book: "Exploring JS: Modules"
- [Tree shaking implementation with webpack](https://webpack.js.org/guides/tree-shaking/)
