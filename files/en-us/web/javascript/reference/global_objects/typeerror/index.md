---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
page-type: javascript-class
browser-compat: javascript.builtins.TypeError
---

{{JSRef}}

The **`TypeError`** object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.

A `TypeError` may be thrown when:

- an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
- when attempting to modify a value that cannot be changed; or
- when attempting to use a value in an inappropriate way.

`TypeError` is a {{Glossary("serializable object")}}, so it can be cloned with {{domxref("structuredClone()")}} or copied between [Workers](/en-US/docs/Web/API/Worker) using {{domxref("Worker/postMessage()", "postMessage()")}}.

`TypeError` is a subclass of {{jsxref("Error")}}.

## Constructor

- {{jsxref("TypeError/TypeError", "TypeError()")}}
  - : Creates a new `TypeError` object.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("Error")}}_.

These properties are defined on `TypeError.prototype` and shared by all `TypeError` instances.

- {{jsxref("Object/constructor", "TypeError.prototype.constructor")}}
  - : The constructor function that created the instance object. For `TypeError` instances, the initial value is the {{jsxref("TypeError/TypeError", "TypeError")}} constructor.
- {{jsxref("Error/name", "TypeError.prototype.name")}}
  - : Represents the name for the type of error. For `TypeError.prototype.name`, the initial value is `"TypeError"`.

## Instance methods

_Inherits instance methods from its parent {{jsxref("Error")}}_.

## Examples

### Catching a TypeError

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack of the error
}
```

### Creating a TypeError

```js
try {
  throw new TypeError("Hello");
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
