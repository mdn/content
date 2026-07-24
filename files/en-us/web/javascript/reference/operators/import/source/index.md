---
title: import.source()
slug: Web/JavaScript/Reference/Operators/import/source
page-type: javascript-language-feature
browser-compat: javascript.operators.import.source
---

{{jsSidebar("Statements")}}

The **`import.source()`** syntax behaves like regular [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import) syntax, but only obtains an object representing the module's unevaluated source code. The module can be imperatively evaluated later, such as by using [dynamic import](/en-US/docs/Web/JavaScript/Reference/Operators/import) or [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).

To use `import.source()`, the target module must be of a kind that supports source phase imports. Currently, only WebAssembly modules support source phase imports, and result in [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) objects. JavaScript module source objects will be added by the [ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) proposal.

For more information about the semantics of source phase imports, see the [`import source`](/en-US/docs/Web/JavaScript/Reference/Statements/import/source) declaration form.

## Syntax

```js-nolint
import.source(moduleName)
import.source(moduleName, options)
```

### Parameters

See [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import#parameters).

### Return value

Returns a promise. The rejection conditions are largely similar to [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import#return_value), except that `import.source()` does not throw exceptions related to module evaluation, because it does not evaluate the module.

If the referenced module is loaded successfully, fulfills with an {{jsxref("AbstractModuleSource")}} object representing the module's unevaluated source code.

## Examples

TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Operators/import", "import()")}}
- {{jsxref("Statements/import/source", "import source")}}
- {{jsxref("AbstractModuleSource")}}
