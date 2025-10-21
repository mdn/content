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

The **`first()`** method of the {{domxref("Observable")}} interface returns a promise that fulfills with the first value passed through the observable stream.

## Syntax

```js-nolint
first(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} object instance, which allows the operation to be aborted via the associated {{domxref("AbortController")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with the first value passed through the stream.

If the observable stream is empty, the promise rejects with a `RangeError`.

## Examples

### Basic `first()` usage

This example passes observable pipeline values through a `first()` call.

```html hidden live-sample___basic-first
<p></p>
```

```js hidden live-sample___basic-first
const output = document.querySelector("p");
```

First, we create a new observable using the {{domxref("Observable.Observable", "Observable()")}} constructor. Inside the subscriber callback, we pass in four numbers to the value stream via {{domxref("Subscriber.next()")}} calls, before completing the subscription via {{domxref("Subscriber.complete()")}}.

```js live-sample___basic-first
const observable = new Observable((subscriber) => {
  subscriber.next(2);
  subscriber.next(4);
  subscriber.next(6);
  subscriber.next(8);
  subscriber.complete();
});
```

Next, we call `first()` on the observable. We then print the promise fulfillment value to the screen.

```js live-sample___basic-first
observable.first().then((result) => {
  output.textContent = result;
});
```

#### Result

The rendered result is as follows:

{{EmbedLiveSample("basic-first", "100%", "60px")}}

The reported fulfillment value is `2`, because it is the first value passed through the stream.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
