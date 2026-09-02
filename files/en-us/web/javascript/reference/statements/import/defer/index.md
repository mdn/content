---
title: import defer
slug: Web/JavaScript/Reference/Statements/import/defer
page-type: javascript-language-feature
browser-compat: javascript.statements.import.defer
sidebar: jssidebar
---

The **`import defer`** statement behaves like regular [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) declarations, but it can only import a module using the namespace import syntax, and results in a [deferred module namespace object](/en-US/docs/Web/JavaScript/Reference/Statements/import/defer#deferred_module_namespace_object). The module and its dependencies are fetched and linked up front, but their synchronous evaluation is deferred until the namespace's properties are accessed. Modules that use [top-level `await`](#top-level_await) are evaluated eagerly.

## Syntax

```js-nolint
import defer * as name from "module-name";
```

- `name`
  - : Name that will refer to the deferred module namespace object. Must be a valid JavaScript identifier.
- `module-name`
  - : The module to import from. Handled the same way as the [`module-name`](/en-US/docs/Web/JavaScript/Reference/Statements/import#module-name) in regular `import` declarations.

[Import attributes](/en-US/docs/Web/JavaScript/Reference/Statements/import/with) are also supported, using a `with` clause after the module specifier.

`defer` is not a reserved word. For example, `import defer from "./module.js"` is still a regular default import whose local binding is named `defer`.

## Description

By default, the `import` declaration performs many tasks at once: resolving the module specifier, fetching the module source code, parsing (potentially discovering transitive dependencies), linking, and evaluating it. This form of eager evaluation is not always desirable: it may cause slower startup, the environment for its evaluation may not be fully prepared, or the module may not need to be evaluated at all.

The _import phase modifier_ allows the module import process to only be executed until a certain phase. By adding `defer` after `import`, the source code is linked but remains unevaluated, provided that it can be evaluated synchronously (i.e., does not use top-level `await`). Accessing an export through the deferred namespace synchronously evaluates the module and any dependencies that need to be evaluated before it. The access returns the export's value after evaluation finishes. This executes the module's top-level code, not just the code needed to initialize the requested export. Dependencies imported with their own `import defer` declarations can remain deferred.

By ensuring that the paused subgraph can be evaluated synchronously, `import defer` can be "dropped in" with almost no code changes to the places that use the module:

```js
// Before:
import * as ts from "typescript";
// The full typescript module graph evaluates here

function compileFile(path) {
  ts.compile(path);
}

// After:
import defer * as ts from "typescript";
// No code is evaluated; potentially faster startup

function compileFile(path) {
  // The typescript module graph evaluates when `ts.createProgram`
  // is accessed, i.e., when `compileFile` is called.
  // If `compileFile` is never called, then the module graph
  // is never evaluated.
  const program = ts.createProgram([path]);
}
```

> [!WARNING]
> Deferring an import changes when its side effects occur. Do not defer modules whose side effects are needed before the rest of your code runs, such as modules that install polyfills.

Unlike [`import source`](/en-US/docs/Web/JavaScript/Reference/Statements/import/source), a deferred module is still linked upfront. Linking is definitely asynchronous because it involves fetching dependencies, so the module source object obtained by `import source` must be evaluated asynchronously.

Unlike [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import), the deferred module is still fetched, parsed, and linked upfront, again avoiding unnecessary async coloring. `import defer` also enjoys most benefits of a static declaration, such as better static analysis.

The modifier applies to an import, not to the module itself. If another part of the application imports the same module without `defer`, the module is evaluated as usual. Both forms share the same module state, and the module's code executes at most once. Changing the import phase does not create a separate module in the cache.

```js
import defer * as ts from "typescript";
// No code is evaluated
import * as ts2 from "typescript";
// The full typescript module graph evaluates here

function compileFile(path) {
  // Accessing `ts.createProgram` no longer evaluates the subgraph
  // because it's already evaluated.
  const program = ts.createProgram([path]);
}
```

In contrast, an [import attribute](/en-US/docs/Web/JavaScript/Reference/Statements/import/with) causes the same string specifier to be seen as a new module. For example, if these two statements coexist:

```js
import * as ts from "typescript";
// A hypothetical host feature
import * as ts2 from "typescript" with { type: "deferred" };
```

The two imports are considered to be from different modules that happen to share the same string specifier (on the web, they will be requested with different HTTP headers). This means that the two modules will be loaded and cached separately, and will not share any state.

### Deferred module namespace object

A deferred module namespace object behaves much like a regular [module namespace object](/en-US/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object): it has a `null` prototype, is non-extensible and sealed, and exposes read-only live bindings to the module's exports. Its string keys are enumerable and sorted in lexicographic order. The default export is available as the property named `default`.

There are three differences from a regular namespace:

- Operations that inspect exports can trigger evaluation and throw evaluation errors, as described below.
- Its [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is `"Deferred Module"` instead of `"Module"`. This remains the case after evaluation.
- It does not expose an export named `then`, even after evaluation. Reading `namespace.then` always returns `undefined`. This prevents promise resolution from treating the namespace as a [thenable](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) and triggering evaluation. To access such an export, use a regular import.

The deferred and regular namespaces for the same module are distinct objects, even after evaluation. Repeated deferred imports of the same module, whether static or dynamic, share the same deferred namespace object.

In order to implement the behavior of "triggering module evaluation when keys are accessed", the deferred module namespace is essentially a {{jsxref("Proxy")}} that intercepts the following actions to trigger module evaluation:

- [`defineProperty()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) for any string key other than `then`: for example, `Object.defineProperty(namespace, "value", {})`.

  > [!NOTE]
  > Because the module namespace object is non-extensible and sealed, you can't meaningfully add or change any property descriptor, including its value. Nevertheless, even if the operation fails, evaluation is still triggered.
  >
  > The proxy does not intercept [`set()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set). Setting properties like `namespace.value = 1;` always fails.

- [`deleteProperty()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) for any string key other than `then`: for example, `delete namespace.value`.

  > [!NOTE]
  > You cannot actually delete any property that the namespace has. Nevertheless, even if the operation fails, evaluation is still triggered.

- [`get()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get) and [`getOwnPropertyDescriptor()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor) for any string key other than `then`: for example, `namespace.value`, `namespace["missing"]`, `const { default } = namespace`, `Object.getOwnPropertyDescriptor(namespace, "value")`.

  > [!NOTE]
  > Destructuring an export at the top level therefore defeats the deferral of that module.

- [`has()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has) for any string key other than `then`: for example, `"value" in namespace`, `Object.hasOwn(namespace, "missing")`.
- [`ownKeys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys): for example, `Object.keys(namespace)`, `for (const key in namespace) {}`.

Merely referring to the namespace, assigning it to another variable, comparing its identity, or passing it to a function does not trigger evaluation. Neither does reading `then` or a symbol-keyed property, such as `namespace[Symbol.toStringTag]`. Calling {{jsxref("Object.getPrototypeOf()")}} or {{jsxref("Object.isExtensible()")}} does not trigger evaluation either. However, {{jsxref("Object.isSealed()")}} and {{jsxref("Object.isFrozen()")}} enumerate keys and therefore do trigger evaluation.

### Top-level await

Reading a namespace property is synchronous, so it cannot wait for asynchronous module evaluation. Modules that contain [top-level `await`](/en-US/docs/Web/JavaScript/Guide/Modules#top_level_await) are evaluated eagerly, along with the dependencies required to evaluate them. This includes modules reached through further deferred imports. The importing module waits for this asynchronous evaluation before running its own body.

If the directly imported module contains top-level `await`, its evaluation is not deferred. If only some of its dependencies contain top-level `await`, those dependencies are evaluated eagerly, but the synchronous parts of the graph that are not required for their evaluation can remain deferred. See [Deferring a module with an asynchronous dependency](#deferring_a_module_with_an_asynchronous_dependency).

### Errors

Loading, parsing, and linking errors are not deferred. For example, a missing module, a syntax error in a dependency, or an unresolved named import prevents the importing module from running, even if the deferred namespace is never accessed. Errors from eagerly evaluated asynchronous dependencies also prevent the importing module from running.

Errors thrown during deferred evaluation are thrown synchronously by the operation that triggers evaluation. You can catch them with [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) around that operation. The error is cached: subsequent operations that trigger evaluation throw the same error instead of retrying the module's code. This also applies if another import previously caused the module's evaluation to fail.

An operation that triggers evaluation throws a {{jsxref("TypeError")}} if the module or its dependencies are not ready for synchronous evaluation. This can happen with [cyclic imports](/en-US/docs/Web/JavaScript/Guide/Modules#cyclic_imports), when an access would require a module that is still being evaluated. An `import defer` declaration does not make every cyclic dependency safe to access during initialization.

## Examples

### Evaluating a module on first use

The following module initializes a lookup table when its top-level code runs:

```js
// -- squares.js --
console.log("Initializing squares");
const squares = Array.from({ length: 10000 }, (_, index) => index ** 2);

export function getSquare(index) {
  return squares[index];
}
```

The importing module can expose a synchronous function without initializing the table until it is needed:

```js
// -- main.js --
import defer * as squares from "./squares.js";

console.log("Ready");

export function showSquare(index) {
  console.log(squares.getSquare(index));
}

showSquare(3); // Logs "Initializing squares", then 9
showSquare(4); // Logs 16; initialization is not repeated
```

`"Ready"` is logged before `"Initializing squares"`. If `showSquare()` is never called and no other import causes `squares.js` to be evaluated, the lookup table is never initialized.

### Deferring a module with an asynchronous dependency

In this example, `report.js` (which itself is synchronous) depends on both an asynchronous configuration module and a synchronous formatting module.

```js
// -- config.js --
export const locale = await Promise.resolve("en-US");
console.log("Configuration ready");
```

```js
// -- format.js --
console.log("Formatting module evaluated");

export function format(value, locale) {
  return new Intl.NumberFormat(locale).format(value);
}
```

```js
// -- report.js --
import { locale } from "./config.js";
import { format } from "./format.js";

console.log("Report module evaluated");

export function createReport(value) {
  return format(value, locale);
}
```

```js
// -- main.js --
import defer * as report from "./report.js";

console.log("Main module evaluated");
console.log(report.createReport(1000));
```

The output is:

```plain
Configuration ready
Main module evaluated
Formatting module evaluated
Report module evaluated
1,000
```

`config.js` is evaluated before `main.js` because it contains top-level `await`. Neither `format.js` nor `report.js` needs to run to evaluate `config.js`, so their evaluation is deferred until `report.createReport` is accessed.

### Catching evaluation errors

```js
// -- broken.js --
export const value = 1;
throw new Error("Initialization failed");
```

```js
// -- main.js --
import defer * as broken from "./broken.js";

for (let attempt = 0; attempt < 2; attempt++) {
  try {
    console.log(broken.value);
  } catch (error) {
    console.log(error.message); // "Initialization failed" on both attempts
  }
}
```

Even though `value` was initialized before the exception was thrown, accessing it through the deferred namespace throws the cached evaluation error.

### Exporting a deferred namespace

There is no `export defer` syntax (see [`export`](/en-US/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating) for more information). You can import a deferred namespace and then export its binding without triggering evaluation:

```js
// -- features.js --
import defer * as report from "./report.js";

export { report };
```

```js
// -- main.js --
import { report } from "./features.js";

// Accessing an export through report triggers its deferred evaluation.
console.log(report.createReport(1000));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules) guide
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/import/defer", "import.defer()")}}
