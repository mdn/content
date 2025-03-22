---
title: WebAssembly.RuntimeError() constructor
slug: WebAssembly/Reference/JavaScript_interface/RuntimeError/RuntimeError
page-type: webassembly-constructor
browser-compat: webassembly.api.RuntimeError.RuntimeError
sidebar: webassemblysidebar
---

The **`WebAssembly.RuntimeError()`** constructor creates a new
WebAssembly `RuntimeError` object — the type that is thrown whenever
WebAssembly specifies a [trap](https://webassembly.github.io/simd/core/intro/overview.html#trap).

## Syntax

```js-nolint
new WebAssembly.RuntimeError()
new WebAssembly.RuntimeError(message)
new WebAssembly.RuntimeError(message, options)
new WebAssembly.RuntimeError(message, fileName)
new WebAssembly.RuntimeError(message, fileName, lineNumber)
```

### Parameters

- `message` {{optional_inline}}
  - : Human-readable description of the error.
- `options` {{optional_inline}}
  - : An object that has the following properties:
    - `cause` {{optional_inline}}
      - : A property indicating the specific cause of the error.
        When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : The name of the file containing the code that caused the exception.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : The line number of the code that caused the exception.

## Examples

### Creating a new RuntimeError instance

The following snippet creates a new `RuntimeError` instance, and logs its
details to the console:

```js
try {
  throw new WebAssembly.RuntimeError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof WebAssembly.RuntimeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "RuntimeError"
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
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
