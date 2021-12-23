---
title: PaymentRequestEvent.respondWith()
slug: Web/API/PaymentRequestEvent/respondWith
tags:
  - API
  - Method
  - Payment Request API
  - PaymentRequestEvent
  - Reference
  - payment
  - respondWith()
browser-compat: api.PaymentRequestEvent.respondWith
---
{{APIRef("Payment Request API")}}{{SeeCompatTable}}

The **`respondWith`** property of the
{{domxref("PaymentRequestEvent")}} interface prevents the default event handling and
allows you to provide a {{jsxref("Promise")}} for a {{domxref("PaymentResponse")}}
object yourself.

## Syntax

```js
paymentRequestEvent.respondWith(
  // Promise that resolves with a PaymentResponse.
)
```

### Parameters

- promise
  - : A {{jsxref('Promise')}} that resolves with a {{domxref("PaymentResponse")}} object.

### Return value

A {{domxref("PaymentResponse")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
