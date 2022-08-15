---
title: Promise.allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
tags:
  - JavaScript
  - Method
  - Promise
  - Reference
  - allSettled
  - asynchronous
  - Polyfill
browser-compat: javascript.builtins.Promise.allSettled
---
{{JSRef}}

The **`Promise.allSettled()`** method returns a promise that
fulfills after all of the given promises have either fulfilled or rejected, with an
array of objects that each describes the outcome of each promise.

It is typically used when you have multiple asynchronous tasks that are not dependent
on one another to complete successfully, or you'd always like to know the result of each
promise.

In comparison, the Promise returned by {{jsxref("Promise.all()")}} may be more
appropriate if the tasks are dependent on each other / if you'd like to immediately
reject upon any of them rejecting.

{{EmbedInteractiveExample("pages/js/promise-allsettled.html")}}

## Syntax

```js
Promise.allSettled(iterable);
```

### Parameters

- `iterable`
  - : An [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) object, such as
    an {{jsxref("Array")}}, in which each member is a `Promise`.

### Return value

A **pending** {{jsxref("Promise")}} that will be
**asynchronously** fulfilled once every promise in the specified collection
of promises has completed, either by successfully being fulfilled or by being rejected.
At that time, the returned promise's handler is passed as input an array containing the
outcome of each promise in the original set of promises.

However, **if and only if** an empty iterable is passed as an argument,
`Promise.allSettled()` returns a `Promise` object that is
**already fulfilled** as an empty array.

For each outcome object, a `status` string is present. If the status is
`fulfilled`, then a `value` is present. If the status is
`rejected`, then a `reason` is present. The value (or reason)
reflects what value each promise was fulfilled (or rejected) with.

## Examples

### Using Promise.allSettled

#### {{JSxRef("Promise.then", "Promise.prototype.then()")}}

```js
Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error('an error'))
])
.then((values) => console.log(values));

// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]
```

#### {{jsxref("Operators/await", "await")}}

```js
const values = await Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error('an error'))
])
console.log(values)

// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Promise.allSettled` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Graceful asynchronous programming with promises](/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
