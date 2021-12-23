---
title: EvalError() constructor
slug: Web/JavaScript/Reference/Global_Objects/EvalError/EvalError
tags:
  - Constructor
  - JavaScript
  - Reference
browser-compat: javascript.builtins.EvalError.EvalError
---
{{JSRef}}

The **`EvalError`** constructor creates a new error regarding
the global {{jsxref("Global_Objects/eval", "eval()")}} function. This exception is not
thrown by JavaScript anymore, however the `EvalError` object remains for
compatibility.

## Syntax

```js
new EvalError()
new EvalError(message)
new EvalError(message, fileName)
new EvalError(message, fileName, lineNumber)
```

### Parameters

- `message` {{optional_inline}}
  - : Human-readable description of the error.
- `fileName` {{optional_inline}}
  - : The name of the file containing the code that caused the exception
- `lineNumber` {{optional_inline}}
  - : The line number of the code that caused the exception

## Examples

`EvalError` is not used in the current ECMAScript specification and will
thus not be thrown by the runtime. However, the object itself remains for backwards
compatibility with earlier versions of the specification.

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
