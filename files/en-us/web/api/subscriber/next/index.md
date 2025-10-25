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

The **`next()`** method of the {{domxref("Subscriber")}} interface runs whenever a value is sent through the subscribed observable stream, to handle it.

Specifically, the functionality of the called `next()` method is defined in the {{domxref("Observable.subscribe()")}} method that was called to subscribe to the observable stream.

## Syntax

```js-nolint
next(value)
```

### Parameters

- `value` {{optional_inline}}
  - : The current value being passed through the observable stream.

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
