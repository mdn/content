---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Promise
browser-compat: javascript.builtins.Promise.all
---
{{JSRef}}

The **`Promise.all()`** method takes an iterable of promises as
an input, and returns a single {{jsxref("Promise")}} that resolves to an array of the
results of the input promises. This returned promise will fulfill when all of the
input's promises have fulfilled, or if the input iterable contains no promises. It
rejects immediately upon any of the input promises rejecting or non-promises throwing an
error, and will reject with this first rejection message / error.

{{EmbedInteractiveExample("pages/js/promise-all.html")}}

## Syntax

```js
Promise.all(iterable);
```

### Parameters

- `iterable`
  - : An [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)
    object such as an {{jsxref("Array")}}.

### Return value

- An **already fulfilled** {{jsxref("Promise")}} if the
  _iterable_ passed is empty.
- An **asynchronously fulfilled** {{jsxref("Promise")}} if the
  _iterable_ passed contains no promises. Note, Google Chrome 58 returns
  an **already fulfilled** promise in this case.
- A **pending** {{jsxref("Promise")}} in all other cases. This returned
  promise is then fulfilled/rejected **asynchronously** (as soon as the
  queue is empty) when all the promises in the given _iterable_ have fulfilled,
  or if any of the promises reject. See the example about "Asynchronicity or
  synchronicity of Promise.all" below. Returned values will be in order of the Promises
  passed, regardless of completion order.

## Description

This method can be useful for aggregating the results of multiple promises. It is
typically used when there are multiple related asynchronous tasks that the overall code
relies on to work successfully — all of whom we want to fulfill before the code
execution continues.

`Promise.all()` will reject immediately upon **any** of the
input promises rejecting. In comparison, the promise returned by
{{jsxref("Promise.allSettled()")}} will wait for all input promises to complete,
regardless of whether or not one rejects. Consequently, it will always return the final
result of every promise and function from the input iterable.

> **Note:** The order of the promise array is preserved upon completion of this method.

### Fulfillment

The returned promise is fulfilled with an array containing **all** the
fulfilled values (including non-promise values) in the _iterable_ passed as the
argument.

- If an empty _iterable_ is passed, then the promise returned by this method
  is fulfilled synchronously. The fulfilled value is an empty array.
- If a nonempty _iterable_ is passed, and **all** of the promises
  fulfill, or are not promises, then the promise returned by this method is fulfilled
  asynchronously.

### Rejection

If any of the passed-in promises reject, `Promise.all` asynchronously
rejects with the value of the promise that rejected, whether or not the other promises
have settled.

## Examples

### Using Promise.all

`Promise.all` waits for all fulfillments (or the first rejection).

```js
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
```

If the _iterable_ contains non-promise values, they will be ignored, but still
counted in the returned promise array value (if the promise is fulfilled):

```js
// this will be counted as if the iterable passed is empty, so it gets fulfilled
const p = Promise.all([1, 2, 3]);
// this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// using setTimeout we can execute code after the queue is empty
setTimeout(() => {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// logs
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }
```

### Asynchronicity or synchronicity of Promise.all

This following example demonstrates the asynchronicity (or synchronicity, if the
_iterable_ passed is empty) of `Promise.all`:

```js
// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.all(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the queue is empty
setTimeout(() => {
  console.log('the queue is now empty');
  console.log(p);
});

// logs, in order:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

The same thing happens if `Promise.all` rejects:

```js
const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
const p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(() => {
  console.log('the queue is now empty');
  console.log(p);
});

// logs
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "rejected", <reason>: 44 }
```

But, `Promise.all` resolves synchronously **if and only if**
the _iterable_ passed is empty:

```js
const p = Promise.all([]); // will be immediately resolved
const p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
console.log(p);
console.log(p2)
setTimeout(() => {
  console.log('the queue is now empty');
  console.log(p2);
});

// logs
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

### Promise.all fail-fast behavior

`Promise.all` is rejected if any of the elements are rejected. For example,
if you pass in four promises that resolve after a timeout and one promise that rejects
immediately, then `Promise.all` will reject immediately.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('one'), 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('two'), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('three'), 3000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('four'), 4000);
});
const p5 = new Promise((resolve, reject) => {
  reject(new Error('reject'));
});

// Using .catch:
Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error.message)
  });

// From console:
// "reject"
```

It is possible to change this behavior by handling possible rejections:

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p1_delayed_resolution'), 1000);
});

const p2 = new Promise((resolve, reject) => {
  reject(new Error('p2_immediate_rejection'));
});

Promise.all([
  p1.catch((error) => error),
  p2.catch((error) => error),
]).then((values) => {
  console.log(values[0]); // "p1_delayed_resolution"
  console.error(values[1]); // "Error: p2_immediate_rejection"
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- {{jsxref("Promise.race()")}}
