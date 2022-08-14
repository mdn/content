---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
tags:
  - Class
  - JavaScript
  - Object
  - Reference
  - ReferenceError
browser-compat: javascript.builtins.ReferenceError
---
{{JSRef}}

The **`ReferenceError`** object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

`ReferenceError` is a {{Glossary("serializable object")}}, so it can be cloned with {{domxref("structuredClone()")}} or copied between [Workers](/en-US/docs/Web/API/Worker) using {{domxref("Worker.postMessage()", "postMessage()")}}.

## Constructor

- {{jsxref("Global_Objects/ReferenceError/ReferenceError", "ReferenceError()")}}
  - : Creates a new `ReferenceError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "ReferenceError.prototype.message")}}
  - : Error message. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "ReferenceError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "ReferenceError.prototype.cause")}}
  - : Error cause. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "ReferenceError.prototype.fileName")}} {{non-standard_inline}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "ReferenceError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "ReferenceError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "ReferenceError.prototype.stack")}} {{non-standard_inline}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## Examples

### Catching a ReferenceError

```js
try {
  let a = undefinedVariable
} catch (e) {
  console.log(e instanceof ReferenceError)  // true
  console.log(e.message)                    // "undefinedVariable is not defined"
  console.log(e.name)                       // "ReferenceError"
  console.log(e.fileName)                   // "Scratchpad/1"
  console.log(e.lineNumber)                 // 2
  console.log(e.columnNumber)               // 6
  console.log(e.stack)                      // "@Scratchpad/2:2:7\n"
}
```

### Creating a ReferenceError

```js
try {
  throw new ReferenceError('Hello', 'someFile.js', 10)
} catch (e) {
  console.log(e instanceof ReferenceError)  // true
  console.log(e.message)                    // "Hello"
  console.log(e.name)                       // "ReferenceError"
  console.log(e.fileName)                   // "someFile.js"
  console.log(e.lineNumber)                 // 10
  console.log(e.columnNumber)               // 0
  console.log(e.stack)                      // "@Scratchpad/2:2:9\n"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
