---
title: Promise.reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
page-type: javascript-static-method
browser-compat: javascript.builtins.Promise.reject
---

{{JSRef}}

The **`Promise.reject()`** static method returns a `Promise` object that is rejected with a given reason.

{{EmbedInteractiveExample("pages/js/promise-reject.html")}}

## Syntax

```js-nolint
Promise.reject(reason)
```

### Parameters

- `reason`
  - : Reason why this `Promise` rejected.

### Return value

A {{jsxref("Promise")}} that is rejected with the given reason.

## Description

The static `Promise.reject` function returns a `Promise` that is rejected. For debugging purposes and selective error catching, it is useful to make `reason` an `instanceof` {{jsxref("Error")}}.

`Promise.reject()` is generic and supports subclassing, which means it can be called on subclasses of `Promise`, and the result will be a promise of the subclass type. To do so, the subclass's constructor must implement the same signature as the [`Promise()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) constructor — accepting a single `executor` function that can be called with the `resolve` and `reject` callbacks as parameters. `Promise.reject()` is essentially a shorthand for `new Promise((resolve, reject) => reject(reason))`.

Unlike {{jsxref("Promise.resolve()")}}, `Promise.reject()` always wraps `reason` in a new `Promise` object, even when `reason` is already a `Promise`.

## Examples

### Using the static Promise.reject() method

```js
Promise.reject(new Error("fail")).then(
  () => {
    // not called
  },
  (error) => {
    console.error(error); // Stacktrace
  },
);
```

### Rejecting with a promise

Unlike {{jsxref("Promise.resolve")}}, the `Promise.reject` method does not reuse existing `Promise` instances. It always returns a new `Promise` instance that wraps `reason`.

```js
const p = Promise.resolve(1);
const rejected = Promise.reject(p);
console.log(rejected === p); // false
rejected.catch((v) => {
  console.log(v === p); // true
});
```

### Calling reject() on a non-Promise constructor

`Promise.reject()` is a generic method. It can be called on any constructor that implements the same signature as the `Promise()` constructor. For example, we can call it on a constructor that passes it `console.log` as `reject`:

```js
class NotPromise {
  constructor(executor) {
    // The "resolve" and "reject" functions behave nothing like the
    // native promise's, but Promise.reject() calls them in the same way.
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

Promise.reject.call(NotPromise, "foo"); // Logs "Rejected foo"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
