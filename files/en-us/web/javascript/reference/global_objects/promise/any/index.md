---
title: Promise.any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
tags:
  - JavaScript
  - Method
  - Promise
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Promise.any
---

{{JSRef}}

`Promise.any()` takes an iterable of {{JSxRef("Promise")}} objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an {{JSxRef("AggregateError")}}, a new subclass of {{JSxRef("Error")}} that groups together individual errors.

{{EmbedInteractiveExample("pages/js/promise-any.html")}}

## Syntax

    Promise.any(iterable);

### Parameters

- `iterable`
  - : An [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) object, such as an {{JSxRef("Array")}}.

### Return value

- An **already rejected** {{JSxRef("Promise")}} if the _iterable_ passed is empty.
- An **asynchronously resolved** {{JSxRef("Promise")}} if the _iterable_ passed contains no promises.
- A **pending** {{JSxRef("Promise")}} in all other cases. This returned promise is then resolved/rejected **asynchronously** (as soon as the stack is empty) when any of the promises in the given _iterable_ resolve, or if all the promises have rejected.

## Description

This method is useful for returning the first promise that fulfills. It short-circuits after a promise fulfills, so it does not wait for the other promises to complete once it finds one. Unlike {{JSxRef("Promise.all()")}}, which returns an _array_ of fulfillment values, we only get one fulfillment value (assuming at least one promise fulfills). This can be beneficial if we need only one promise to fulfill but we do not care which one does. Note another difference: This method rejects upon receiving an _empty iterable_, since, truthfully, the iterable contains no items that fulfill.

Also, unlike {{JSxRef("Promise.race()")}}, which returns the first _settled_ value (either fulfillment or rejection), this method returns the first _fulfilled_ value. This method will ignore all rejected promises up until the first promise that fulfils.

### Fulfillment

The returned promise is fulfilled with **the first** resolved value (or non-promise value) in the _iterable_ passed as the argument, whether or not the other promises have rejected.

- If a nonempty _iterable_ is passed, and **any** of the promises fulfill, or are not promises, then the promise returned by this method is fulfilled asynchronously.

### Rejection

If all of the passed-in promises reject, `Promise.any` asynchronously rejects with an {{JSxRef("AggregateError")}} object, which extends {{JSxRef("Error")}}, and contains an `errors` property with an array of rejection values.

- If an empty _iterable_ is passed, then the promise returned by this method is rejected synchronously. The rejected reason is an `AggregateError` object whose `errors` property is an empty array.

## Examples

### First to fulfil

`Promise.any()` resolves with the first promise to fulfil, even if a promise rejects first. This is in contrast to {{jsxref("Promise.race()")}}, which resolves or rejects with the first promise to settle.

```js
const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
  // pFast fulfils first
});
// expected output: "Done quick"
```

### Rejections with AggregateError

`Promise.any()` rejects with an {{jsxref("AggregateError")}} if no promise fulfils.

```js
const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

Promise.any([pErr]).catch((err) => {
  console.log(err);
});
// expected output: "AggregateError: No Promise in Promise.any was resolved"
```

### Displaying the first image loaded

In this example, we have a function that fetches an image and returns a blob. We use `Promise.any()` to fetch a couple of images and display the first one available (i.e. whose promise has resolved).

```js
function fetchAndDecode(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.blob();
    }
  });
}

let coffee = fetchAndDecode("coffee.jpg");
let tea = fetchAndDecode("tea.jpg");

Promise.any([coffee, tea])
  .then((value) => {
    let objectURL = URL.createObjectURL(value);
    let image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.log(e.message);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Promise.any` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- {{JSxRef("Promise")}}
- {{JSxRef("Promise.allSettled()")}}
- {{JSxRef("Promise.all()")}}
- {{JSxRef("Promise.race()")}}
