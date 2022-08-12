---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
tags:
  - Class
  - JavaScript
  - Object
  - Reference
  - TypeError
browser-compat: javascript.builtins.TypeError
---
{{JSRef}}

The **`TypeError`** object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.

A `TypeError` may be thrown when:

- an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
- when attempting to modify a value that cannot be changed; or
- when attempting to use a value in an inappropriate way.

`TypeError` is a {{Glossary("serializable object")}}, so it can be cloned with {{domxref("structuredClone()")}} or copied between [Workers](/en-US/docs/Web/API/Worker) using {{domxref("Worker.postMessage()", "postMessage()")}}.

## Constructor

- {{jsxref("Global_Objects/TypeError/TypeError", "TypeError()")}}
  - : Creates a new `TypeError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "TypeError.prototype.message")}}
  - : Error message. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "TypeError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "TypeError.prototype.cause")}}
  - : Error cause. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "TypeError.prototype.fileName")}} {{non-standard_inline}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "TypeError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "TypeError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "TypeError.prototype.stack")}} {{non-standard_inline}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## Examples

### Catching a TypeError

```js
try {
  null.f()
} catch (e) {
  console.log(e instanceof TypeError)  // true
  console.log(e.message)               // "null has no properties"
  console.log(e.name)                  // "TypeError"
  console.log(e.fileName)              // "Scratchpad/1"
  console.log(e.lineNumber)            // 2
  console.log(e.columnNumber)          // 2
  console.log(e.stack)                 // "@Scratchpad/2:2:3\n"
}
```

### Creating a TypeError

```js
try {
  throw new TypeError('Hello', "someFile.js", 10)
} catch (e) {
  console.log(e instanceof TypeError)  // true
  console.log(e.message)               // "Hello"
  console.log(e.name)                  // "TypeError"
  console.log(e.fileName)              // "someFile.js"
  console.log(e.lineNumber)            // 10
  console.log(e.columnNumber)          // 0
  console.log(e.stack)                 // "@Scratchpad/2:2:9\n"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
