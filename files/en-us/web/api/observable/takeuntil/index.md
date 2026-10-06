---
title: "Observable: takeUntil() method"
short-title: takeUntil()
slug: Web/API/Observable/takeUntil
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.takeUntil
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`takeUntil()`** method of the {{domxref("Observable")}} interface returns a new observable that emits values from the source observable until another observable emits a value or errors.

## Syntax

```js-nolint
takeUntil(value)
```

### Parameters

- `value`
  - : A value that can be converted to an observable by {{domxref("Observable.from_static", "Observable.from()")}}: an {{domxref("Observable")}}, a {{jsxref("Promise")}}, an iterable object, or an async iterable object. The converted observable acts as the notifier that determines when to stop emitting source values.

### Return value

A new {{domxref("Observable")}}. When subscribed to, it emits values from the source observable until the notifier emits a value or errors, then completes and unsubscribes from both observables. If the source completes or errors first, that notification is forwarded and the notifier is unsubscribed from.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `value` cannot be converted to an observable.

## Description

Like other observable-returning operators, this method is lazy: calling it creates a new observable without subscribing to the source. Processing starts when the returned observable is subscribed to.

The notifier is subscribed to before the source. If it emits a value or errors synchronously, the returned observable completes without subscribing to the source. If the notifier completes without emitting a value, the source continues uninterrupted.

A notifier error completes the returned observable successfully; it is not forwarded as an error.

You can technically pass a synchronous iterable as the `value`, but the converted observable either never emits if the iterable is empty (and `takeUntil()` never unsubscribes), or it immediately emits if the iterable is non-empty (and `takeUntil()` immediately unsubscribes).

## Examples

### Using takeUntil()

This example displays the mouse coordinates when the pointer moves over either of two `<div>` elements. Clicking anywhere in the example completes the observable and stops coordinate reporting. Click Restart after the stream ends to try again.

```html hidden live-sample___basic-takeUntil
<div></div>
<div></div>
<p></p>
<button id="restart" disabled>Restart</button>
```

```css hidden live-sample___basic-takeUntil
div {
  height: 120px;
  background-color: purple;
  margin-bottom: 40px;
}
```

```js live-sample___basic-takeUntil
const outputElem = document.querySelector("p");

const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  outputElem.textContent = "Move the mouse";
  document.body
    .when("mousemove")
    .filter((e) => e.target.matches("div"))
    .map((e) => ({ x: e.clientX, y: e.clientY }))
    .takeUntil(
      document.body.when("click").filter((event) => event.target !== restart),
    )
    .subscribe({
      next: reportCoords,
      complete() {
        restart.disabled = false;
      },
    });

  function reportCoords(e) {
    outputElem.textContent = `${e.x},${e.y}`;
  }
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("basic-takeUntil", "", 430)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
