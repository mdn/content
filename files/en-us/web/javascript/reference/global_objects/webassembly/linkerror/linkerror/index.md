---
title: WebAssembly.LinkError() constructor
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError/LinkError
tags:
  - Constructor
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.LinkError.LinkError
---
{{JSRef}}

The **`WebAssembly.LinkError()`** constructor creates a new
WebAssembly `LinkError` object, which indicates an error during module
instantiation (besides [traps](https://webassembly.github.io/simd/core/intro/overview.html#trap)
from the start function).

## Syntax

```js
new WebAssembly.LinkError()
new WebAssembly.LinkError(message)
new WebAssembly.LinkError(message, options)
new WebAssembly.LinkError(message, fileName)
new WebAssembly.LinkError(message, fileName, lineNumber)
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

### Creating a new LinkError instance

The following snippet creates a new `LinkError` instance, and logs its
details to the console:

```js
try {
  throw new WebAssembly.LinkError('Hello', 'someFile', 10);
} catch (e) {
  console.log(e instanceof LinkError); // true
  console.log(e.message);                 // "Hello"
  console.log(e.name);                    // "LinkError"
  console.log(e.fileName);                // "someFile"
  console.log(e.lineNumber);              // 10
  console.log(e.columnNumber);            // 0
  console.log(e.stack);                   // returns the location where the code was run
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
