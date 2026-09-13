---
title: "Observable: forEach() method"
short-title: forEach()
slug: Web/API/Observable/forEach
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.forEach
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`forEach()`** method of the {{domxref("Observable")}} interface returns a promise that fulfills with {{jsxref("undefined")}} when the source observable completes, after executing a callback for each emitted value.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, options)
```

### Parameters

- `callback`
  - : A function to execute for each value emitted by the source observable. Its return value is ignored. The function is called with the following arguments:
    - `value`
      - : The current value being processed.
    - `index`
      - : The index of the current value being processed, starting from `0`.
- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} that can be used to cancel the operation. Aborting the signal unsubscribes from the source and rejects the promise with the signal's {{domxref("AbortSignal.reason", "reason")}}. If the signal is already aborted, the promise rejects without subscribing to the source.

### Return value

A {{jsxref("Promise")}} that fulfills with {{jsxref("undefined")}} when the source observable completes.

If the source errors or `callback` throws an exception, the promise rejects with that error. If the operation is aborted, the promise rejects with the abort reason.

## Description

Like other promise-returning operators, this method subscribes to the source immediately when called. It does not require a separate call to {{domxref("Observable.subscribe", "subscribe()")}}.

`forEach()` calls `callback` once for each source value. If the source never completes, the promise remains pending unless the operation errors or is aborted.

The return value of `callback` is ignored. Returned promises are not awaited, and their rejections are not handled by `forEach()`. To wait for asynchronous work for each value, use {{domxref("Observable.flatMap", "flatMap()")}} to return a promise from the mapper.

If `callback` throws an exception, the operation unsubscribes from the source.

## Examples

### Using forEach()

This example displays the coordinates of each of the first three button clicks, then adds a completion message.

```html hidden live-sample___basic-forEach
<button>Click me</button>
<p>Waiting for clicks</p>
```

```js live-sample___basic-forEach
const btn = document.querySelector("button");
const output = document.querySelector("p");

btn
  .when("click")
  .take(3)
  .forEach((event, index) => {
    output.textContent = `Click ${index + 1}: ${event.clientX},${event.clientY}`;
  })
  .then(() => {
    output.textContent += " — Count complete.";
  });
```

{{EmbedLiveSample("basic-forEach", "100%", "100px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Observable.find()")}}
- {{domxref("Observable.map()")}}
- {{domxref("Observable.filter()")}}
- {{domxref("Observable.every()")}}
- {{domxref("Observable.some()")}}
- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
