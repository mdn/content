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

The **`reduce()`** method of the {{domxref("Observable")}} interface returns an accumulated value calculated by running a reducer function on every value passed through the observable stream.

## Syntax

```js-nolint
reduce(reducer)
reduce(reducer, initialValue)
reduce(reducer, options)
reduce(reducer, initialValue, options)
```

### Parameters

- `reducer`
  - : A function that runs on every value that passes through the stream; the result of each iteration is passed to the next iteration via the accumulator. The callback takes three parameters:
    - `accumulator`
      - : On each iteration, the value of the `accumulator` is the return value of the previous reducer function's iteration, except for the first iteration, in which case it is the `initialValue`. If no `initialValue` is set, the `accumulator` equals the first value passed through the stream.
    - `value`
      - : The current value.
    - `index` {{optional_inline}}
      - : The value's position in the stream. The first position has a value of `0`, in the same manner as an array.
- `initialValue` {{optional_inline}}
  - : Sets an initial value for the `accumulator`.
- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} object instance, which allows the operation to be aborted via the associated {{domxref("AbortController")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with the final value of the `accumulator` after the last iteration.

## Examples

### Basic `reduce()` usage

This example uses a `reduce()` call to add all the values passing through an observable pipeline together.

```html hidden live-sample___basic-reduce
<p></p>
```

```js hidden live-sample___basic-reduce
const output = document.querySelector("p");
```

First, we create a new observable using the {{domxref("Observable.Observable", "Observable()")}} constructor. Inside the subscriber callback, we pass in four numbers to the value stream via {{domxref("Subscriber.next()")}} calls, before completing the subscription via {{domxref("Subscriber.complete()")}}.

```js live-sample___basic-reduce
const observable = new Observable((subscriber) => {
  subscriber.next(3);
  subscriber.next(2);
  subscriber.next(11);
  subscriber.next(4);
  subscriber.complete();
});
```

Next, we call `reduce()` on the observable. In the reducer function, we add the current value to the accumulator on each iteration. We also set an initial value of `0`. We then output the sum of all the values to the screen.

```js live-sample___basic-reduce
observable
  .reduce((acc, value) => {
    return (acc += value);
  }, 0)
  .then((result) => {
    output.textContent = result;
  });
```

#### Result

The rendered result is as follows:

{{EmbedLiveSample("basic-reduce", "100%", "60px")}}

The result is `20`, which is the sum of all the values passed through the stream.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
