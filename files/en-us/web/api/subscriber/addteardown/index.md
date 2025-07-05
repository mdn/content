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

The **`addTeardown()`** method of the {{domxref("Subscriber")}} interface runs automatically after the subscription completes or is [unsubscribed](/en-US/docs/Web/API/Observable_API/Using#unsubscribing).

The functionality of the `addTeardown()` method is is defined inside the subscriber callback, unlike the other subscriber lifecycle callbacks, which are defined in the {{domxref("Observable.subscribe()")}} method that was called to subscribe to the observable stream.

## Syntax

```js-nolint
addTeardown(callback)
```

### Parameters

- `callback`
  - : A callback function that runs after the subscription completes or is unsubscribed.

### Return value

None ({{jsxref("undefined")}}).

## Examples

See the main {{domxref("Subscriber")}} reference page for a basic example, and [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using) for additional examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
