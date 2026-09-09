---
title: "Observable: flatMap() method"
short-title: flatMap()
slug: Web/API/Observable/flatMap
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.flatMap
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`flatMap()`** method of the {{domxref("Observable")}} interface returns a new observable that maps each value of the source observable to an inner observable and emits the inner observables' values sequentially.

## Syntax

```js-nolint
flatMap(mapper)
```

### Parameters

- `mapper`
  - : A function to execute for each value emitted by the source observable. It must return a value that can be converted to an observable by {{domxref("Observable.from_static", "Observable.from()")}}: an {{domxref("Observable")}}, a {{jsxref("Promise")}}, an iterable object, or an async iterable object. The function is called with the following arguments:
    - `value`
      - : The current value being processed.
    - `index`
      - : The index of the current value being processed, starting from `0`.

### Return value

A new {{domxref("Observable")}}. When subscribed to, it calls `mapper` for each source value, converts the return value to an observable, and emits that inner observable's values. It waits for the current inner observable to complete before calling `mapper` for the next source value. The returned observable completes after the source and all inner observables have completed.

## Description

Like other observable-returning operators, this method is lazy: calling it creates a new observable without subscribing to the source. Processing starts when the returned observable is subscribed to.

Source values that arrive while an inner observable is active are queued. If that inner observable never completes, later source values remain queued and their mapper calls do not run. To unsubscribe from the current inner observable when a new source value arrives, use {{domxref("Observable.switchMap", "switchMap()")}} instead.

If `mapper` throws an exception or its return value cannot be converted to an observable, the returned observable errors. Errors from the source or an inner observable are also forwarded. In each case, the returned observable unsubscribes from its source and any active inner observable.

## Examples

### Using flatMap()

This example displays mouse coordinates while dragging from a `<div>` element. Each mouse press starts an inner stream of mouse movements that ends when the mouse button is released. `flatMap()` forwards those movements and waits for the current inner stream to complete before processing another mouse press.

```html hidden live-sample___basic-flatMap
<div>Press here and drag.</div>
<p>Waiting for a drag</p>
```

```css hidden live-sample___basic-flatMap
div {
  height: 120px;
  background-color: lavender;
  user-select: none;
}
```

```js live-sample___basic-flatMap
const target = document.querySelector("div");
const output = document.querySelector("p");

target
  .when("mousedown")
  .flatMap(() => document.when("mousemove").takeUntil(document.when("mouseup")))
  .subscribe((event) => {
    output.textContent = `${event.clientX},${event.clientY}`;
  });
```

{{EmbedLiveSample("basic-flatMap", "100%", "200px")}}

For a more complete example, see [Canvas drawing](/en-US/docs/Web/API/Observable_API/Using_observables#example_canvas_drawing).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
