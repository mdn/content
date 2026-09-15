---
title: "Subscriber: next() method"
short-title: next()
slug: Web/API/Subscriber/next
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Subscriber.next
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`next()`** method of the {{domxref("Subscriber")}} interface sends a value to each observer of the subscription, invoking its `next` callback synchronously. These callbacks are supplied to {{domxref("Observable.subscribe()")}}.

If the subscriber is no longer {{domxref("Subscriber.active", "active")}}, this method does nothing. An exception thrown by an observer's `next` callback is reported to the global object; it does not call that observer's `error` callback or stop delivery to other observers.

> [!NOTE]
> This shared-subscription behavior may change. A [proposal to give each observer its own `Subscriber`](https://github.com/WICG/observable/issues/217) would make each subscription start a separate execution instead of reusing an active subscription.

## Syntax

```js-nolint
next(value)
```

### Parameters

- `value`
  - : The value to send to observers. This can be any JavaScript value.

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
