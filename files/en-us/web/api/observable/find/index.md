---
title: "Observable: find() method"
short-title: find()
slug: Web/API/Observable/find
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.find
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`find()`** method of the {{domxref("Observable")}} interface returns the first value passed through the observable stream that passes a specified test, or {{jsxref("undefined")}} if no values pass.

## Syntax

```js-nolint
find(predicate)
find(predicate, options)
```

### Parameters

- `predicate`
  - : A callback function that contains a test. Each value passed through the observable stream is evaluated to see if it passes the test. The callback is passed two arguments:
    - `value` {{optional_inline}}
      - : The current value being tested.
    - `index` {{optional_inline}}
      - : A number representing the value's position in the stream. The first position has a value of `0`, in the same manner as an array.
- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} object instance, which allows the operation to be aborted via the associated {{domxref("AbortController")}}.

### Return value

A {{jsxref("Promise")}}:

- As soon as a value is found that passes the test, the promise fulfills with the value.
- If no value is found that passes the test, the promise fulfills with `undefined`.

## Examples

### Basic `find()` usage

This example tests several values passing through an observable pipeline using a `find()` call.

```html hidden live-sample___basic-find
<p></p>
```

```js hidden live-sample___basic-find
const output = document.querySelector("p");
```

First, we create a new observable using the {{domxref("Observable.Observable", "Observable()")}} constructor. Inside the subscriber callback, we pass in four numbers to the value stream via {{domxref("Subscriber.next()")}} calls, before completing the subscription via {{domxref("Subscriber.complete()")}}.

```js live-sample___basic-find
const observable = new Observable((subscriber) => {
  subscriber.next(0);
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});
```

Next, we call `find()` on the observable; the specified predicate tests whether each value is greater than `2`. We then print the promise fulfillment value to the screen.

```js live-sample___basic-find
observable
  .find((value) => value > 2)
  .then((result) => {
    output.textContent = result;
  });
```

#### Result

The rendered result is as follows:

{{EmbedLiveSample("basic-find", "100%", "60px")}}

The reported fulfillment value is `3`, because the fourth value is greater than `2`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
