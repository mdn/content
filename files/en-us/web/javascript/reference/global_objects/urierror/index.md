---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
page-type: javascript-class
browser-compat: javascript.builtins.URIError
---

{{JSRef}}

The **`URIError`** object represents an error when a global URI handling function was used in a wrong way.

`URIError` is a {{Glossary("serializable object")}}, so it can be cloned with {{domxref("structuredClone()")}} or copied between [Workers](/en-US/docs/Web/API/Worker) using {{domxref("Worker/postMessage()", "postMessage()")}}.

`URIError` is a subclass of {{jsxref("Error")}}.

## Constructor

- {{jsxref("Global_Objects/URIError/URIError", "URIError()")}}
  - : Creates a new `URIError` object.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("Error")}}_.

These properties are defined on `URIError.prototype` and shared by all `URIError` instances.

- {{jsxref("Object/constructor", "URIError.prototype.constructor")}}
  - : The constructor function that created the instance object. For `URIError` instances, the initial value is the {{jsxref("URIError/URIError", "URIError")}} constructor.
- {{jsxref("Error/name", "URIError.prototype.name")}}
  - : Represents the name for the type of error. For `URIError.prototype.name`, the initial value is `"URIError"`.

## Instance methods

_Inherits instance methods from its parent {{jsxref("Error")}}_.

## Examples

### Catching an URIError

```js
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence"
  console.log(e.name); // "URIError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 2
  console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
```

### Creating an URIError

```js
try {
  throw new URIError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "URIError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
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
