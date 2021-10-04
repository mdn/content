---
title: WebAssembly.CompileError() constructor
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError/CompileError
tags:
  - Constructor
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.CompileError.CompileError
---

{{JSRef}}

The **`WebAssembly.CompileError()`** constructor creates a new
WebAssembly `CompileError` object, which indicates an error during
WebAssembly decoding or validation.

## Syntax

```js
new WebAssembly.CompileError();
new WebAssembly.CompileError(message);
new WebAssembly.CompileError(message, fileName);
new WebAssembly.CompileError(message, fileName, lineNumber);
```

### Parameters

- `message` {{optional_inline}}
  - : Human-readable description of the error.
- `fileName` {{optional_inline}}
  - : The name of the file containing the code that caused the exception.
- `lineNumber` {{optional_inline}}
  - : The line number of the code that caused the exception.

## Examples

### Creating a new CompileError instance

The following snippet creates a new `CompileError` instance, and logs its
details to the console:

```js
try {
  throw new WebAssembly.CompileError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof CompileError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "CompileError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // returns the location where the code was run
}
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
