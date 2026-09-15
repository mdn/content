---
title: "Observable: first() method"
short-title: first()
slug: Web/API/Observable/first
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.first
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`first()`** method of the {{domxref("Observable")}} interface returns a promise that fulfills with the first value emitted by the source observable.

## Syntax

```js-nolint
first()
first(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} that can be used to cancel the operation. Aborting the signal unsubscribes from the source and rejects the promise with the signal's {{domxref("AbortSignal.reason", "reason")}}. If the signal is already aborted, the promise rejects without subscribing to the source.

### Return value

A {{jsxref("Promise")}} that resolves to the first value emitted by the source observable. If the source completes without emitting any values, the promise rejects with a {{jsxref("RangeError")}}.

If the source errors, the promise rejects with that error. If the operation is aborted, the promise rejects with the abort reason.

## Description

Like other promise-returning operators, this method subscribes to the source immediately when called. It does not require a separate call to {{domxref("Observable.subscribe", "subscribe()")}}.

As soon as the source emits a value, `first()` unsubscribes from it without waiting for it to complete. If the source never emits a value or completes, the promise remains pending unless the operation errors or is aborted.

If the selected value is a promise, the returned promise adopts its eventual state rather than fulfilling with the promise object itself.

## Examples

### Using first()

This example displays the coordinates of the first button click, then stops listening.

```html hidden live-sample___basic-first
<button>Click me</button>
<p>Waiting for clicks</p>
```

```js live-sample___basic-first
const btn = document.querySelector("button");
const output = document.querySelector("p");

btn
  .when("click")
  .first()
  .then((result) => {
    output.textContent = `${result.clientX},${result.clientY}`;
  });
```

{{EmbedLiveSample("basic-first", "100%", "100px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Observable.last()")}}
- {{domxref("Observable.find()")}}
- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
