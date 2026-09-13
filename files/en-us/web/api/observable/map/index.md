---
title: "Observable: map() method"
short-title: map()
slug: Web/API/Observable/map
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.map
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`map()`** method of the {{domxref("Observable")}} interface returns a new observable that emits the values of the source observable, each transformed by a mapping function.

## Syntax

```js-nolint
map(mapper)
```

### Parameters

- `mapper`
  - : A function to execute for each value emitted by the source observable. Its return value is emitted by the returned observable. The function is called with the following arguments:
    - `value`
      - : The current value being processed.
    - `index`
      - : The index of the current value being processed, starting from `0`.

### Return value

A new {{domxref("Observable")}}. When subscribed to, it calls `mapper` for each value emitted by the source observable and emits the return value. When the source completes, the returned observable also completes.

## Description

Like other observable-returning operators, this method is lazy: calling it creates a new observable without subscribing to the source. Processing starts when the returned observable is subscribed to.

If `mapper` throws an exception, the returned observable errors and unsubscribes from the source. Errors from the source are also forwarded.

The return value of `mapper` is emitted as-is. In particular, a returned promise is emitted as a promise object; it is not awaited. To emit values from a returned promise or another observable, use {{domxref("Observable.flatMap", "flatMap()")}} or {{domxref("Observable.switchMap", "switchMap()")}}.

## Examples

### Using map()

This example displays the mouse coordinates when the pointer moves over either of two `<div>` elements. The mapping function extracts the coordinates from each mouse event into an object with `x` and `y` properties.

```html hidden live-sample___basic-map
<div></div>
<div></div>
<p></p>
```

```css hidden live-sample___basic-map
div {
  height: 120px;
  background-color: purple;
  margin-bottom: 40px;
}
```

```js live-sample___basic-map
const outputElem = document.querySelector("p");

document.body
  .when("mousemove")
  .filter((e) => e.target.matches("div"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe({ next: reportCoords });

function reportCoords(e) {
  outputElem.textContent = `${e.x},${e.y}`;
}
```

{{EmbedLiveSample("basic-map", "100%", "360px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Observable.flatMap()")}}
- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
