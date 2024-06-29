---
title: SuppressedError() constructor
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError/SuppressedError
page-type: javascript-constructor
browser-compat: javascript.builtins.SuppressedError.SuppressedError
---

{{JSRef}}

The **`SuppressedError()`** constructor creates {{jsxref("SuppressedError")}} objects.

## Syntax

```js-nolint
new SuppressedError(error, suppressed)
new SuppressedError(error, suppressed, message)

SuppressedError(error, suppressed)
SuppressedError(error, suppressed, message)
```

> **Note:** `SuppressedError()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `SuppressedError` instance.

### Parameters

- `error`
  - : The new error that results in the suppression of `suppressed`.
- `suppressed`
  - : The error that was originally thrown and is now suppressed.
- `message` {{optional_inline}}
  - : An optional human-readable description of the aggregate error.

> **Note:** `SuppressedError()` does not accept `options` like {{jsxref("Error/Error", "Error()")}} and other subclasses do, because the semantics of {{jsxref("Error/cause", "cause")}} overlaps with `suppressed`.

## Examples

### Creating an SuppressedError

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `SuppressedError` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
