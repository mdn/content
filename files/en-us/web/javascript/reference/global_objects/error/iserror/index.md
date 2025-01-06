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

`Error.isError()` checks if the passed value is an {{jsxref("Error")}}. It uses the same mechanism as {{jsxref("Array.isArray()")}}: it performs a _branded check_, similar to the [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in) operator, for a private property initialized by the {{jsxref("Error/Error", "Error()")}} constructor. It is a more robust alternative to [`instanceof Error`](/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) because it avoids false positives and false negatives:

- It does not check the value's prototype chain—`Error.isError()` rejects objects with `Error.prototype` in its prototype chain but aren't actual errors, which `instanceof Error` would accept.
- For `Error` objects constructed in another realm, the identity of the `Error` constructor is different and would therefore cause `instanceof Error` to return `false` in this realm.

Although {{domxref("DOMException")}} is not specified as a real subclass of `Error` (the `Error` constructor is not the prototype of the `DOMException` constructor), `DOMException` still behaves like `Error` for all branded checking purposes, so `Error.isError()` returns `true` for `DOMException` instances.

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
  console.log(Error.isError(e)); // Throws a TypeError
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
- {{jsxref("Error")}}
