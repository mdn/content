---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
page-type: javascript-class
browser-compat: javascript.builtins.AggregateError
---

{{JSRef}}

The **`AggregateError`** object represents an error when several errors need to be wrapped in a single error. It is thrown when multiple errors need to be reported by an operation, for example by {{JSxRef("Promise.any()")}}, when all promises passed to it reject.

`AggregateError` is a subclass of {{jsxref("Error")}}.

## Constructor

- {{jsxref("AggregateError/AggregateError", "AggregateError()")}}
  - : Creates a new `AggregateError` object.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("Error")}}_.

These properties are defined on `AggregateError.prototype` and shared by all `AggregateError` instances.

- {{jsxref("Object/constructor", "AggregateError.prototype.constructor")}}
  - : The constructor function that created the instance object. For `AggregateError` instances, the initial value is the {{jsxref("AggregateError/AggregateError", "AggregateError")}} constructor.
- {{jsxref("Error/name", "AggregateError.prototype.name")}}
  - : Represents the name for the type of error. For `AggregateError.prototype.name`, the initial value is `"AggregateError"`.

These properties are own properties of each `AggregateError` instance.

- {{jsxref("AggregateError/errors", "errors")}}
  - : An array representing the errors that were aggregated.

## Instance methods

_Inherits instance methods from its parent {{jsxref("Error")}}_.

## Examples

### Catching an AggregateError

```js
Promise.any([Promise.reject(new Error("some error"))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "All Promises rejected"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
});
```

### Creating an AggregateError

```js
try {
  throw new AggregateError([new Error("some error")], "Hello");
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `AggregateError` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- {{JSxRef("Error")}}
- {{JSxRef("Promise.any")}}
