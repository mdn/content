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

The **`last()`** method of the {{domxref("Observable")}} interface returns the last value passed through the observable stream.

## Syntax

```js-nolint
last(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} object instance, which allows the operation to be aborted via the associated {{domxref("AbortController")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with the last value passed through the stream.

If the observable stream is empty, the promise rejects with a `RangeError`.

## Examples

### Basic `last()` usage

This example passes observable pipeline values through a `last()` call.

```html hidden live-sample___basic-last
<p></p>
```

```js hidden live-sample___basic-last
const output = document.querySelector("p");
```

First, we create a new observable using the {{domxref("Observable.Observable", "Observable()")}} constructor. Inside the subscriber callback, we pass in four numbers to the value stream via {{domxref("Subscriber.next()")}} calls, before completing the subscription via {{domxref("Subscriber.complete()")}}.

```js live-sample___basic-last
const observable = new Observable((subscriber) => {
  subscriber.next(2);
  subscriber.next(4);
  subscriber.next(6);
  subscriber.next(8);
  subscriber.complete();
});
```

Next, we call `last()` on the observable. We then print the promise fulfillment value to the screen.

```js live-sample___basic-last
observable.last().then((result) => {
  output.textContent = result;
});
```

#### Result

The rendered result is as follows:

{{EmbedLiveSample("basic-last", "100%", "60px")}}

The reported fulfillment value is `8`, because it is the last value passed through the stream.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
