---
title: "Observable: from() static method"
short-title: from()
slug: Web/API/Observable/from_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.Observable.from_static
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`from()`** method of the {{domxref("Observable")}} interface returns a new observable constructed from the value passed into the method as an argument.

## Syntax

```js-nolint
from(value)
```

### Parameters

- `value`
  - : A value to convert to an observable, which can be a {{jsxref("Promise")}}, an {{jsxref("AsyncIterator")}}, an {{jsxref("Iterator")}}, or an existing {{domxref("Observable")}}. If `value` is an observable, the same given object is returned.

### Return value

An {{domxref("Observable")}}.

### Exceptions

- `TypeError` {{domxref("DOMException")}}
  - : Thrown if `value` is not one of the convertible object types listed in the [Parameters](#parameters) section.

## Examples

### Basic `from()` example

In this example, we will convert a basic {{jsxref("Promise")}} to an observable using the `from()` method.

First, we create a promise using the {{jsxref("Promise.Promise", "Promise()")}} constructor. The promise resolves with a string value.

```js
const promise = new Promise((resolve) => {
  resolve("Promise resolve value");
});
```

Next, we pass the promise into a `from()` call to convert it to an observable. To show that this is an observable, we then call {{domxref("Observable.subscribe()")}} on the return value, passing in an object containing:

- A `next()` definition that logs the value passing through the stream to the console.
- A `complete()` definition that logs "Subscription complete" to the console.

```js
const observable = Observable.from(promise).subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log(`Subscription complete`);
  },
});
```

When the above code is run, we get the following values logged to the console:

```plain
Promise resolve value
Subscription complete
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
