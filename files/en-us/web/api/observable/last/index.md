---
title: "Observable: last() method"
short-title: last()
slug: Web/API/Observable/last
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.last
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`last()`** method of the {{domxref("Observable")}} interface returns a promise that fulfills with the last value emitted by the source observable.

## Syntax

```js-nolint
last()
last(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} that can be used to cancel the operation. Aborting the signal unsubscribes from the source and rejects the promise with the signal's {{domxref("AbortSignal.reason", "reason")}}. If the signal is already aborted, the promise rejects without subscribing to the source.

### Return value

A {{jsxref("Promise")}} that resolves to the last value emitted by the source observable when the source completes. If the source completes without emitting any values, the promise rejects with a {{jsxref("RangeError")}}.

If the source errors, the promise rejects with that error. If the operation is aborted, the promise rejects with the abort reason.

## Description

Like other promise-returning operators, this method subscribes to the source immediately when called. It does not require a separate call to {{domxref("Observable.subscribe", "subscribe()")}}.

`last()` keeps the most recent value and waits for the source to complete. If the source never completes, the promise remains pending unless the operation errors or is aborted.

If the selected value is a promise, the returned promise adopts its eventual state rather than fulfilling with the promise object itself.

## Examples

### Using last()

This example waits for three button clicks, then displays the coordinates of the last click.

```html hidden live-sample___basic-last
<button>Click me</button>
<p>Waiting for clicks</p>
```

```js live-sample___basic-last
const btn = document.querySelector("button");
const output = document.querySelector("p");

btn
  .when("click")
  .take(3)
  .last()
  .then((result) => {
    output.textContent = `${result.clientX},${result.clientY}`;
  });
```

{{EmbedLiveSample("basic-last", "100%", "100px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Observable.first()")}}
- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
