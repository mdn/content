---
title: "Observable: drop() method"
short-title: drop()
slug: Web/API/Observable/drop
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.drop
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`drop()`** method of the {{domxref("Observable")}} interface returns a new observable that skips the given number of values at the start of the source observable.

## Syntax

```js-nolint
drop(amount)
```

### Parameters

- `amount`
  - : The number of values to drop from the start of the source observable. It should be an unsigned integer.

### Return value

A new {{domxref("Observable")}}. When subscribed to, it skips the first `amount` values emitted by the source observable, then emits the remaining values. If the source completes before emitting `amount` values, the returned observable completes without emitting any values.

## Description

Like other observable-returning operators, this method is lazy: calling it creates a new observable without subscribing to the source. Processing starts when the returned observable is subscribed to.

If `amount` is `0`, all source values are forwarded. Errors from the source are forwarded even while values are being skipped.

## Examples

### Using drop()

This example ignores the first three button clicks, then displays a count of subsequent clicks.

```html hidden live-sample___basic-drop
<button>Click me</button>
<p>Click count: 0</p>
```

```js live-sample___basic-drop
const btn = document.querySelector("button");
const para = document.querySelector("p");

let countValue = 0;

function increment() {
  countValue++;
  para.textContent = `Click count: ${countValue}`;
}

btn.when("click").drop(3).subscribe(increment);
```

{{EmbedLiveSample("basic-drop", "100%", "80px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Observable.take()")}}
- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
