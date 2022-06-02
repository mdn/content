---
title: AggregateError() constructor
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
tags:
  - Constructor
  - JavaScript
  - Reference
  - Polyfill
browser-compat: javascript.builtins.AggregateError.AggregateError
---
{{JSRef}}

The **`AggregateError()`** constructor creates an error for
several errors that need to be wrapped in a single error.

## Syntax

```js
new AggregateError(errors)
new AggregateError(errors, message)
```

### Parameters

- `errors`
  - : An iterable of errors, may not actually be {{JSxRef("Error")}} instances.
- `message`{{Optional_Inline}}
  - : An optional human-readable description of the aggregate error.

## Examples

### Creating an `AggregateError`

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
- {{jsxref("Promise.any")}}
