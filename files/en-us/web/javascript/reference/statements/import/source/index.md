---
title: import source
slug: Web/JavaScript/Reference/Statements/import/source
page-type: javascript-language-feature
browser-compat: javascript.statements.import.source
sidebar: jssidebar
---

The **`import source`** declaration behaves like regular [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) declarations, but it can only import a module using the default import syntax, and results in an object representing the module's unevaluated source code. The module can be imperatively evaluated later, such as by using [dynamic import](/en-US/docs/Web/JavaScript/Reference/Operators/import) or [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).

To use `import source`, the target module must be of a kind that supports source phase imports. Currently, only WebAssembly modules support source phase imports, and result in [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) objects. JavaScript module source objects will be added by the [ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) proposal.

## Syntax

```js-nolint
import source x from "module-name";
```

- `x`
  - : Name that will refer to the module source object. Must be a valid JavaScript identifier.
- `module-name`
  - : The module to import from. Handled the same way as the [`module-name`](/en-US/docs/Web/JavaScript/Reference/Statements/import#module-name) in regular `import` declarations.

[Import attributes](/en-US/docs/Web/JavaScript/Reference/Statements/import/with) are also supported, using a `with` clause after the module specifier.

`source` is not a reserved word. For example, `import source from "./module.js"` is still a regular default import whose local binding is named `source`.

## Description

By default, the `import` declaration performs many tasks at once: resolving the module specifier, fetching the module source code, parsing (potentially discovering transitive dependencies), linking, and evaluating it. This form of eager evaluation is not always desirable, especially when the module source code is intended to be evaluated in some other context, such as a worker thread.

The _import phase modifier_ allows the module import process to only be executed until a certain phase. By adding `source` after `import`, the source code is parsed but remains unlinked and unevaluated. For example, for WASM:

```js
import * as namespace from "./my-module.wasm";

// Is equivalent to:

import source myModuleSource from "./my-module.wasm";

const namespace = (await WebAssembly.instantiate(myModuleSource)).exports;
```

For JavaScript (proposed syntax):

```js
import * as namespace from "./my-module.js";

// Is equivalent to:

import source myModuleSource from "./my-module.js";

const namespace = await import(myModuleSource);
```

The object obtained from this import is an instance of a subclass of {{jsxref("AbstractModuleSource")}}. Each module type, such as JavaScript and WASM, defines its own subclass. For WASM, the subclass is [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module).

Traditionally, the only way to run a part of the pipeline was to manually implement the entirety of it. For example, with WASM, you first use [`fetch()`](/en-US/docs/Web/API/Fetch_API) to retrieve the module source code as text, and later compile it using [`WebAssembly.compile()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/compile_static) or [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) into a `WebAssembly.Module` object.

```js
const myModuleSource = await WebAssembly.compileStreaming(
  fetch("./my-module.wasm"),
);
```

This kind of manual workflow is problematic for several reasons:

- It involves too much low-level manipulation which may be inconsistent with the default module loader's behavior, such as caching, HTTP header settings, and module specifier resolution.
- It is imperative, making it difficult to reason about the module's dependencies and their evaluation order, especially for bundlers or other analysis tools.
- Userland evaluation of the raw source code is incompatible with strict [CSP](/en-US/docs/Web/HTTP/Guides/CSP) settings.

Using source phase imports avoids these problems.

Unlike [`import defer`](/en-US/docs/Web/JavaScript/Reference/Statements/import/defer), using source import also defers linking. Linking is definitely asynchronous because it involves fetching dependencies, so the module source object obtained by `import source` must be evaluated asynchronously.

Unlike [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import), the deferred module is still fetched and parsed upfront, again avoiding unnecessary async coloring. `import source` also enjoys most benefits of a static declaration, such as better static analysis.

The modifier applies to an import, not to the module itself. If another part of the application imports the same module without `source`, the module is evaluated as usual. Both forms share the same module state, and the module's code executes at most once. Changing the import phase does not create a separate module in the cache.

```js
import x from "foo";
import source xSource from "foo";

console.log((await import(xSource)) === x); // true
```

> [!NOTE]
> The cached `x` object is only reused if you use `import()`. Using `WebAssembly.compileStreaming()` still causes re-evaluation because it isn't aware of the module cache.

In contrast, an [import attribute](/en-US/docs/Web/JavaScript/Reference/Statements/import/with) causes the same string specifier to be seen as a new module. For example, if these two statements coexist:

```js
import x from "foo";
import xSource from "foo" with { type: "text" };
```

The two imports are considered to be from different modules that happen to share the same string specifier (on the web, they will be requested with different HTTP headers). This means that the two modules will be loaded and cached separately, and will not share any state.

## Examples

TODO

### Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules) guide
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/import/source", "import.source()")}}
- {{jsxref("AbstractModuleSource")}}
