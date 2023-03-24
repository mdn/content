---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
page-type: javascript-class
browser-compat: javascript.builtins.ReferenceError
---

{{JSRef}}

The **`ReferenceError`** object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

`ReferenceError` is a {{Glossary("serializable object")}}, so it can be cloned with {{domxref("structuredClone()")}} or copied between [Workers](/en-US/docs/Web/API/Worker) using {{domxref("Worker/postMessage()", "postMessage()")}}.

`ReferenceError` is a subclass of {{jsxref("Error")}}.

## Constructor

- {{jsxref("Global_Objects/ReferenceError/ReferenceError", "ReferenceError()")}}
  - : Creates a new `ReferenceError` object.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("Error")}}_.

These properties are defined on `ReferenceError.prototype` and shared by all `ReferenceError` instances.

- {{jsxref("Object/constructor", "ReferenceError.prototype.constructor")}}
  - : The constructor function that created the instance object. For `ReferenceError` instances, the initial value is the {{jsxref("ReferenceError/ReferenceError", "ReferenceError")}} constructor.
- {{jsxref("Error/name", "ReferenceError.prototype.name")}}
  - : Represents the name for the type of error. For `ReferenceError.prototype.name`, the initial value is `"ReferenceError"`.

## Instance methods

_Inherits instance methods from its parent {{jsxref("Error")}}_.

## Examples

### Catching a ReferenceError

```js
try {
  let a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "undefinedVariable is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 6
  console.log(e.stack); // "@Scratchpad/2:2:7\n"
}
```

### Creating a ReferenceError

```js
try {
  throw new ReferenceError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "ReferenceError"
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
