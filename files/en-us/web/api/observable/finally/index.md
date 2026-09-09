---
title: "Observable: finally() method"
short-title: finally()
slug: Web/API/Observable/finally
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.finally
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`finally()`** method of the {{domxref("Observable")}} interface returns a new observable that mirrors the source observable and calls a callback when its subscription ends.

## Syntax

```js-nolint
finally(callback)
```

### Parameters

- `callback`
  - : A function to execute when the subscription ends through completion, an error, or all observers unsubscribing. The function is called without arguments. Its return value is ignored.

### Return value

A new {{domxref("Observable")}}. When subscribed to, it emits the source observable's values and forwards its completion or error, running `callback` when the subscription ends.

## Description

Like other observable-returning operators, this method is lazy: calling it creates a new observable without subscribing to the source. Processing starts when the returned observable is subscribed to.

The callback is registered as a teardown on the returned observable's {{domxref("Subscriber")}}. It runs synchronously before the observers' completion or error callbacks, and also runs if all observers unsubscribe. For details on teardown behavior, see {{domxref("Subscriber.addTeardown()")}}.

If `callback` throws an exception, it is reported to the global object without changing the stream's completion or error. A returned promise is not awaited, and its rejection is not handled by `finally()`.

## Examples

### Using finally()

This example displays mouse coordinates until the Stop button is clicked. The `finally()` callback adds a message when coordinate reporting ends.

```html hidden live-sample___basic-finally
<button>Stop</button>
<p>Move the mouse</p>
```

```js live-sample___basic-finally
const btn = document.querySelector("button");
const output = document.querySelector("p");

document.body
  .when("mousemove")
  .takeUntil(btn.when("click"))
  .finally(() => {
    output.textContent += " — Reporting stopped.";
  })
  .subscribe((event) => {
    output.textContent = `${event.clientX},${event.clientY}`;
  });
```

{{EmbedLiveSample("basic-finally", "100%", "100px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Observable.catch()")}}
- {{domxref("Subscriber.addTeardown()")}}
- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
