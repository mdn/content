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

The **`complete()`** method of the {{domxref("Subscriber")}} interface runs to complete the subscription.

Specifically, the functionality of the called `complete()` method is defined in the {{domxref("Observable.subscribe()")}} method that was called to subscribe to the observable stream.

## Syntax

```js-nolint
complete()
```

### Parameters

None.

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
