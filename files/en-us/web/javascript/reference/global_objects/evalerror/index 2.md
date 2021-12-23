---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
tags:
  - Class
  - EvalError
  - JavaScript
  - Object
  - Reference
browser-compat: javascript.builtins.EvalError
---
{{JSRef}}

The **`EvalError`** object indicates an error regarding the global {{jsxref("Global_Objects/eval", "eval()")}} function. This exception is not thrown by JavaScript anymore, however the `EvalError` object remains for compatibility.

## Constructor

- {{jsxref("EvalError/EvalError", "EvalError()")}}
  - : Creates a new `EvalError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "EvalError.prototype.message")}}
  - : Error message. Although ECMA-262 specifies that {{jsxref("EvalError")}} should provide its own `message` property, in [SpiderMonkey](/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits {{jsxref("Error.prototype.message")}}.
- {{jsxref("Error.prototype.name", "EvalError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "EvalError.prototype.fileName")}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "EvalError.prototype.lineNumber")}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "EvalError.prototype.columnNumber")}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "EvalError.prototype.stack")}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## Examples

`EvalError` is not used in the current ECMAScript specification and will thus not be thrown by the runtime. However, the object itself remains for backwards compatibility with earlier versions of the specification.

### Creating an EvalError

```js
try {
  throw new EvalError('Hello', 'someFile.js', 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message);              // "Hello"
  console.log(e.name);                 // "EvalError"
  console.log(e.fileName);             // "someFile.js"
  console.log(e.lineNumber);           // 10
  console.log(e.columnNumber);         // 0
  console.log(e.stack);                // "@Scratchpad/2:2:9\n"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
