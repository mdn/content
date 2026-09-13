---
title: "Observable: some() method"
short-title: some()
slug: Web/API/Observable/some
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.some
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`some()`** method of the {{domxref("Observable")}} interface returns a promise that fulfills with a boolean indicating whether any value emitted by the source observable satisfies the provided testing function.

## Syntax

```js-nolint
some(predicate)
some(predicate, options)
```

### Parameters

- `predicate`
  - : A function to execute for each value emitted by the source observable. It should return a [truthy](/en-US/docs/Glossary/Truthy) value to indicate the value passes the test, and a [falsy](/en-US/docs/Glossary/Falsy) value otherwise. The function is called with the following arguments:
    - `value`
      - : The current value being processed.
    - `index`
      - : The index of the current value being processed, starting from `0`.
- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} that can be used to cancel the operation. Aborting the signal unsubscribes from the source and rejects the promise with the signal's {{domxref("AbortSignal.reason", "reason")}}. If the signal is already aborted, the promise rejects without subscribing to the source.

### Return value

A {{jsxref("Promise")}} that fulfills with `true` as soon as `predicate` returns a truthy value, or `false` when the source completes without any value passing the test. If the source completes without emitting any values, the promise fulfills with `false`.

If the source errors or `predicate` throws an exception, the promise rejects with that error. If the operation is aborted, the promise rejects with the abort reason.

## Description

Like other promise-returning operators, this method subscribes to the source immediately when called. It does not require a separate call to {{domxref("Observable.subscribe", "subscribe()")}}.

When `predicate` returns a truthy value, `some()` unsubscribes from the source without waiting for it to complete. If the source never completes and no value passes the test, the promise remains pending unless the operation errors or is aborted.

The return value of `predicate` is converted to a boolean without awaiting it. An async function returns a truthy promise object regardless of its eventual result, so it cannot be used as an asynchronous test.

If `predicate` throws an exception, the operation unsubscribes from the source.

## Examples

### Using some()

This example checks whether Shift is held for any of the first three button clicks. It reports `true` as soon as a click passes the test, or `false` after all three fail.

```html hidden live-sample___basic-some
<button>Click me</button>
<p>Waiting for clicks</p>
```

```js live-sample___basic-some
const btn = document.querySelector("button");
const output = document.querySelector("p");

btn
  .when("click")
  .take(3)
  .some((event) => event.shiftKey)
  .then((result) => {
    output.textContent = result;
  });
```

{{EmbedLiveSample("basic-some", "100%", "100px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Observable.every()")}}
- {{domxref("Observable.find()")}}
- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
