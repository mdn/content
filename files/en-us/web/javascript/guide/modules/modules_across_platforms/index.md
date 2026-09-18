---
title: Modules across platforms
slug: Web/JavaScript/Guide/Modules/Modules_across_platforms
page-type: guide
sidebar: jssidebar
---

While MDN primarily documents the web (i.e., JavaScript running in browsers), most developers at some point deal with other JavaScript environments, especially Node.js/Deno/Bun. Furthermore, your code is statically analyzed by tools like bundlers and TypeScript. All these tools have different rules regarding how modules are understood, and it's easily overlooked by developers, who often take the [web rules](/en-US/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web) for granted. While we won't try to document all the technicalities of these non-browser environments, we'd like to offer a mental model of how you should think about modules across platforms, and practical guidance for how to make your module code portable.

## Other module formats

ECMAScript modules (ESM) were standardized and implemented almost 20 years after the birth of JavaScript, at which time most applications were already complicated enough to need module systems, so various alternatives have been implemented by runtimes and bundlers.

In essence, every module system needs three parts:

- The module code, with its own scope to encapsulate variables, such as a wrapper function.
- Some protocol for letting the module declare its exports.
- An importing mechanism to identify another module and access its exports.

### CommonJS

Node.js popularized the [CommonJS](https://nodejs.org/api/modules.html) system. In Node.js's implementation of CommonJS, each module is implicitly wrapped in a function. This function passes five things into the module scope: `exports`, `module`, `require`, `__dirname`, and `__filename`. Each module's exported value is a single JavaScript value contained in `module.exports`. You can obtain this value by calling `require()` with the module's ID.

```js
// -- rectangle.cjs --
module.exports = {
  area: (a, b) => a * b,
};
```

```js
// -- square.cjs --
const rectangle = require("./rectangle.cjs");
// `rectangle` contains the `module.exports` object of rectangle.cjs

module.exports = {
  area: (side) => rectangle.area(side, side),
};
```

Unlike ESM which leaves [specifier resolution](/en-US/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#module_specifiers_on_the_web) entirely host-defined, CommonJS defines [some semantics](https://wiki.commonjs.org/wiki/Modules/1.1.1#Module_Identifiers) for the module ID. It defines that relative IDs, starting with `.` or `..`, should be resolved relative to the current module, while top-level IDs starting with neither should be resolved relative to some "module name space root". Node.js picks up where the CommonJS spec left off and defines a [formal resolution algorithm](https://nodejs.org/api/modules.html#all-together), which is used as the basis for resolution by many tools that recognize CJS, including bundlers and TypeScript. Most notably, the resolution logic of Node.js defines the `node_modules` folder and how to import paths pointing to directories (it uses the directory's `package.json` or `index.js`).

### AMD

CommonJS works well in Node.js, but it's synchronous, which is detrimental for browsers because loading dependencies may involve network requests. [Asynchronous Module Definition (AMD)](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) is more popular in browsers because its imports are asynchronous. In AMD, each module calls `define()` with an array of dependency IDs and a factory function. The loader resolves the dependencies before calling the factory, passing their exported values as arguments in the same order. The factory can return a value to export from the module.

```js
// -- rectangle.js --
define([], function () {
  return {
    area: (a, b) => a * b,
  };
});
```

```js
// -- square.js --
define(["./rectangle"], function (rectangle) {
  // `rectangle` contains the value returned by rectangle.js's factory
  return {
    area: (side) => rectangle.area(side, side),
  };
});
```

The `define()` function is provided by an AMD loader, such as [RequireJS](https://requirejs.org/docs/api.html), rather than by the runtime (browsers don't natively understand AMD). AMD supports relative and top-level module IDs, similar to CommonJS. How these IDs map to files depends on the loader and its configuration. For example, RequireJS normally resolves top-level IDs against a configured `baseUrl` and adds the `.js` extension, so module IDs usually omit it.

### UMD

Before ESM, there was already the desire to make modules cross-platform! [Universal Module Definition (UMD)](https://github.com/umdjs/umd) is a set of wrapper patterns that allow the same file to work with different module systems. A typical UMD wrapper checks for an AMD loader, then for a CommonJS environment, and otherwise exposes the module as a global variable. Each branch uses the same factory function to create the module's exported value.

```js
// -- rectangle.js --
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.rectangle = factory();
  }
})(globalThis, function () {
  return {
    area: (a, b) => a * b,
  };
});
```

```js
// -- square.js --
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./rectangle"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./rectangle.js"));
  } else {
    root.square = factory(root.rectangle);
  }
})(globalThis, function (rectangle) {
  return {
    area: (side) => rectangle.area(side, side),
  };
});
```

Now this same file can be imported in both Node.js running CommonJS and browsers running AMD, without any modification to the source code. In the global-variable branch, you must load the dependencies yourself, in the correct order, just like [good old global scripts](/en-US/docs/Web/JavaScript/Guide/Modules#whats_a_module).

UMD does not define its own dependency resolution rules; it's handled by the AMD/CommonJS branches. People rarely hand-write UMD; they are usually generated by bundlers and transpilers.

## Using modules in Node.js

Node.js supports both ESM and CommonJS modules. When it attempts to execute a file, it must first decide if the file is CJS or ESM. For backwards compatibility, without any contextual cues, Node.js defaults to CJS (unless the file contains ESM-specific syntax like `import`/`export`, in which case it switches to ESM). To explicitly mark a file as ESM, use the `.mjs` extension, or use `.js` with `"type": "module"` in the nearest parent `package.json` file:

```json
{
  "type": "module"
}
```

To explicitly mark a file as CJS, use the `.cjs` extension, or use `"type": "commonjs"` in the nearest parent `package.json` file.

For example, create these two files in the same directory as `package.json` (which contains `"type": "module"`):

```js
// -- square.js --
export const area = (side) => side ** 2;
```

```js
// -- main.js --
import { area } from "./square.js";

console.log(area(4)); // 16
```

Run the entry module with `node main.js`. Node.js loads these files directly from the file system; no HTML page or HTTP server is needed.

Node ESM does not expose the CJS module-scoped variables: `__dirname`, `__filename`, `exports`, `module`, `require`. While you probably don't need `exports` and `module` because you have the `export` declarations, you might find `__dirname` and `__filename` useful for getting the path of the current module and `require` for synchronously loading a dependency when not at the top level. [`import.meta`](https://nodejs.org/api/esm.html#importmeta) largely replaces `__dirname` and `__filename`, with Node-specific properties like `import.meta.dirname` and `import.meta.filename`. If you want to synchronously load dependencies, Node also provides the [`createRequire`](https://nodejs.org/api/module.html#modulecreaterequirefilename) function to restore the `require` function within this module's context.

Node has different resolution logic for ESM and CJS module specifiers. Its ESM implementation is more consistent with [that of browsers](/en-US/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#module_specifiers_on_the_web), which means you must keep the file extensions like `"./square.js"` instead of `"./square"`. To be compatible with the existing ecosystem, Node.js still resolves bare names to installed packages in `node_modules`. It provides built-in modules through the `node:` protocol.

```js
import { readFile } from "node:fs/promises"; // Import from built-in module
import _ from "lodash"; // Import from package in node_modules

const text = await readFile(new URL("./data.txt", import.meta.url), "utf8");
const wordCounts = _.countBy(_.words(text));
```

Whether the ESM or CJS specifier resolution rules are used depends on the importing method, not the target module. You use CJS module specifiers with `require` (including ones created by `createRequire` in ES modules) and ESM ones with `import` (including dynamic imports in CJS modules).

Node specifier resolution offers some more features, like import aliases using `"imports"` in `package.json`. See [Node.js's ES module documentation](https://nodejs.org/api/esm.html) for its loading rules and APIs.

### ESM/CJS interop

In Node.js, an ES module can import a CJS module, which loads the `module.exports` value as the default export:

```js
// -- main.mjs --
import square from "./square.cjs";

console.log(square.area(4)); // 16
```

Conversely, CommonJS code can use asynchronous [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import) to load ES modules. Node.js also supports [`require()` of synchronous ES module graphs](https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require), but this cannot load a graph that uses [top-level `await`](/en-US/docs/Web/JavaScript/Guide/Modules#top-level_await).

```js
const square = require("./square.mjs");
// Assuming square.mjs and its dependencies do not use top-level await

console.log(square.area(4));

import("./module-with-top-level-await.mjs").then((mod) => {
  mod.foo();
});
```

Many CJS packages are expected to export individual names, like this:

```js
const { area } = require("./square.cjs");
```

This does _not_ always translate to named imports in ESM:

```js
import { area } from "./square.cjs";
```

This is because [modules must be linked before evaluated](/en-US/docs/Web/JavaScript/Guide/Modules/Module_graph#from_module_source_to_execution), which means Node must be able to tell if an export called `area` exists before it runs `square.cjs`. Therefore, it can only look for certain code patterns, like `module.exports = { area }` or `module.exports.area = ...`, but it will not 100% succeed, especially if CJS code was hand-written and modifies `module.exports` in a convoluted way. Most common compiler-produced CJS idioms can be correctly analyzed.

In the worst case, you may need to import the whole `module.exports` object, and then destructure it:

```js
import square from "./square.cjs";

const { area } = square;
```

Note that CJS has no concept of a "default export"; when you default-import a CJS module, you are in fact loading the whole `module.exports` object, within which there may be conceptual "named exports" as properties. Compilers would transpile `export default` declarations to CJS code that's essentially `module.exports.default = ...`, and this cannot be directly imported in an ES module (`import { default as area }` is the same as `import area`, which loads the whole `module.exports` object).

```js
// -- square.js --
// This file will be compiled into CJS
export default function area(side) {
  return side ** 2;
}
// Compiled code:
// module.exports.default = function area(side) ...
```

```js
// -- main.mjs --
import square from "./square.js";

// Can't avoid this!
const { default: area } = square;
```

For this reason, if you write ESM syntax that will get compiled to CJS and then imported by native ES modules, you should avoid default exports or provide a named export alias.

```js
// -- square.js --
// Export the exact same value as the default export
export { area };
```

### Packages

When publishing a package, its [`"exports"` field](https://nodejs.org/api/packages.html#package-entry-points) defines the entry points consumers can import. [Conditional exports](https://nodejs.org/api/packages.html#conditional-exports) can select different implementations for different environments or module systems. These package settings are separate from JavaScript `export` declarations, which determine the bindings each module exposes. The [`"main"` field](https://nodejs.org/api/packages.html#main) is now unnecessary and can be replaced by `"exports"`.

For a long time, Node did not allow CJS consumers to import ESM packages without using asynchronous `import()` (allowing `require()` to load ESM came much later). Therefore, packages that wish to publish in native ESM would need to publish a separate CJS copy for consumers still running CJS:

```json
{
  "name": "dual-package",
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.cjs",
      "default": "./dist/esm/index.js"
    }
  }
}
```

This practice, called dual packaging, is now unnecessary as long as the package's dependency graph doesn't use top-level `await`. If different parts of your application loaded the same package in CJS and ESM forms, they may not share the same module state, creating subtle bugs.

## Transpilers

We have continuously referred to transpilers, which convert certain JavaScript syntaxes to other JavaScript syntaxes. Converting between module formats is, of course, a part of their job. Common transpilers, like [Babel](https://babeljs.io/), [SWC](https://swc.rs/), and [tsc](https://www.typescriptlang.org/), are all capable of taking modules written in native ESM syntax and emitting one of the [aforementioned module formats](#other_module_formats).

For example, take the following source code:

```js
// -- src/square.js --
import * as rectangle from "./rectangle";

export function area(side) {
  return rectangle.area(side, side);
}
```

And run a transpiler to produce CJS. It may output the following:

```js
// -- dist/square.js --
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true,
});
Object.defineProperty(exports, "area", {
  enumerable: true,
  get: function () {
    return area;
  },
});
const _rectangle = /*#__PURE__*/ _interop_require_wildcard(
  require("./rectangle"),
);
// ... definition for _interop_require_wildcard ...
function area(side) {
  return _rectangle.area(side, side);
}
```

Therefore, while you may feel like you are authoring ESM because you are writing `import` and `export` declarations, unless you configured your transpiler to emit native ESM, you may in fact still be writing CJS code (or some other module format). Transpilers typically work on single files only, preserving the module specifiers as-is. This is why code like `import * as rectangle from "./rectangle"` may still work despite the lack of extensions; it eventually gets compiled to `require("./rectangle")`, which is valid CJS.

The goal of transpilers is that you feel like you are writing native ESM as much as possible if both the target module and the importer module are transpiled. Specifically, most transpilers do not always convert `import rectangle from "./rectangle";` to load the whole `module.exports` object. In the output code above, notice the `__esModule` marker. This marker marks that this CJS module was produced by transpiling ESM syntax. Most transpilers compile default-imports to read `module.exports.default` (i.e., the value exported by a transpiled `export default` declaration) if this marker is present, and `module.exports` otherwise.

The downside is that if only one side is transpiled while the other side is run in Node's native ESM, you may suddenly see rough edges (as mentioned in [ESM/CJS interop](#esmcjs_interop)). For example, a transpiled `export default` can no longer be imported using default-imports in native ESM.

You need to read the documentation for your transpiler or conduct experiments to understand specific rules about how different kinds of `import` and `export` declarations get transpiled.

## Bundlers

While bundlers usually come with transpilers that convert module formats, they go one step further and actually try to understand the dependency graph in order to transform and optimize it.

Starting from one or more entry modules, a bundler follows their dependencies and combines code into output files. The most primitive bundler only outputs a single JavaScript file (the "bundle"), but multiple files may also be emitted, especially when dynamic `import()` is used. Even if you intend to run ESM directly, bundlers are still very useful, because they perform important transformations and optimizations. For example, [Vite](https://vite.dev/guide/) lets applications written in ESM use CommonJS and UMD dependencies through [dependency pre-bundling](https://vite.dev/guide/dep-pre-bundling.html). During development, Vite serves transformed modules using native ESM; its production build bundles the application for deployment. Bundlers are even useful outside of browsers: even if you are developing a Node library or application, you may still use a bundler to optimize your code size and/or use non-standard syntax.

Bundlers are not JavaScript hosts because they do not _execute_ code. They only statically analyze files. Nevertheless, they have entire sets of rules for dealing with modules that are comparable to browsers or Node.

### Module resolution

Unlike a transpiler that preserves module specifiers, a bundler needs to locate the dependencies it includes.

Most packages for frontend are also managed using Node package managers in the `node_modules` folder, so bundlers understand Node-style package imports by default. They also tend to support both ESM-style and CJS-style resolution simultaneously (i.e., directory imports and extension-less imports), although they may choose to adhere more to one of them if, for example, the module has an explicit `.mjs`/`.cjs` extension.

Bundlers often offer configurable resolution rules. For example, Vite's [`resolve.alias`](https://vite.dev/config/shared-options.html#resolve-alias) option lets you configure an alias:

```js
// -- vite.config.js --
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@shapes": fileURLToPath(new URL("./src/shapes", import.meta.url)),
    },
  },
});
```

Your source code can then use this alias:

```js
import { area } from "@shapes/square";
```

With this configuration, Vite can resolve the import to `src/shapes/square.js`. The browser doesn't need to understand this alias because Vite rewrites the import during development and resolves it during bundling. However, the original source cannot run directly in a browser without an import map providing an equivalent mapping.

### Optimizing the module graph

Bundlers concatenate all files in the module graph together. If you import `lodash`, you copy the entire source code of [Lodash](https://lodash.com/)—with over 100 utility functions—into your bundle, which is very costly. Bundlers can remove code that isn't used by the application, commonly called {{Glossary("tree shaking")}}. ESM's static imports and exports help the bundler determine which bindings are used.

> [!NOTE]
> This is a big reason why, if you are publishing a package that's intended to be consumed by bundlers and not run directly, you should publish in ESM syntax so bundlers can understand it more easily.

For example:

```js
// -- big-library --
export function map() {}

export function filter() {}

export function reduce() {}
```

```js
// -- my-app.js --
import { map } from "big-library";
```

The bundler will be able to see that the `filter` and `reduce` exports are never used by your app, and remove them from the final bundle. It can even go one step further and see that even though you imported `map`, you never called it (so it's "dead code") and therefore avoid bundling the entire `big-library`.

> [!NOTE]
> You may wonder why one would keep this import at all if it's unused. This is because it may be conditionally used, but the condition is known at build time. For example:
>
> ```js
> if (import.meta.env.PROD) {
>   map();
> } else {
>   someOtherCode();
> }
> ```
>
> The `import.meta.env.PROD` value is statically set by the bundler during the build, so if it's `false`, then the final bundle only contains the `someOtherCode()` branch, and the `import` becomes unused.

This doesn't mean the whole module can be discarded: executing the module may have side effects, such as registering an event listener or modifying a global object. So even after dead code elimination you may end up with a side-effect import like `import "big-library";`, and all unused declarations within that module are removed. Some bundlers recognize a `"sideEffects"` field in `package.json` that identifies files whose execution must be preserved. If your package doesn't have side-effects on import (including any CSS files that must be applied), you can set `"sideEffects": false`, which allows bundlers to elide the whole `import`.

Bundling doesn't necessarily produce one file. With code splitting, a bundler can put dynamically imported code into separate files, called _chunks_, that are loaded when needed. This is useful because it minimizes the size of code to load on initialization and avoids loading code that may not be used by the user. Some bundlers may automatically split code, but generally you need to explicitly trigger code splitting using [dynamic imports](https://vite.dev/guide/features.html#dynamic-import):

```js
button.addEventListener("click", async () => {
  const { showChart } = await import("./chart.js");
  showChart();
});
```

Depending on the build configuration, `chart.js` and its dependencies may be emitted separately from the initial application code. The bundler rewrites the import to load the generated chunk:

```js
button.addEventListener("click", async () => {
  // A unique hash is appended for caching purposes
  const { showChart } = await import("./chart-ABCDEF.js");
  showChart();
});
```

You must deploy these additional files as well as the entry file.

The bundler must be able to discover the modules to include during the build. Native `import()` accepts an arbitrary string at runtime, but if you write `import(someVariable)` and the bundler cannot statically determine what values that `someVariable` may be, it may fail to bundle necessary files. Support for [variable module specifiers](https://vite.dev/guide/features.html#dynamic-import) varies between tools. For a known set of modules, explicitly listing the imports makes the dependencies clear:

```js example-bad
// A bundler may need to bundle everything under shapes/
const shape = await import(`./shapes/${shapeName}.js`);
```

```js
// The bundler knows exactly which files to bundle
const loaders = {
  square: () => import("./shapes/square.js"),
  circle: () => import("./shapes/circle.js"),
};

const shape = await loaders[shapeName]();
```

Bundlers can also leave dependencies _external_, meaning their code is not included in the bundle. Vite's [library mode](https://vite.dev/guide/build.html#library-mode) supports this when publishing a library whose consumers should provide a dependency themselves. If the output still contains `import` or `require()` calls for these dependencies, the runtime must be able to resolve them. A bare specifier left in browser ESM output still needs an import map, even if the bundler could locate that package during the build.

### Non-JavaScript resources

Bundlers can interpret imports of non-JavaScript resources using built-in features or plugins. For example, Vite supports [CSS imports](https://vite.dev/guide/features.html#css) and [static asset imports](https://vite.dev/guide/assets.html#importing-asset-as-url):

```js
import "./styles.css";
import logoURL from "./logo.svg";
```

Vite inserts the CSS into the page during development and normally extracts it into a separate stylesheet during the production build. The SVG import returns an asset URL, which may point to an emitted image or be an inlined data URL. These meanings come from the build tool (and you can create custom `module specifier → module object` mapping logic using custom loaders). They are not equivalent to native [non-JavaScript module imports](/en-US/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#loading_non-javascript_resources), which use import attributes and follow the runtime's module type rules.

Check your bundler's documentation when relying on its module resolution or resource handling. An import that works through a bundler may need different configuration when loaded directly by a runtime. For code intended to run directly in browsers, see [Using modules on the web](/en-US/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web).

## How TypeScript understands modules

[TypeScript](https://www.typescriptlang.org/docs/handbook/modules/theory.html) analyzes modules to check the types of imported values and, when compiling, produce JavaScript suitable for the runtime or bundler. To do this, it needs to understand both your TypeScript source and how the resulting JavaScript will be loaded. Its `module` and `moduleResolution` compiler options describe that environment's module format and resolution rules. These settings matter even when another tool produces the JavaScript and TypeScript only checks types.

In TypeScript, a file is either a script or a module (just like [JavaScript itself](/en-US/docs/Web/JavaScript/Guide/Modules#whats_a_module), but this "module" is not necessarily an "ES module"; it may be CJS, etc.). The main difference is that variable declarations in scripts are automatically visible throughout the project, while modules create their own scope. By default, any file with a top-level `import` or `export` is a module, so sometimes adding a useless `export {}` can mark the file as a module and stop its variable declarations from becoming global. The [`moduleDetection`](https://www.typescriptlang.org/tsconfig/moduleDetection.html) option can force all non-declaration files to be treated as modules.

### The module format

Files understood to be "modules" in the TypeScript sense may still be compiled to the various [formats](#other_module_formats), most notably ESM and CJS. (AMD and UMD are less relevant to developers these days because you just let the bundler "do the right thing" on the TypeScript source code directly, and few people expect transpilers like `tsc` to do that.)

As mentioned before, `tsc` can be used as a transpiler to compile ESM syntax into CJS. It now recommends the [`verbatimModuleSyntax`](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax) option, which makes the module syntax easier to reason about (for example, you don't need to worry about what `import x from "mod"` will be compiled into). All subsequent documentation will assume it is turned on.

TypeScript provides two sets of module syntaxes. There's the familiar ES syntax {{jsxref("Statements/import", "import")}} and {{jsxref("Statements/export", "export")}} (which deal with individual named or default exports), and there's the special CJS syntax (which deals with the whole `module.exports` object).

```ts
import x = require("mod");
// Compiled to: const x = require("mod");

export = x;
// Compiled to: module.exports = x;
```

With `verbatimModuleSyntax`, TypeScript reports an error if ES import/export syntax would be compiled to CJS. Under Node.js module options, the `import = require()` syntax works in both CJS and ESM (generating a `createRequire` call in the latter case), while `export =` only works in CJS.

You declare the module type with the [`module`](https://www.typescriptlang.org/tsconfig/#module) option. While there are many options (comparable to a transpiler), you probably want to use one of:

- `"nodenext"`, if you are outputting code to run on Node.js-compatible runtimes. It uses the [Node.js detection algorithm](/en-US/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms#using_modules_in_node.js), like `.mts` (the `.ts` version of `.mjs`) and `"type": "module"`, for selecting between CJS and ESM. There are also versioned values like `"node16"`, but only use them if you specifically want to avoid new behavior. TypeScript also [recommends](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html#im-writing-es-modules-for-the-browser-with-no-bundler-or-module-compiler) this option for outputting code to run natively on browsers, because it recommends `"moduleResolution": "nodenext"` which requires this setting.
- `"preserve"`, if you are outputting code to run in bundlers or Bun. It outputs the module format as-is, with `import = require()` and `export =` compiled to CJS.
- `"esnext"`, if you want to enforce ESM syntax without transformations. It only outputs ESM, with `import = require()` and `export =` generating errors. There are also versioned values like `"es2020"`, but only use them if you specifically want to avoid new behavior.

The `module` option also decides if you can access `import.meta`, if you can use top-level `await`, if you can import other ES modules, etc. Just setting this option probably gives you sensible defaults in typical environments for most other options.

### Specifier resolution

TypeScript re-implements the specifier resolution logic of whatever environment the generated JavaScript code is intended to run in, so you need to declare which resolver to use with [`moduleResolution`](https://www.typescriptlang.org/tsconfig/#moduleResolution). Currently the only recommended values are:

- `"nodenext"`, if you are outputting code to run on Node.js-compatible runtimes. It uses the [Node.js resolution algorithm](/en-US/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms#using_modules_in_node.js); there are also versioned values like `"node16"`, but only use them if you specifically want to avoid new behavior.
- `"bundler"`, if you are outputting code to run in bundlers or Bun. It uses the [resolution algorithm that most bundlers can agree on](/en-US/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms#module_resolution), which is essentially just node resolution without requiring explicit extensions.

For code intended to run directly in browsers, TypeScript has no dedicated browser resolver. Its [recommended approximation](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html#im-writing-es-modules-for-the-browser-with-no-bundler-or-module-compiler) uses `"nodenext"` for `moduleResolution`, which simultaneously requires `module: "nodenext"` too. But both `"nodenext"` and `"bundler"` are supersets of what the browser is capable of, so you must be careful not to use Node-specific things that browsers don't natively understand, like package imports or importing CommonJS.

TypeScript does not read your bundler configuration or import maps to reproduce custom specifier resolution rules you may have. You may use the [`paths`](https://www.typescriptlang.org/tsconfig/#paths) option; for the Vite alias shown above, make sure TypeScript and Vite both resolve `@shapes/square` to the same module. It also has other [configuration options](https://www.typescriptlang.org/tsconfig/#Modules_6244), all with the goal of making sure TypeScript can reproduce how specifiers are resolved at runtime.

Like transpilers, by default the specifiers are taken at face value without any rewriting—path aliases using `paths` are not rewritten (so only use this option if your path aliases are natively understood by the downstream consumer), and you still use `.js` to refer to a `.ts` file because that's the actual file you import at runtime.

```ts
// -- src/main.ts --
import { area } from "./square.js";
// TypeScript can check this import against src/square.ts
// The emitted JavaScript still imports ./square.js
```

In fact, by default, it errors on `.ts` imports because they will likely not work when you compile to JavaScript. If you don't need to compile at all and intend to run TypeScript natively (either through a bundler or through a runtime that supports TypeScript), you can turn on [`allowImportingTsExtensions`](https://www.typescriptlang.org/tsconfig/#allowImportingTsExtensions) to silence these errors. There's also the [`rewriteRelativeImportExtensions`](https://www.typescriptlang.org/tsconfig/#rewriteRelativeImportExtensions) option to opt into rewriting relative imports ending in `.ts`, `.tsx`, `.mts`, or `.cts` to their JavaScript extensions during emission. This option is generally only used if you intend to simultaneously run TypeScript natively and generate executable JavaScript.

### Type import/export

Within a module, TypeScript lets you import and export types as well as JavaScript values. The [`import type` and `export type`](https://www.typescriptlang.org/docs/handbook/2/modules.html#typescript-specific-es-module-syntax) forms are erased from the emitted JavaScript. You can also mark individual bindings with `type` when importing types and values together, so that only those bindings are erased.

```ts
import { area, type Shape } from "./shapes.js"; // Only "type Shape" removed
import type { Square } from "./square.js"; // Entire declaration removed
```

`import { type Shape }` leaves an `import {} from "./shapes.js"` declaration, which still loads and evaluates the module.

### Module declarations

When you import things from local files, TypeScript reads the target module's TypeScript source directly to understand their types. This is costly. For published libraries, TypeScript recommends generating _declaration files_ with the `.d.ts` extension, so it does not need to read the whole source file. The `.d.ts` file is usually produced by `tsc` and contains type declarations rather than executable implementations.

```ts
// -- src/square.ts --
export function area(side: number) {
  return side ** 2;
}
```

```ts
// -- dist/square.d.ts --
export function area(side: number): number;
```

Even if your project is JavaScript, you should still consider publishing a hand-written `.d.ts` file so your users can get the correct type definitions. Generally, TypeScript is able to automatically find the right `.d.ts` file when you import the package source code. Read the [TypeScript declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) guide to find out more.

## "Isomorphic" modules

The introduction of modules encourages the JavaScript ecosystem to distribute and reuse code in a modular fashion. However, that doesn't necessarily mean a piece of JavaScript code can run in every environment. Suppose you discovered a module that generates SHA hashes of your user's password. Can you use it in the browser front end? Can you use it on your Node.js server? The answer is: it depends.

Modules still have access to global variables, as demonstrated previously. If the module references globals like `window`, it can run in the browser, but will throw an error in your Node.js server, because `window` is not available there. Similarly, if the code requires access to `process` to be functional, it can only be used in Node.js.

In order to maximize the reusability of a module, it is often advised to make the code "isomorphic" — that is, it exhibits the same behavior in every runtime. This is commonly achieved in three ways:

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

- Use a polyfill to provide a fallback for missing features. For example, if you want to use the [`DOMParser`](/en-US/docs/Web/API/DOMParser) API to parse XML, which is available in browsers but not natively in Node.js, you can use a similar API, like the one provided by [`@xmldom/xmldom`](https://github.com/xmldom/xmldom). You can do so conditionally through dynamic imports:

  ```js
  // myModule.js
  if (typeof DOMParser === "undefined") {
    // Use @xmldom/xmldom when no native DOMParser is available
    globalThis.DOMParser = (await import("@xmldom/xmldom")).DOMParser;
  }
  // …
  ```

  The [`globalThis`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) variable is a global object that is available in every environment and is useful if you want to read or create global variables within modules.

These practices are not unique to modules. Still, with the trend of code reusability and modularization, you are encouraged to make your code cross-platform so that it can be enjoyed by as many people as possible. Runtimes like Node.js are also actively implementing web APIs where possible to improve interoperability with the web.

## See also

- [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules)
- [Using modules on the web](/en-US/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web)
- [Understanding the module graph](/en-US/docs/Web/JavaScript/Guide/Modules/Module_graph)
- [CommonJS module specification](https://wiki.commonjs.org/wiki/Modules/1.1.1)
- [AMD specification](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)
- [UMD patterns](https://github.com/umdjs/umd)
- [RequireJS API](https://requirejs.org/docs/api.html)
- Node.js: [ECMAScript modules](https://nodejs.org/api/esm.html), [CommonJS modules](https://nodejs.org/api/modules.html), and [packages](https://nodejs.org/api/packages.html)
- [Modules in Deno](https://docs.deno.com/runtime/fundamentals/modules/)
- [Module resolution in Bun](https://bun.sh/docs/runtime/module-resolution)
- [CommonJS module transformation in Babel](https://babeljs.io/docs/babel-plugin-transform-modules-commonjs)
- [Module configuration in SWC](https://swc.rs/docs/configuration/modules)
- TypeScript: [Modules theory](https://www.typescriptlang.org/docs/handbook/modules/theory.html), [module reference](https://www.typescriptlang.org/docs/handbook/modules/reference.html), and [choosing compiler options](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html)
- Vite: [Dependency pre-bundling](https://vite.dev/guide/dep-pre-bundling.html), [features](https://vite.dev/guide/features.html), and [library mode](https://vite.dev/guide/build.html#library-mode)
