---
title: "Observable: reduce() method"
short-title: reduce()
slug: Web/API/Observable/reduce
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.reduce
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`reduce()`** method of the {{domxref("Observable")}} interface returns a promise that fulfills with a single value obtained by combining the source observable's values using a reducer function.

## Syntax

```js-nolint
reduce(reducer)
reduce(reducer, initialValue)
reduce(reducer, initialValue, options)
```

### Parameters

- `reducer`
  - : A function that combines source values into an accumulator. Its return value becomes the `accumulator` argument on the next call. The function is called with the following arguments:
    - `accumulator`
      - : The value returned by the previous call to `reducer`. On the first call, it is `initialValue` if supplied, or the first source value otherwise.
    - `value`
      - : The current value being processed. On the first call, it is the first source value if `initialValue` is supplied, or the second source value otherwise.
    - `index`
      - : The index of the current value being processed. On the first call, it is `0` if `initialValue` is supplied, or `1` otherwise.
- `initialValue` {{optional_inline}}
  - : The initial value of the accumulator. If omitted, the first source value is used, and the reducer starts with the second source value. Supplying `undefined` explicitly counts as providing an initial value.
- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} that can be used to cancel the operation. Aborting the signal unsubscribes from the source and rejects the promise with the signal's {{domxref("AbortSignal.reason", "reason")}}. If the signal is already aborted, the promise rejects without subscribing to the source.

### Return value

A {{jsxref("Promise")}} that resolves to the final accumulator when the source completes. If the source completes without emitting any values, the promise resolves to `initialValue` if supplied, or rejects with a {{jsxref("TypeError")}} otherwise.

If the source errors or `reducer` throws an exception, the promise rejects with that error. If the operation is aborted, the promise rejects with the abort reason.

## Description

Like other promise-returning operators, this method subscribes to the source immediately when called. It does not require a separate call to {{domxref("Observable.subscribe", "subscribe()")}}.

If `initialValue` is supplied, `reducer` is called for each source value, starting at index `0`. Otherwise, the first source value initializes the accumulator, and `reducer` starts with the second value at index `1`. If the source emits only one value and no initial value is supplied, the promise resolves to that value without calling `reducer`.

The return value of `reducer` is passed to the next call as-is, without awaiting it. If the final accumulator is a promise, the returned promise adopts its eventual state. If the source never completes, the promise remains pending unless the operation errors or is aborted.

If `reducer` throws an exception, the operation unsubscribes from the source.

## Examples

### Using reduce()

This example counts the first five button clicks with an accumulator, then displays the total when the stream completes.

```html hidden live-sample___basic-reduce
<button>Click me</button>
<p>Waiting for clicks</p>
```

```js live-sample___basic-reduce
const btn = document.querySelector("button");
const output = document.querySelector("p");

btn
  .when("click")
  .take(5)
  .reduce((count) => count + 1, 0)
  .then((result) => {
    output.textContent = `Total clicks: ${result}`;
  });
```

{{EmbedLiveSample("basic-reduce", "100%", "100px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Observable.map()")}}
- {{domxref("Observable.flatMap()")}}
- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
