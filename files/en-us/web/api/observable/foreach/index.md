---
title: "Observable: forEach() method"
short-title: forEach()
slug: Web/API/Observable/forEach
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.forEach
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`forEach()`** method of the {{domxref("Observable")}} interface performs a specified operation on every value passed through the observable stream.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, options)
```

### Parameters

- `callback`
  - : A callback function that run on every value that passes through the stream. The callback takes two parameters:
    - `value`
      - : The current value.
    - `index` {{optional_inline}}
      - : The value's position in the stream. The first position has a value of `0`, in the same manner as an array.
- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} object instance, which allows the operation to be aborted via the associated {{domxref("AbortController")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with {{jsxref("undefined")}}.

## Examples

### Basic `forEach()` usage

This example performs the same operation on all the values passing through an observable pipeline using a `forEach()` call.

```html hidden live-sample___basic-forEach
<p></p>
```

```js hidden live-sample___basic-forEach
const output = document.querySelector("p");
```

First, we create a new observable using the {{domxref("Observable.Observable", "Observable()")}} constructor. Inside the subscriber callback, we pass in four numbers to the value stream via {{domxref("Subscriber.next()")}} calls, before completing the subscription via {{domxref("Subscriber.complete()")}}.

```js live-sample___basic-forEach
const observable = new Observable((subscriber) => {
  subscriber.next(2);
  subscriber.next(2);
  subscriber.next(1);
  subscriber.next(4);
  subscriber.complete();
});
```

Next, we call `forEach()` on the observable; each value is multiplied by 2 and then printed to the screen, preceded by its index value and a colon character:

```js live-sample___basic-forEach
observable.forEach((value, index) => {
  const result = value * 2;
  output.textContent += `${index}:${result} `;
});
```

#### Result

The rendered result is as follows:

{{EmbedLiveSample("basic-forEach", "100%", "60px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
