---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
page-type: javascript-class
browser-compat: javascript.builtins.EvalError
---

{{JSRef}}

The **`EvalError`** object indicates an error regarding the global {{jsxref("Global_Objects/eval", "eval()")}} function. This exception is not thrown by JavaScript anymore, however the `EvalError` object remains for compatibility.

`EvalError` is a {{Glossary("serializable object")}}, so it can be cloned with {{domxref("structuredClone()")}} or copied between [Workers](/en-US/docs/Web/API/Worker) using {{domxref("Worker/postMessage()", "postMessage()")}}.

`EvalError` is a subclass of {{jsxref("Error")}}.

## Constructor

- {{jsxref("EvalError/EvalError", "EvalError()")}}
  - : Creates a new `EvalError` object.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("Error")}}_.

These properties are defined on `EvalError.prototype` and shared by all `EvalError` instances.

- {{jsxref("Object/constructor", "EvalError.prototype.constructor")}}
  - : The constructor function that created the instance object. For `EvalError` instances, the initial value is the {{jsxref("EvalError/EvalError", "EvalError")}} constructor.
- {{jsxref("Error/name", "EvalError.prototype.name")}}
  - : Represents the name for the type of error. For `EvalError.prototype.name`, the initial value is `"EvalError"`.

## Instance methods

_Inherits instance methods from its parent {{jsxref("Error")}}_.

## Examples

### Creating an EvalError

```js
try {
  throw new EvalError("Hello");
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
