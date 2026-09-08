---
title: "Subscriber: signal property"
short-title: signal
slug: Web/API/Subscriber/signal
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Subscriber.signal
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`signal`** read-only property of the {{domxref("Subscriber")}} interface provides an {{domxref("AbortSignal")}} that is aborted when the subscription ends. A producer can pass this signal to APIs such as {{domxref("Window.fetch", "fetch()")}} to cancel work when it is no longer needed.

## Value

An internally created {{domxref("AbortSignal")}}. It is aborted when {{domxref("Subscriber.complete()")}} or {{domxref("Subscriber.error()")}} is called, or when all observers unsubscribe.

This is a different object from any signal passed to {{domxref("Observable.subscribe()")}}. A signal passed to `subscribe()` controls an individual observer's subscription; `subscriber.signal` tracks the shared subscription. When one observer unsubscribes, `subscriber.signal` remains active if other observers are still subscribed.

For cleanup that does not use an API accepting an `AbortSignal`, use {{domxref("Subscriber.addTeardown()")}}. Unlike registering an `abort` event listener, `addTeardown()` also runs the callback immediately if the subscriber is already inactive.

## Examples

### Canceling a fetch request

This example wraps a request for `/data.json` in an observable. Passing `subscriber.signal` to `fetch()` associates the request with the subscription's lifetime.

```js
const observable = new Observable((subscriber) => {
  fetch("/data.json", { signal: subscriber.signal })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      subscriber.next(data);
      subscriber.complete();
    })
    .catch((error) => {
      if (subscriber.active) {
        subscriber.error(error);
      }
    });
});

const controller = new AbortController();
observable.subscribe(
  {
    next: (data) => console.log(data),
    error: (error) => console.error(error),
  },
  { signal: controller.signal },
);

// To cancel the subscription and any pending request:
// controller.abort();
```

If `controller.abort()` is called while the request is pending, the only observer unsubscribes, which aborts `subscriber.signal` and cancels the request. The promise rejection handler checks `subscriber.active` so that cancellation does not cause a call to `error()` on an inactive subscriber, which would report an error to the global object.

On success, the producer sends the parsed data and completes the subscription. Request failures are forwarded to the observer's `error` callback while the subscription is active.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
