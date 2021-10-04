---
title: WebAssembly.Module.imports()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/imports
tags:
  - API
  - JavaScript
  - Method
  - Module
  - Object
  - Reference
  - WebAssembly
  - imports
browser-compat: javascript.builtins.WebAssembly.Module.imports
---

{{JSRef}}

The **`WebAssembly.imports()`** function returns an array
containing descriptions of all the declared imports of the given `Module`.

## Syntax

```js
WebAssembly.Module.imports(module);
```

### Parameters

- _module_
  - : A {{jsxref("WebAssembly.Module")}} object.

### Return value

An array containing objects representing the imported functions of the given module.

### Exceptions

If module is not a {{jsxref("WebAssembly.Module")}} object instance, a
{{jsxref("TypeError")}} is thrown.

## Examples

### Using imports

The following example (see imports.html [source
code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/imports.html); [see it
live also](https://mdn.github.io/webassembly-examples/js-api-examples/imports.html)) compiles the loaded simple.wasm module.  This module is then queried
for its imports.

```js
WebAssembly.compileStreaming(fetch("simple.wasm")).then(function (mod) {
  var imports = WebAssembly.Module.imports(mod);
  console.log(imports[0]);
});
```

The output looks like this:

```js
{ module: "imports", name: "imported_func", kind: "function" }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly
  JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
