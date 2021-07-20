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

The **`ReferenceError`** object represents an error when a non-existent variable is referenced.

## Constructor

- {{jsxref("Global_Objects/ReferenceError/ReferenceError", "ReferenceError()")}}
  - : Creates a new `ReferenceError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "ReferenceError.prototype.message")}}
  - : Error message. Although ECMA-262 specifies that {{jsxref("ReferenceError")}} should provide its own `message` property, in [SpiderMonkey](/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits {{jsxref("Error.prototype.message")}}.
- {{jsxref("Error.prototype.name", "ReferenceError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "ReferenceError.prototype.fileName")}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "ReferenceError.prototype.lineNumber")}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "ReferenceError.prototype.columnNumber")}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "ReferenceError.prototype.stack")}}
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
