---
title: URIError() constructor
slug: Web/JavaScript/Reference/Global_Objects/URIError/URIError
tags:
  - Constructor
  - JavaScript
  - Reference
  - URIError
browser-compat: javascript.builtins.URIError.URIError
---
{{JSRef}}

The **`URIError()`** constructor creates an error when a global
URI handling function was used in a wrong way.

## Syntax

```js
new URIError()
new URIError(message)
new URIError(message, options)
new URIError(message, fileName)
new URIError(message, fileName, lineNumber)

URIError()
URIError(message)
URIError(message, options)
URIError(message, fileName)
URIError(message, fileName, lineNumber)
```

> **Note:** `URIError()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `URIError` instance.

### Parameters

- `message` {{optional_inline}}
  - : Human-readable description of the error.
- `options` {{optional_inline}}
  - : An object that has the following properties:
    - `cause` {{optional_inline}}
      - : A property indicating the specific cause of the error.
          When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : The name of the file containing the code that caused the exception.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : The line number of the code that caused the exception.

## Examples

### Catching an URIError

```js
try {
  decodeURIComponent('%')
} catch (e) {
  console.log(e instanceof URIError)  // true
  console.log(e.message)              // "malformed URI sequence"
  console.log(e.name)                 // "URIError"
  console.log(e.fileName)             // "Scratchpad/1"
  console.log(e.lineNumber)           // 2
  console.log(e.columnNumber)         // 2
  console.log(e.stack)                // "@Scratchpad/2:2:3\n"
}
```

### Creating an URIError

```js
try {
  throw new URIError('Hello', 'someFile.js', 10)
} catch (e) {
  console.log(e instanceof URIError)  // true
  console.log(e.message)              // "Hello"
  console.log(e.name)                 // "URIError"
  console.log(e.fileName)             // "someFile.js"
  console.log(e.lineNumber)           // 10
  console.log(e.columnNumber)         // 0
  console.log(e.stack)                // "@Scratchpad/2:2:9\n"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
