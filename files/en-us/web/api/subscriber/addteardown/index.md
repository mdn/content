---
title: "Subscriber: addTeardown() method"
short-title: addTeardown()
slug: Web/API/Subscriber/addTeardown
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Subscriber.addTeardown
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`addTeardown()`** method of the {{domxref("Subscriber")}} interface registers a callback to clean up resources when the subscription ends. This happens when {{domxref("Subscriber.complete()")}} or {{domxref("Subscriber.error()")}} is called, or when all observers [unsubscribe](/en-US/docs/Web/API/Observable_API/Using_observables#unsubscribing_from_an_observable).

The producer calls this method from the callback supplied to the {{domxref("Observable.Observable", "Observable()")}} constructor. Calling `addTeardown()` registers the cleanup function; it does not end the subscription.

## Syntax

```js-nolint
addTeardown(callback)
```

### Parameters

- `callback`
  - : A callback function that takes no arguments and runs when the subscription ends. Its return value is ignored, so a returned promise is not awaited.

### Return value

None ({{jsxref("undefined")}}).

## Description

Callbacks registered while the subscriber is active run synchronously, in reverse registration order, after {{domxref("Subscriber.active", "active")}} becomes `false` and {{domxref("Subscriber.signal", "signal")}} is aborted. When the producer calls `complete()` or `error()`, teardown callbacks run before the corresponding observer callbacks.

If the subscriber is already inactive when `addTeardown()` is called, the supplied callback runs immediately. If a teardown callback throws, the exception is reported to the global object and the remaining teardown callbacks still run.

## Examples

### Callback order

```js
const observable = new Observable((subscriber) => {
  subscriber.addTeardown(() => console.log("First registered"));
  subscriber.addTeardown(() => console.log("Second registered"));
  subscriber.complete();
  subscriber.addTeardown(() => console.log("Registered after completion"));
});

observable.subscribe({
  complete: () => console.log("Complete"),
});

// Second registered
// First registered
// Complete
// Registered after completion
```

See the main {{domxref("Subscriber")}} reference page for a basic example, and [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables) for additional examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
