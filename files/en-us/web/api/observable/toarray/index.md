---
title: "Observable: toArray() method"
short-title: toArray()
slug: Web/API/Observable/toArray
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.toArray
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`toArray()`** method of the {{domxref("Observable")}} interface returns a promise that fulfills with a new array containing the source observable's values in the order they were emitted.

## Syntax

```js-nolint
toArray()
toArray(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} that can be used to cancel the operation. Aborting the signal unsubscribes from the source and rejects the promise with the signal's {{domxref("AbortSignal.reason", "reason")}}. If the signal is already aborted, the promise rejects without subscribing to the source.

### Return value

A {{jsxref("Promise")}} that fulfills with a new {{jsxref("Array")}} containing all source values in emission order when the source completes. If the source completes without emitting any values, the promise fulfills with an empty array.

If the source errors, the promise rejects with that error. If the operation is aborted, the promise rejects with the abort reason.

## Description

Like other promise-returning operators, this method subscribes to the source immediately when called. It does not require a separate call to {{domxref("Observable.subscribe", "subscribe()")}}.

`toArray()` stores each source value until the source completes. If the source never completes, the promise remains pending unless the operation errors or is aborted, and the array continues to grow as values arrive. Use {{domxref("Observable.take", "take()")}} or {{domxref("Observable.takeUntil", "takeUntil()")}} to limit the stream when necessary.

Source values are stored as-is. If a value is a promise, the array contains that promise object rather than its fulfillment value.

## Examples

### Using toArray()

This example collects the coordinates of the first three button clicks and displays them as an array in click order.

```html hidden live-sample___basic-toArray
<button>Click me</button>
<p>Waiting for clicks</p>
```

```js live-sample___basic-toArray
const btn = document.querySelector("button");
const output = document.querySelector("p");

btn
  .when("click")
  .take(3)
  .map((event) => ({ x: event.clientX, y: event.clientY }))
  .toArray()
  .then((result) => {
    output.textContent = JSON.stringify(result);
  });
```

{{EmbedLiveSample("basic-toArray", "100%", "100px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
