---
title: Promise.any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
page-type: javascript-static-method
browser-compat: javascript.builtins.Promise.any
---

{{JSRef}}

The **`Promise.any()`** static method takes an iterable of promises as input and returns a single {{jsxref("Promise")}}. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an {{jsxref("AggregateError")}} containing an array of rejection reasons.

{{EmbedInteractiveExample("pages/js/promise-any.html")}}

## Syntax

```js-nolint
Promise.any(iterable)
```

### Parameters

- `iterable`
  - : An [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (such as an {{jsxref("Array")}}) of promises.

### Return value

A {{jsxref("Promise")}} that is:

- **Already rejected**, if the `iterable` passed is empty.
- **Asynchronously fulfilled**, when any of the promises in the given `iterable` fulfills. The fulfillment value is the fulfillment value of the first promise that was fulfilled.
- **Asynchronously rejected**, when all of the promises in the given `iterable` reject. The rejection reason is an {{jsxref("AggregateError")}} containing an array of rejection reasons in its `errors` property. The errors are in the order of the promises passed, regardless of completion order. If the `iterable` passed is non-empty but contains no pending promises, the returned promise is still asynchronously (instead of synchronously) rejected.

## Description

The `Promise.any()` method is one of the [promise concurrency](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) methods. This method is useful for returning the first promise that fulfills. It short-circuits after a promise fulfills, so it does not wait for the other promises to complete once it finds one.

Unlike {{JSxRef("Promise.all()")}}, which returns an _array_ of fulfillment values, we only get one fulfillment value (assuming at least one promise fulfills). This can be beneficial if we need only one promise to fulfill but we do not care which one does. Note another difference: this method rejects upon receiving an _empty iterable_, since, truthfully, the iterable contains no items that fulfill. You may compare `Promise.any()` and `Promise.all()` with {{jsxref("Array.prototype.some()")}} and {{jsxref("Array.prototype.every()")}}.

Also, unlike {{JSxRef("Promise.race()")}}, which returns the first _settled_ value (either fulfillment or rejection), this method returns the first _fulfilled_ value. This method ignores all rejected promises up until the first promise that fulfills.

## Examples

### Using Promise.any()

`Promise.any()` fulfills with the first promise to fulfill, even if a promise rejects first. This is in contrast to {{jsxref("Promise.race()")}}, which fulfills or rejects with the first promise to settle.

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
  // pFast fulfills first
});
// Logs:
// Done quick
```

### Rejections with AggregateError

`Promise.any()` rejects with an {{jsxref("AggregateError")}} if no promise fulfills.

```js
const failure = new Promise((resolve, reject) => {
  reject("Always fails");
});

Promise.any([failure]).catch((err) => {
  console.log(err);
});
// AggregateError: No Promise in Promise.any was resolved
```

### Displaying the first image loaded

In this example, we have a function that fetches an image and returns a blob. We use `Promise.any()` to fetch a couple of images and display the first one available (i.e. whose promise has resolved).

```js
async function fetchAndDecode(url, description) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.blob();
  return [data, description];
}

const coffee = fetchAndDecode("coffee.jpg", "Coffee");
const tea = fetchAndDecode("tea.jpg", "Tea");

Promise.any([coffee, tea])
  .then(([blob, description]) => {
    const objectURL = URL.createObjectURL(blob);
    const image = document.createElement("img");
    image.src = objectURL;
    image.alt = description;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.error(e);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Promise.any` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- {{JSxRef("Promise")}}
- {{JSxRef("Promise.all()")}}
- {{JSxRef("Promise.allSettled()")}}
- {{JSxRef("Promise.race()")}}
