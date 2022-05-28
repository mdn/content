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

The **`finally()`** method is called on a {{jsxref("Promise")}}.
When the promise is finally either fulfilled or rejected, the specified callback
function is executed. This provides a way for code to be run whether the promise was
fulfilled successfully, or instead rejected.

This helps to avoid duplicating code in both the promise's {{jsxref("Promise.then",
  "then()")}} and {{jsxref("Promise.catch", "catch()")}} handlers.

{{EmbedInteractiveExample("pages/js/promise-finally.html", "taller")}}

## Syntax

```js
p.finally(onFinally);

p.finally(function onFinally() {
   // will run after p is settled (fulfilled or rejected)
});
```

### Parameters

- `onFinally`
  - : A {{jsxref("Function")}} called when the `Promise` is settled.

### Return value

Passes through an equivalent {{jsxref("Promise")}} to the one this call was made on.
If the function callback throws an error, the return promise will be rejected 
with that value instead.

## Description

The `finally()` method can be useful if you want to do some processing or
cleanup once the promise is settled, regardless of its outcome.

The `finally()` method is very similar to calling
`.then(onFinally, onFinally)` however there are a couple of differences:

- When creating a function inline, you can pass it once, instead of being forced to
  either declare it twice, or create a variable for it
- A `finally` callback will not receive any argument. 
  Also, the return value from the finally callback will be discarded.  This use case
  is for precisely when you _do not care_ about the rejection reason, or the
  fulfillment value, and so there's no need to provide it. 
- A `finally` call will chain through an equivalent to the orignal promise.  
  So for example:
  - Unlike `Promise.resolve(2).then(() => 77, () => {})` (which
    will return a promise which will be resolved with `77`), 
    `Promise.resolve(2).finally(() => 99)` will return a 
    promise which will be resolved with `2`. (The 99 is ignored.)
  - Similarly, unlike `Promise.reject(3).then(() => {}, () => 88)`
    (which will, again, return a promise which will be rejected with `88`),
    `Promise.reject(3).finally(() => 99)` will return a promise 
    which will be rejected with `3`. (The 99 is ignored.)

> **Note:** A `throw` (or returning a rejected promise) in the
> `finally` callback will reject the promise, which will, in that case, 
> return a promise with the rejection reason
> specified when calling `throw`.

## Examples

### Using finally

```js
let isLoading = true;

fetch(myRequest).then(function(response) {
    const contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) { /* process your JSON further */ })
  .catch(function(error) { console.error(error); /* this line can also throw, e.g. when console = {} */ })
  .finally(function() { isLoading = false; });
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
