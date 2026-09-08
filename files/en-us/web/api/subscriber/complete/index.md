---
title: "Subscriber: complete() method"
short-title: complete()
slug: Web/API/Subscriber/complete
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Subscriber.complete
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`complete()`** method of the {{domxref("Subscriber")}} interface closes the subscription and notifies observers that the stream has completed successfully.

Calling this method sets {{domxref("Subscriber.active", "active")}} to `false`, aborts {{domxref("Subscriber.signal", "signal")}}, and runs the registered [teardown callbacks](/en-US/docs/Web/API/Subscriber/addTeardown). It then synchronously invokes each observer's `complete` callback supplied to {{domxref("Observable.subscribe()")}}. If the subscriber is already inactive, this method does nothing. Calling `complete()` does not stop execution of the producer's code; subsequent calls to {{domxref("Subscriber.next()")}} on this subscriber have no effect.

[Unsubscribing](/en-US/docs/Web/API/Observable_API/Using_observables#unsubscribing_from_an_observable) does not invoke an observer's `complete` callback. Use `addTeardown()` for cleanup that must also run when observers unsubscribe or the stream errors.

## Syntax

```js-nolint
complete()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

See the main {{domxref("Subscriber")}} reference page for a basic example, and [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables) for additional examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
