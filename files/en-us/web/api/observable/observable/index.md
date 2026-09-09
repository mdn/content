---
title: "Observable: Observable() constructor"
short-title: Observable()
slug: Web/API/Observable/Observable
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.Observable.Observable
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`Observable()`** constructor creates a new {{domxref("Observable")}} object whose values and lifecycle are controlled by a callback.

## Syntax

```js-nolint
new Observable(callback)
```

### Parameters

- `callback`
  - : A function that starts producing values when a subscription starts. Its return value is ignored. The function is called with the following argument:
    - `subscriber`
      - : A {{domxref("Subscriber")}} used to send values with {{domxref("Subscriber.next", "next()")}}, signal completion or an error with {{domxref("Subscriber.complete", "complete()")}} or {{domxref("Subscriber.error", "error()")}}, and register cleanup with {{domxref("Subscriber.addTeardown", "addTeardown()")}}.

### Return value

A new {{domxref("Observable")}} object.

## Description

The constructor does not call `callback` immediately. It runs synchronously when the first observer subscribes. Additional observers share the same {{domxref("Subscriber")}} until it becomes inactive. A later subscription starts the callback again with a new subscriber. See [Creating an observable](/en-US/docs/Web/API/Observable_API/Creating_observables#creating_an_observable) for the subscription lifecycle.

If `callback` throws an exception, it is passed to `subscriber.error()`. An async callback's returned promise is ignored, so its rejection is not handled automatically. Handle asynchronous errors explicitly and forward them with `subscriber.error()` while the subscriber is active.

## Examples

### Observing element size

This example reports a resizable panel's dimensions using a custom observable backed by {{domxref("ResizeObserver")}}. Clicking Stop unsubscribes and disconnects the observer. See [Observing element size](/en-US/docs/Web/API/Observable_API/Creating_observables#example_observing_element_size) for the guide example.

```html hidden live-sample___constructor-resize
<div id="panel">Drag the corner to resize.</div>
<p></p>
<button>Stop</button>
```

```css hidden live-sample___constructor-resize
#panel {
  width: 200px;
  height: 100px;
  resize: both;
  overflow: auto;
  border: 1px solid;
}
```

```js live-sample___constructor-resize
const panel = document.querySelector("#panel");
const output = document.querySelector("p");
const btn = document.querySelector("button");

const sizes = new Observable((subscriber) => {
  const observer = new ResizeObserver(([entry]) => {
    subscriber.next(entry.contentRect);
  });
  observer.observe(panel);
  subscriber.addTeardown(() => observer.disconnect());
});

sizes.takeUntil(btn.when("click")).subscribe(({ width, height }) => {
  output.textContent = `${Math.round(width)} × ${Math.round(height)} pixels`;
});
```

{{EmbedLiveSample("constructor-resize", "100%", "250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
