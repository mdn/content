---
title: ReferenceError() constructor
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError/ReferenceError
tags:
  - Constructor
  - JavaScript
  - Reference
  - ReferenceError
browser-compat: javascript.builtins.ReferenceError.ReferenceError
---
{{JSRef}}

The **`ReferenceError`** object represents an error when a
non-existent variable is referenced.

## Syntax

```js
new ReferenceError()
new ReferenceError(message)
new ReferenceError(message, fileName)
new ReferenceError(message, fileName, lineNumber)
```

### Parameters

- `message` {{optional_inline}}
  - : Human-readable description of the error.
- `fileName` {{optional_inline}}
  - : The name of the file containing the code that caused the exception.
- `lineNumber` {{optional_inline}}
  - : The line number of the code that caused the exception

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
