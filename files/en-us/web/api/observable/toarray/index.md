---
title: "Observable: toArray() method"
short-title: toArray()
slug: Web/API/Observable/toArray
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.toArray
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`toArray()`** method of the {{domxref("Observable")}} interface returns an array containing every value passed through the observable stream.

## Syntax

```js-nolint
toArray(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} object instance, which allows the operation to be aborted via the associated {{domxref("AbortController")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with an array containing every value passed through the stream.

If no values are passed through the stream before it completes, an empty array is returned.

## Examples

### Basic `toArray()` usage

This example returns all the values passing through an observable pipeline in a single array using a `toArray()` call.

```html hidden live-sample___basic-toArray
<p></p>
```

```js hidden live-sample___basic-toArray
const output = document.querySelector("p");
```

First, we create a new observable using the {{domxref("Observable.Observable", "Observable()")}} constructor. Inside the subscriber callback, we pass in four numbers to the value stream via {{domxref("Subscriber.next()")}} calls, before completing the subscription via {{domxref("Subscriber.complete()")}}.

```js live-sample___basic-toArray
const observable = new Observable((subscriber) => {
  subscriber.next(2);
  subscriber.next(2);
  subscriber.next(1);
  subscriber.next(4);
  subscriber.complete();
});
```

Next, we call `toArray()` on the observable and print the result to the screen:

```js live-sample___basic-toArray
observable.toArray().then((result) => {
  output.textContent = result;
});
```

#### Result

The rendered result is as follows:

{{EmbedLiveSample("basic-toArray", "100%", "60px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
