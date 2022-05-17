---
title: WebAssembly.RuntimeError
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError
tags:
  - API
  - Class
  - JavaScript
  - Reference
  - RuntimeError
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.RuntimeError
---
{{JSRef}}

The **`WebAssembly.RuntimeError`** object is the error type that is thrown whenever WebAssembly specifies a [trap](https://webassembly.github.io/spec/core/intro/overview.html#trap).

## Constructor

- [`WebAssembly.RuntimeError()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError/RuntimeError)
  - : Creates a new `WebAssembly.RuntimeError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "WebAssembly.RuntimeError.prototype.message")}}
  - : Error message. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "WebAssembly.RuntimeError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.RuntimeError.prototype.fileName")}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.RuntimeError.prototype.lineNumber")}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.RuntimeError.prototype.columnNumber")}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.RuntimeError.prototype.stack")}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## Instance methods

- {{jsxref("Error.prototype.toSource", "WebAssembly.RuntimeError.prototype.toSource()")}}
  - : Returns code that could eval to the same error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.toString", "WebAssembly.RuntimeError.prototype.toString()")}}
  - : Returns a string representing the specified `Error` object.. Inherited from {{jsxref("Error")}}.

## Examples

### Creating a new RuntimeError instance

The following snippet creates a new `RuntimeError` instance, and logs its details to the console:

```js
try {
  throw new WebAssembly.RuntimeError('Hello', 'someFile', 10);
} catch (e) {
  console.log(e instanceof WebAssembly.RuntimeError); // true
  console.log(e.message);                             // "Hello"
  console.log(e.name);                                // "RuntimeError"
  console.log(e.fileName);                            // "someFile"
  console.log(e.lineNumber);                          // 10
  console.log(e.columnNumber);                        // 0
  console.log(e.stack);                               // returns the location where the code was run
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
