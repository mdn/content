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

## Constructor

- {{jsxref("Global_Objects/TypeError/TypeError", "TypeError()")}}
  - : Creates a new `TypeError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "TypeError.prototype.message")}}
  - : Error message. Although ECMA-262 specifies that {{jsxref("TypeError")}} should provide its own `message` property, in [SpiderMonkey](/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits {{jsxref("Error.prototype.message")}}.
- {{jsxref("Error.prototype.name", "TypeError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "TypeError.prototype.fileName")}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "TypeError.prototype.lineNumber")}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "TypeError.prototype.columnNumber")}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "TypeError.prototype.stack")}}
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
