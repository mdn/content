---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
tags:
  - JavaScript
  - Method
  - Promises
  - Prototype
  - Reference
  - finally
  - Polyfill
browser-compat: javascript.builtins.Promise.finally
---
{{JSRef}}

The **`finally()`** method of a {{jsxref("Promise")}} schedules a function,
the _callback function_, to be called when the promise is settled.
Like `then()` and `catch()`, it immediately returns an equivalent {{jsxref("Promise")}} object,
allowing you to chain calls to another promise method, an operation called _composition_.

This lets you avoid duplicating code in both the promise's {{jsxref("Promise.then",
  "then()")}} and {{jsxref("Promise.catch", "catch()")}} handlers.

{{EmbedInteractiveExample("pages/js/promise-finally.html", "taller")}}

## Syntax

```js
promise.finally(onFinally)

promise.finally(() => {
  // Code that will run after promise is settled (fulfilled or rejected)
})
```

### Parameters

- `onFinally`
  - : A {{jsxref("Function")}} called when the `Promise` is settled. This handler receives no parameters.

### Return value

Returns an equivalent {{jsxref("Promise")}} with its `finally` handler set to the specified function.
If the handler throws an error or returns a rejected promise, the promise returned by `finally()` will be rejected with that value instead. Otherwise, the return value of the handler does not affect the state of the original promise.

## Description

The `finally()` method can be useful if you want to do some processing or
cleanup once the promise is settled, regardless of its outcome.

The `finally()` method is very similar to calling
`.then(onFinally, onFinally)`, however, there are a couple of differences:

- When creating a function inline, you can pass it once, instead of being forced to
  either declare it twice, or create a variable for it.
- A `finally` callback will not receive any argument. This use case
  is for precisely when you _do not care_ about the rejection reason, or the
  fulfillment value, and so there's no need to provide it.
- A `finally` call will usually chain through an equivalent to the original promise.
  So for example:
  - Unlike `Promise.resolve(2).then(() => 77, () => {})` (which
    will return a resolved promise with the result `77`),
    `Promise.resolve(2).finally(() => 77)` will return a
    new resolved promise with the result `2`.
  - Similarly, unlike `Promise.reject(3).then(() => {}, () => 88)`
    (which will return a resolved promise with the value `88`),
    `Promise.reject(3).finally(() => 88)` will return a rejected promise
    with the reason `3`.
  - But, both `Promise.reject(3).finally(() => {throw 99})` and
    `Promise.reject(3).finally(() => Promise.reject(99))` will reject the returned promise
    with the reason `99`.

> **Note:** A `throw` (or returning a rejected promise) in the
> `finally` callback will reject the returned promise, with the reason
> specified when throwing, as shown in the last example.

## Examples

### Using finally()

```js
let isLoading = true;

fetch(myRequest)
  .then((response) => {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then((json) => {
    /* process your JSON further */
  })
  .catch((error) => {
    console.error(error); // this line can also throw, e.g. when console = {}
  })
  .finally(() => {
    isLoading = false;
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Promise.prototype.finally` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}
