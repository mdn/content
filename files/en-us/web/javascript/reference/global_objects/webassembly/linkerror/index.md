---
title: WebAssembly.LinkError
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError
tags:
  - API
  - Class
  - JavaScript
  - LinkError
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.LinkError
---
{{JSRef}}

The **`WebAssembly.LinkError`** object indicates an error during module instantiation (besides [traps](https://webassembly.org/docs/semantics/#traps) from the start function).

## Constructor

- [`WebAssembly.LinkError()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError/LinkError)
  - : Creates a new `WebAssembly.LinkError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "WebAssembly.LinkError.prototype.message")}}
  - : Error message. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "WebAssembly.LinkError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.LinkError.prototype.fileName")}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.LinkError.prototype.lineNumber")}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.LinkError.prototype.columnNumber")}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.LinkError.prototype.stack")}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## Instance methods

- {{jsxref("Error.prototype.toSource", "WebAssembly.LinkError.prototype.toSource()")}}
  - : Returns code that could eval to the same error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.toString", "WebAssembly.LinkError.prototype.toString()")}}
  - : Returns a string representing the specified `Error` object.. Inherited from {{jsxref("Error")}}.

## Examples

### Creating a new LinkError instance

The following snippet creates a new `LinkError` instance, and logs its details to the console:

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
