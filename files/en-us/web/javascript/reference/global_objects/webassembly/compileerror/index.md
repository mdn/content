---
title: WebAssembly.CompileError
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError
tags:
  - API
  - Class
  - CompileError
  - JavaScript
  - NativeError
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.CompileError
---
{{JSRef}}

The **`WebAssembly.CompileError`** object indicates an error during WebAssembly decoding or validation.

## Constructor

- [`WebAssembly.CompileError()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError/CompileError)
  - : Creates a new `WebAssembly.CompileError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "WebAssembly.CompileError.prototype.message")}}
  - : Error message. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "WebAssembly.CompileError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.CompileError.prototype.fileName")}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.CompileError.prototype.lineNumber")}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.CompileError.prototype.columnNumber")}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.CompileError.prototype.stack")}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## Instance methods

- {{jsxref("Error.prototype.toSource", "WebAssembly.CompileError.prototype.toSource()")}}
  - : Returns code that could eval to the same error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.toString", "WebAssembly.CompileError.prototype.toString()")}}
  - : Returns a string representing the specified `Error` object.. Inherited from {{jsxref("Error")}}.

## Examples

### Creating a new CompileError instance

The following snippet creates a new `CompileError` instance, and logs its details to the console:

```js
try {
  throw new WebAssembly.CompileError('Hello', 'someFile', 10);
} catch (e) {
  console.log(e instanceof CompileError); // true
  console.log(e.message);                 // "Hello"
  console.log(e.name);                    // "CompileError"
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
