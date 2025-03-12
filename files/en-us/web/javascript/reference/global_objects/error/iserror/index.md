---
title: Error.isError()
slug: Web/JavaScript/Reference/Global_Objects/Error/isError
page-type: javascript-static-method
browser-compat: javascript.builtins.Error.isError
---

{{JSRef}}

The **`Error.isError()`** static method determines whether the passed value is an {{jsxref("Error")}}.

## Syntax

```js-nolint
Error.isError(value)
```

### Parameters

- `value`
  - : The value to be checked.

### Return value

`true` if `value` is an {{jsxref("Error")}}; otherwise, `false`.

## Description

`Error.isError()` checks if the passed value is an {{jsxref("Error")}}. It does so by performing a _branded check_ for a private property initialized by the {{jsxref("Error/Error", "Error()")}} constructor.
This is the same mechanism used by {{jsxref("Array.isArray()")}}, which is in turn similar to the mechanism used by the [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in) operator.

It is a more robust alternative to [`instanceof Error`](/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) because it avoids false positives and false negatives:

- `Error.isError()` rejects values that aren't actual `Error` instances, even if they have `Error.prototype` their prototype chain — `instanceof Error` would accept these as it does check the prototype chain.
- `Error.isError()` accepts `Error` objects constructed in another realm — `instanceof Error` returns `false` for these because the identity of the `Error` constructor is different across realms.

`Error.isError()` returns `true` for {{domxref("DOMException")}} instances. This is because, although `DOMException` is not specified as a real subclass of `Error` (the `Error` constructor is not the prototype of the `DOMException` constructor), `DOMException` still behaves like `Error` for all branded checking purposes.

## Examples

### Using Error.isError()

```js
// all following calls return true
Error.isError(new Error());
Error.isError(new TypeError());
Error.isError(new DOMException());
try {
  1 + 1n;
} catch (e) {
  console.log(Error.isError(e)); // The operation threw a TypeError, so this returns true
}

// all following calls return false
Error.isError();
Error.isError({});
Error.isError(null);
Error.isError(undefined);
Error.isError(17);
Error.isError("Error");
Error.isError(true);
Error.isError(false);
// This is not an error, because the object does not have the private property
// initialized by the Error constructor
Error.isError({ __proto__: Error.prototype });
```

### instanceof vs. Error.isError()

When checking for `Error` instance, `Error.isError()` is preferred over `instanceof` because it works across realms.

```js
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xError = window.frames[window.frames.length - 1].Error;
const error = new xError();

// Correctly checking for Error
Error.isERror(error); // true
// The prototype of error is xError.prototype, which is a
// different object from Error.prototype
error instanceof Error; // false
```

### Normalizing caught errors

You can use `Error.isError()` to detect if the caught value is an error and normalize it to an error object.

```js
try {
  throw "Oops; this is not an Error object";
} catch (e) {
  if (!Error.isError(e)) {
    e = new Error(e);
  }
  console.error(e.message);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Error.isError` in `core-js`](https://github.com/zloirock/core-js#erroriserror)
- [es-shims polyfill of `Error.isError`](https://www.npmjs.com/package/error.iserror)
- {{jsxref("Error")}}
