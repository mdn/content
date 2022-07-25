---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
tags:
  - AggregateError
  - Class
  - Interface
  - JavaScript
  - Polyfill
browser-compat: javascript.builtins.AggregateError
---
{{JSRef}}

The **`AggregateError`** object represents an error when several errors need to be wrapped in a single error. It is thrown when multiple errors need to be reported by an operation, for example by {{JSxRef("Promise.any()")}}, when all promises passed to it reject.

## Constructor

- {{jsxref("Global_Objects/AggregateError/AggregateError", "AggregateError()")}}
  - : Creates a new `AggregateError` object.

## Instance properties

- {{JSxRef("Error.prototype.message", "AggregateError.prototype.message")}}
  - : Error message. Inherited from {{jsxref("Error")}}.
- {{JSxRef("Error.prototype.name", "AggregateError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "AggregateError.prototype.cause")}}
  - : Error cause. Inherited from {{jsxref("Error")}}.
- `AggregateError.prototype.errors`
  - : An array that essentially reflects the iterable with which the `AggregateError` was instantiated; for example, if the `AggregateError` was created using the {{JSxRef("AggregateError/AggregateError", "AggregateError()")}} constructor, an array produced from whatever iterable was passed to the constructor as its first argument.

## Examples

### Catching an AggregateError

```js
Promise.any([
  Promise.reject(new Error("some error")),
]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "All Promises rejected"
  console.log(e.name);                      // "AggregateError"
  console.log(e.errors);                    // [ Error: "some error" ]
});
```

### Creating an AggregateError

```js
try {
  throw new AggregateError([
    new Error("some error"),
  ], 'Hello');
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "Hello"
  console.log(e.name);                      // "AggregateError"
  console.log(e.errors);                    // [ Error: "some error" ]
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
