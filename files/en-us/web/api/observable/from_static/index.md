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

The **`from()`** static method of the {{domxref("Observable")}} interface returns an observable converted from a promise, iterable, or async iterable, or returns an existing observable unchanged.

## Syntax

```js-nolint
Observable.from(value)
```

### Parameters

- `value`
  - : An object to convert to an observable: an {{domxref("Observable")}}, a {{jsxref("Promise")}}, an [iterable object](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), or an [async iterable object](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).

### Return value

An {{domxref("Observable")}}. If `value` is already an observable, it is returned unchanged. Otherwise, a new observable is returned that emits values from `value` when subscribed to.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `value` cannot be converted to an observable. Primitive values, including strings, are not accepted.

## Description

The conversion checks for an existing observable first, then an async iterable, then an iterable, and finally a promise.

- A promise contributes its fulfillment value, followed by completion. A rejection becomes an error.
- An iterable contributes its values synchronously, followed by completion when the iterator is exhausted.
- An async iterable contributes its values as they become available, followed by completion when the iterator is exhausted.

Errors while iterating become errors in the observable.

Calling `from()` does not subscribe to the returned observable. However, converting an existing promise does not defer the work that created it. Unsubscribing also does not cancel that work. If the promise rejects after the subscriber becomes inactive, the error is reported to the global object.

## Examples

### Converting a promise

This example converts a promise for the first button click into an observable. It displays the click's coordinates, then a completion message.

```html hidden live-sample___from-promise
<button>Click me</button>
<p>Waiting for a click</p>
```

```js live-sample___from-promise
const btn = document.querySelector("button");
const output = document.querySelector("p");
const firstClick = btn.when("click").first();

Observable.from(firstClick).subscribe({
  next: (event) => {
    output.textContent = `${event.clientX},${event.clientY}`;
  },
  complete: () => {
    output.textContent += " — Complete.";
  },
});
```

{{EmbedLiveSample("from-promise", "100%", "100px")}}

### Converting an async iterable

This example logs chunks of text from a fetched file. The decoded {{domxref("ReadableStream")}} is an async iterable; each chunk may contain part of a line or several lines.

```js
const response = await fetch("/data.txt");
if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
}

const textStream = response.body.pipeThrough(new TextDecoderStream());

Observable.from(textStream).subscribe({
  next: (chunk) => console.log(chunk),
  error: (error) => console.error("Reading failed:", error),
  complete: () => console.log("Stream complete"),
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
