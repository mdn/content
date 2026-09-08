---
title: "Observable: filter() method"
short-title: filter()
slug: Web/API/Observable/filter
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.filter
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`filter()`** method of the {{domxref("Observable")}} interface returns a new observable that emits only those values of the source observable for which the provided callback function returns a truthy value.

## Syntax

```js-nolint
filter(predicate)
```

### Parameters

- `predicate`
  - : A function to execute for each value emitted by the source observable. It should return a [truthy](/en-US/docs/Glossary/Truthy) value to have the value emitted by the returned observable, and a [falsy](/en-US/docs/Glossary/Falsy) value otherwise. The function is called with the following arguments:
    - `value`
      - : The current value being processed.
    - `index`
      - : The index of the current value being processed, starting from `0`.

### Return value

A new {{domxref("Observable")}}. When subscribed to, it calls `predicate` for each value emitted by the source observable and emits the value only if `predicate` returns a truthy value. When the source completes, the returned observable also completes.

## Description

Like other observable-returning operators, this method is lazy: calling it creates a new observable without subscribing to the source. Processing starts when the returned observable is subscribed to.

If `predicate` throws an exception, the returned observable errors and unsubscribes from the source. Errors from the source are also forwarded.

The `index` counts all source values, including those that are filtered out. The return value of `predicate` is converted to a boolean without awaiting it, so an async function returns a truthy promise object regardless of its eventual result.

## Examples

### Using filter()

This example displays the mouse coordinates only when the pointer moves over either of two `<div>` elements. The filter excludes events whose target is another element.

```html hidden live-sample___basic-filter
<div></div>
<div></div>
<p></p>
```

```css hidden live-sample___basic-filter
div {
  height: 120px;
  background-color: purple;
  margin-bottom: 40px;
}
```

```js live-sample___basic-filter
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

{{EmbedLiveSample("basic-filter", "100%", "360px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Observable.forEach()")}}
- {{domxref("Observable.every()")}}
- {{domxref("Observable.map()")}}
- {{domxref("Observable.some()")}}
- {{domxref("Observable.reduce()")}}
- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
