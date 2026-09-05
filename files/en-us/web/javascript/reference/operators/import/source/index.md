---
title: import.source()
slug: Web/JavaScript/Reference/Operators/import/source
page-type: javascript-language-feature
browser-compat: javascript.operators.import.source
sidebar: jssidebar
---

The **`import.source()`** syntax behaves like regular [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import) syntax, but only obtains an object representing the module's compiled source code. The module is fetched and compiled, but its dependencies are not loaded and it is not linked or evaluated. It can be imperatively evaluated later, such as by using [dynamic import](/en-US/docs/Web/JavaScript/Reference/Operators/import) or [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).

To use `import.source()`, the target module must be of a kind that supports source phase imports. Currently, only WebAssembly modules support source phase imports, and result in [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) objects. JavaScript module source objects will be added by the [ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) proposal.

For more information about the semantics of source phase imports, see the [`import source`](/en-US/docs/Web/JavaScript/Reference/Statements/import/source) declaration form.

## Syntax

```js-nolint
import.source(moduleName)
import.source(moduleName, options)
```

`import.source()` is special syntax (a "meta property"), not a method on an `import` object.

### Parameters

See [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import#parameters).

### Return value

Returns a promise that fulfills with an {{jsxref("AbstractModuleSource")}} object representing the module's compiled source after the module is loaded and compiled successfully.

Like regular [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import#return_value), the promise rejects if the module cannot be loaded or parsed. It also rejects with a {{jsxref("SyntaxError")}} if the module type does not support source phase imports. It does not load dependencies, link, or evaluate the module, so errors from those later steps are not reported by this promise.

## Examples

### Using import.source()

```js
const myModuleSource = await import.source("./my-module.wasm");

const instance = await WebAssembly.instantiate(myModuleSource, {
  env: { log: console.log },
});
const { exports } = instance;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules) guide
- {{jsxref("Operators/import", "import()")}}
- {{jsxref("Statements/import/source", "import source")}}
- {{jsxref("AbstractModuleSource")}}
