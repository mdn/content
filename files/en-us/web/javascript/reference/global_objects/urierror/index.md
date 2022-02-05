---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
tags:
  - Class
  - JavaScript
  - Object
  - Reference
  - URIError
browser-compat: javascript.builtins.URIError
---
{{JSRef}}

The **`URIError`** object represents an error when a global URI handling function was used in a wrong way.

## Constructor

- {{jsxref("Global_Objects/URIError/URIError", "URIError()")}}
  - : Creates a new `URIError` object.

## Instance properties

- {{jsxref("Error.prototype.message", "URIError.prototype.message")}}
  - : Error message.
- {{jsxref("Error.prototype.name", "URIError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "URIError.prototype.fileName")}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "URIError.prototype.lineNumber")}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "URIError.prototype.columnNumber")}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "URIError.prototype.stack")}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

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
