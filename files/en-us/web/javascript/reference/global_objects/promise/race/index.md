---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Promise
  - Reference
browser-compat: javascript.builtins.Promise.race
---
{{JSRef}}

The **`Promise.race()`** method returns a promise that fulfills
or rejects as soon as one of the promises in an iterable fulfills or rejects, with the
value or reason from that promise.

{{EmbedInteractiveExample("pages/js/promise-race.html", "taller")}}

## Syntax

```js
Promise.race(iterable)
```

### Parameters

- `iterable`
  - : An iterable object, such as an {{jsxref("Array")}}. See [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

### Return value

A **pending** {{jsxref("Promise")}} that **asynchronously**
yields the value of the first promise in the given iterable to fulfill or reject.

## Description

The `race` function returns a `Promise` that is settled the same
way (and takes the same value) as the first promise that settles amongst the promises of
the iterable passed as an argument.

If the iterable passed is empty, the promise returned will be forever pending.

If the iterable contains one or more non-promise value and/or an already settled
promise, then `Promise.race` will settle to the first of these values found
in the iterable.

## Examples

### Asynchronicity of Promise.race

This following example demonstrates the asynchronicity of `Promise.race`:

```js
// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.race as soon as possible
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.race(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(() => {
  console.log("the stack is now empty");
  console.log(p);
});

// logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 33 }
```

An empty iterable causes the returned promise to be forever pending:

```js
const foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(() => {
  console.log("the stack is now empty");
  console.log(foreverPendingPromise);
});

// logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "pending" }
```

If the iterable contains one or more non-promise value and/or an already settled
promise, then `Promise.race` will settle to the first of these values found
in the array:

```js
const foreverPendingPromise = Promise.race([]);
const alreadyFulfilledProm = Promise.resolve(100);

const arr = [foreverPendingPromise, alreadyFulfilledProm, "non-Promise value"];
const arr2 = [foreverPendingPromise, "non-Promise value", Promise.resolve(100)];
const p = Promise.race(arr);
const p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("the stack is now empty");
  console.log(p);
  console.log(p2);
});

// logs, in order:
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 100 }
// Promise { <state>: "fulfilled", <value>: "non-Promise value" }
```

### Using Promise.race – examples with setTimeout

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 500);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 100);
});

Promise.race([p1, p2]).then((value) => {
  console.log(value); // "two"
  // Both fulfill, but p2 is faster
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("three"), 100);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("four")), 500);
});

Promise.race([p3, p4]).then(
  (value) => {
    console.log(value); // "three"
    // p3 is faster, so it fulfills
  },
  (error) => {
    // Not called
  },
);

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("five"), 500);
});
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("six")), 100);
});

Promise.race([p5, p6]).then(
  (value) => {
    // Not called
  },
  (error) => {
    console.error(error.message); // "six"
    // p6 is faster, so it rejects
  },
);
```

### Comparison with Promise.any

`Promise.race` takes the first settled {{jsxref("Promise")}}.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

Promise.race([promise1, promise2])
  .then((value) => {
    console.log("succeeded with value:", value);
  })
  .catch((reason) => {
    // Only promise1 is fulfilled, but promise2 is faster
    console.error("failed with reason:", reason);
  });
// expected output: "failed with reason: two"
```

{{jsxref("Promise.any")}} takes the first fulfilled {{jsxref("Promise")}}.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

Promise.any([promise1, promise2])
  .then((value) => {
    // Only promise1 is fulfilled, even though promise2 settled sooner
    console.log("succeeded with value:", value);
  })
  .catch((reason) => {
    console.error("failed with reason:", reason);
  });
// expected output: "succeeded with value: one"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
