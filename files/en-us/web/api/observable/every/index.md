---
title: "Observable: every() method"
short-title: every()
slug: Web/API/Observable/every
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.every
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`every()`** method of the {{domxref("Observable")}} interface returns a promise that fulfills with a boolean indicating whether every value passed through the observable stream passed a specified test.

## Syntax

```js-nolint
every(predicate)
every(predicate, options)
```

### Parameters

- `predicate`
  - : A callback function that contains a test. Each value passed through the observable stream is evaluated to see if it passes the test. The callback is passed two arguments:
    - `value`
      - : The current value being tested.
    - `index`
      - : A number representing the value's position in the stream. The first position has a value of `0`, in the same manner as an array.
- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} object instance, which allows the operation to be aborted via the associated {{domxref("AbortController")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with a boolean value:

- If any of the values fail the test, the promise fulfills with `false`, and the operation immediately completes.
- The promise fulfills with `true` only when the operation completes without any values failing the test.

## Examples

### Basic `every()` usage

This example tests several values passing through an observable pipeline using an `every()` call.

```html hidden live-sample___basic-every
<p></p>
```

```js hidden live-sample___basic-every
const output = document.querySelector("p");
```

First, we create a new observable using the {{domxref("Observable.Observable", "Observable()")}} constructor. Inside the subscriber callback, we pass in four numbers to the value stream via {{domxref("Subscriber.next()")}} calls, before completing the subscription via {{domxref("Subscriber.complete()")}}.

```js live-sample___basic-every
const observable = new Observable((subscriber) => {
  subscriber.next(2);
  subscriber.next(2);
  subscriber.next(1);
  subscriber.next(4);
  subscriber.complete();
});
```

Next, we call `every()` on the observable; the specified predicate tests whether each value is greater than `1`. We then print the promise fulfillment value to the screen.

```js live-sample___basic-every
observable
  .every((value) => value > 1)
  .then((result) => {
    output.textContent = result;
  });
```

#### Result

The rendered result is as follows:

{{EmbedLiveSample("basic-every", "100%", "60px")}}

The reported fulfillment value is `false`, because the third value is not greater than `1`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
