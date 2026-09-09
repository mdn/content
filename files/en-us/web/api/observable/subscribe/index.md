---
title: "Observable: subscribe() method"
short-title: subscribe()
slug: Web/API/Observable/subscribe
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.subscribe
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`subscribe()`** method of the {{domxref("Observable")}} interface subscribes to the observable, receiving its values, errors, and completion through observer callbacks.

## Syntax

```js-nolint
subscribe()
subscribe(observer)
subscribe(observer, options)
```

### Parameters

- `observer` {{optional_inline}}
  - : An object containing any of the following callback functions:
    - `next` {{optional_inline}}
      - : A function called with each value emitted by the observable.
    - `error` {{optional_inline}}
      - : A function called with the error when the observable errors. If omitted, the error is reported to the global object.
    - `complete` {{optional_inline}}
      - : A function called without arguments when the observable completes. Unsubscribing does not call this callback.

    Alternatively, `observer` can be a function, which is equivalent to passing an object with that function as its `next` callback. All callback return values are ignored.

- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} that can be used to unsubscribe this observer. If the signal is already aborted, the observer receives no notifications. See [Unsubscribing from an observable](/en-US/docs/Web/API/Observable_API/Using_observables#unsubscribing_from_an_observable).

### Return value

None ({{jsxref("undefined")}}).

## Description

Calling `subscribe()` starts a subscription immediately. Values may be delivered synchronously, before `subscribe()` returns. Multiple observers share the observable's active {{domxref("Subscriber")}}; unsubscribing one observer does not unsubscribe the others.

> [!NOTE]
> This shared-subscription behavior may change. A [proposal to give each observer its own `Subscriber`](https://github.com/WICG/observable/issues/217) would make each subscription start a separate execution instead of reusing an active subscription.

The observer's callbacks receive notifications from the producer. They do not define or replace the producer's `Subscriber` methods. An error or completion ends the subscription, so the observer receives no subsequent values.

If an observer callback throws an exception, it is reported to the global object without ending the subscription or calling the observer's `error` callback. Returned promises are not awaited, and their rejections are not handled by `subscribe()`.

## Examples

### Receiving values and completion

This example displays the coordinates of the first three button clicks, then a completion message. The observer's `next` callback handles each value, and its `complete` callback handles the end of the stream.

```html hidden live-sample___basic-subscribe
<button>Click me</button>
<p>Waiting for clicks</p>
```

```js live-sample___basic-subscribe
const btn = document.querySelector("button");
const output = document.querySelector("p");

btn
  .when("click")
  .take(3)
  .subscribe({
    next: (event) => {
      output.textContent = `${event.clientX},${event.clientY}`;
    },
    complete: () => {
      output.textContent += " — Complete.";
    },
  });
```

{{EmbedLiveSample("basic-subscribe", "100%", "100px")}}

### Unsubscribing

This example displays mouse coordinates until the Stop button is clicked. Aborting removes the observer without calling a completion callback.

```html hidden live-sample___unsubscribe
<button>Stop</button>
<p>Move the mouse</p>
```

```js live-sample___unsubscribe
const btn = document.querySelector("button");
const output = document.querySelector("p");
const controller = new AbortController();

document.body.when("mousemove").subscribe(
  (event) => {
    output.textContent = `${event.clientX},${event.clientY}`;
  },
  { signal: controller.signal },
);

btn
  .when("click")
  .take(1)
  .subscribe(() => controller.abort());
```

{{EmbedLiveSample("unsubscribe", "100%", "100px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
