---
title: Authoring modules cross-platform
slug: Web/JavaScript/Guide/Modules/Cross-platform_modules
page-type: guide
sidebar: jssidebar
---

## "Isomorphic" modules

The introduction of modules encourages the JavaScript ecosystem to distribute and reuse code in a modular fashion. However, that doesn't necessarily mean a piece of JavaScript code can run in every environment. Suppose you discovered a module that generates SHA hashes of your user's password. Can you use it in the browser front end? Can you use it on your Node.js server? The answer is: it depends.

Modules still have access to global variables, as demonstrated previously. If the module references globals like `window`, it can run in the browser, but will throw an error in your Node.js server, because `window` is not available there. Similarly, if the code requires access to `process` to be functional, it can only be used in Node.js.

In order to maximize the reusability of a module, it is often advised to make the code "isomorphic" — that is, exhibits the same behavior in every runtime. This is commonly achieved in three ways:

- Separate your modules into "core" and "binding". For the "core", focus on pure JavaScript logic like computing the hash, without any DOM, network, filesystem access, and expose utility functions. For the "binding" part, you can read from and write to the global context. For example, the "browser binding" may choose to read the value from an input box, while the "Node binding" may read it from `process.env`, but values read from either place will be piped to the same core function and handled in the same way. The core can be imported in every environment and used in the same way, while only the binding, which is usually lightweight, needs to be platform-specific.
- Detect whether a particular global exists before using it. For example, if you test that `typeof window === "undefined"`, you know that you are probably in a Node.js environment, and should not read DOM.

  ```js
  // myModule.js
  let password;
  if (typeof process !== "undefined") {
    // We are running in Node.js; read it from `process.env`
    password = process.env.PASSWORD;
  } else if (typeof window !== "undefined") {
    // We are running in the browser; read it from the input box
    password = document.getElementById("password").value;
  }
  ```

  This is preferable if the two branches actually end up with the same behavior ("isomorphic"). If it's impossible to provide the same functionality, or if doing so involves loading significant amounts of code while a large part remains unused, better use different "bindings" instead.

- Use a polyfill to provide a fallback for missing features. For example, if you want to use the [`fetch`](/en-US/docs/Web/API/Fetch_API) function, which is only supported in Node.js since v18, you can use a similar API, like the one provided by [`node-fetch`](https://www.npmjs.com/package/node-fetch). You can do so conditionally through dynamic imports:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  The [`globalThis`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) variable is a global object that is available in every environment and is useful if you want to read or create global variables within modules.

These practices are not unique to modules. Still, with the trend of code reusability and modularization, you are encouraged to make your code cross-platform so that it can be enjoyed by as many people as possible. Runtimes like Node.js are also actively implementing web APIs where possible to improve interoperability with the web.

## Using modules in Node.js

Node.js supports both ECMAScript modules (ES modules) and CommonJS modules. To explicitly mark a file as an ES module, use the `.mjs` extension, or use `.js` with `"type": "module"` in the nearest parent `package.json` file:

```json
{
  "type": "module"
}
```

For example, create these two files in the same directory as `package.json`:

```js
// square.js
export const area = (side) => side ** 2;
```

```js
// main.js
import { area } from "./square.js";

console.log(area(4)); // 16
```

Run the entry module with `node main.js`. Node.js loads these files directly from the filesystem; no HTML page or HTTP server is needed.

Include file extensions in relative imports, such as `"./square.js"`. Node.js also resolves installed packages by bare names and provides built-in modules through `node:` specifiers:

```js
import { readFile } from "node:fs/promises";

const text = await readFile(new URL("./data.txt", import.meta.url), "utf8");
```

See [Node.js's ES module documentation](https://nodejs.org/api/esm.html) for its loading rules and APIs.

When publishing a package, its [`"exports"` field](https://nodejs.org/api/packages.html#package-entry-points) defines the entry points consumers can import. [Conditional exports](https://nodejs.org/api/packages.html#conditional-exports) can select different implementations for different environments or module systems. These package settings are separate from JavaScript `export` declarations, which determine the bindings each module exposes.

## Bundlers and other module formats

Many existing packages use [CommonJS](https://nodejs.org/api/modules.html), where `require()` loads dependencies and `module.exports` specifies the exported value:

```js
// square.cjs
module.exports = (side) => side ** 2;
```

In Node.js, `.cjs` explicitly identifies a CommonJS file, including inside a package with `"type": "module"`. An ES module can import its `module.exports` value as the default export:

```js
// main.js, in a package with "type": "module"
import area from "./square.cjs";

console.log(area(4)); // 16
```

For the reverse direction, CommonJS code can use asynchronous [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import). Node.js also supports [`require()` of synchronous ES module graphs](https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require), but this cannot load a graph that uses top-level `await`.

A bundler processes a module dependency graph to produce files for deployment. For example, [Webpack supports ES modules, CommonJS, and AMD](https://webpack.js.org/concepts/modules/), as well as other resource types through loaders. This lets applications incorporate dependencies written for different module systems.

Check your bundler's documentation when relying on its module resolution or resource handling. An import that works through a bundler may need different configuration when loaded directly by a runtime. For code intended to run directly in browsers, see [Using modules on the web](/en-US/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web).

## How TypeScript understands modules

[TypeScript](https://www.typescriptlang.org/docs/handbook/modules/theory.html) analyzes modules to check the types of imported values and, when compiling, produce JavaScript suitable for the runtime or bundler. Its `module` and `moduleResolution` compiler options describe that environment's module format and resolution rules. TypeScript can look up TypeScript source files or declaration files (`.d.ts`) to determine an imported module's types, while the runtime loads the corresponding JavaScript.

TypeScript recognizes a file with a top-level `import` or `export` as a module with its own scope. Its [`moduleDetection`](https://www.typescriptlang.org/tsconfig/moduleDetection.html) option controls how it recognizes other files as modules, including using Node.js package settings or treating all non-declaration files as modules. Adding `export {}` explicitly marks a file as a module without exporting any names. This compiler classification does not replace the runtime's own rules for identifying modules.

TypeScript also allows types to be imported and exported. The [`import type` and `export type`](https://www.typescriptlang.org/docs/handbook/2/modules.html#typescript-specific-es-module-syntax) forms are erased from the emitted JavaScript, so a type-only import does not load or execute a module at runtime. If you also need the module's side effects, use a separate side-effect import:

```ts
import type { Shape } from "./shapes.js";
import "./shapes.js";
```
