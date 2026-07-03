---
title: import source
slug: Web/JavaScript/Reference/Statements/import/source
page-type: javascript-language-feature
browser-compat: javascript.statements.import.source
---

{{jsSidebar("Statements")}}

The **`import source`** statement behaves like regular [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) statements, but it can only import a module using the default import syntax, and results in an object representing the module's unevaluated source code. The module can be imperatively evaluated later using a method provided by the source code object.

To use `import source`, the target module has to support source phase imports. Currently, only WebAssembly modules support source phase imports, which result in [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) objects. JavaScript module source objects will be added by the [ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) proposal.

## Syntax

```js-nolint
import source x from "module-name";
```

- `x`
  - : Name that will refer to the module source object. Must be a valid JavaScript identifier.
- `module-name`
  - : The module to import from. Handled the same way as the [`module-name`](/en-US/docs/Web/JavaScript/Reference/Statements/import#module-name) in regular `import` statements.

[Import attributes](/en-US/docs/Web/JavaScript/Reference/Statements/import/with) are also supported in `import source` statements, and are handled the same way as in regular `import` statements.

## Description

## Examples

### Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/import/source", "import.source()")}}
- {{jsxref("AbstractModuleSource")}}
