---
title: WebAssembly.SuspendError() constructor
slug: WebAssembly/Reference/JavaScript_interface/SuspendError/SuspendError
page-type: webassembly-constructor
browser-compat: webassembly.api.SuspendError.SuspendError
sidebar: webassemblysidebar
---

The **`WebAssembly.SuspendError()`** constructor creates a new
WebAssembly `SuspendError` object, which indicates an error during
WebAssembly [function suspension](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Suspending).

## Syntax

```js-nolint
new WebAssembly.SuspendError()
new WebAssembly.SuspendError(message)
new WebAssembly.SuspendError(message, options)
new WebAssembly.SuspendError(message, fileName)
new WebAssembly.SuspendError(message, fileName, lineNumber)
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

### Creating a new SuspendError instance

The following snippet creates a new `SuspendError` instance, and logs its
details to the console:

```js
try {
  throw new WebAssembly.SuspendError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof SuspendError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "SuspendError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // The location where the code was run
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`WebAssembly.Suspending`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Suspending)
- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
