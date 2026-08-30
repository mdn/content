---
title: WebAssembly.SuspendError
slug: WebAssembly/Reference/JavaScript_interface/SuspendError
page-type: webassembly-interface
browser-compat: webassembly.api.SuspendError
sidebar: webassemblysidebar
---

The **`WebAssembly.SuspendError`** object indicates an error during WebAssembly [function suspension](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Suspending).

## Constructor

- [`WebAssembly.SuspendError()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/SuspendError/SuspendError)
  - : Creates a new `WebAssembly.SuspendError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "WebAssembly.SuspendError.prototype.message")}}
  - : Error message. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "WebAssembly.SuspendError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "WebAssembly.SuspendError.prototype.cause")}}
  - : Error cause. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.SuspendError.prototype.fileName")}} {{non-standard_inline}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.SuspendError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.SuspendError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.SuspendError.prototype.stack")}} {{non-standard_inline}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## Instance methods

- {{jsxref("Error.prototype.toString", "WebAssembly.SuspendError.prototype.toString()")}}
  - : Returns a string representing the specified `Error` object. Inherited from {{jsxref("Error")}}.

## Examples

### Creating a new SuspendError instance

The following snippet creates a new `SuspendError` instance, and logs its details to the console:

```js
try {
  throw new WebAssembly.SuspendError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof WebAssembly.SuspendError); // true
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
