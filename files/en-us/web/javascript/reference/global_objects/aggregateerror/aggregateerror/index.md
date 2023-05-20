---
title: AggregateError() constructor
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
page-type: javascript-constructor
browser-compat: javascript.builtins.AggregateError.AggregateError
---

{{JSRef}}

The **`AggregateError()`** constructor creates {{jsxref("AggregateError")}} objects.

## Syntax

```js-nolint
new AggregateError(errors)
new AggregateError(errors, message)
new AggregateError(errors, message, options)

AggregateError(errors)
AggregateError(errors, message)
AggregateError(errors, message, options)
```

> **Note:** `AggregateError()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `AggregateError` instance.

### Parameters

- `errors`
  - : An iterable of errors, may not actually be {{JSxRef("Error")}} instances.
- `message` {{optional_inline}}
  - : An optional human-readable description of the aggregate error.
- `options` {{optional_inline}}
  - : An object that has the following properties:
    - `cause` {{optional_inline}}
      - : A property indicating the specific cause of the error.
        When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.

## Examples

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
- {{jsxref("Promise.any")}}
