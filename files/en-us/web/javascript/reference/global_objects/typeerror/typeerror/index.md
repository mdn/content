---
title: TypeError() constructor
slug: Web/JavaScript/Reference/Global_Objects/TypeError/TypeError
tags:
  - Constructor
  - JavaScript
  - Reference
  - TypeError
browser-compat: javascript.builtins.TypeError.TypeError
---
{{JSRef}}

The **`TypeError()`** constructor creates a new error when an
operation could not be performed, typically (but not exclusively) when a value is not of
the expected type.

## Syntax

```js
new TypeError()
new TypeError(message)
new TypeError(message, fileName)
new TypeError(message, fileName, lineNumber)
```

### Parameters

- `message` {{optional_inline}}
  - : Human-readable description of the error
- `fileName` {{optional_inline}}
  - : The name of the file containing the code that caused the exception
- `lineNumber` {{optional_inline}}
  - : The line number of the code that caused the exception

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
