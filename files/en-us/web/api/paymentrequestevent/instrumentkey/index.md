---
title: PaymentRequestEvent.instrumentKey
slug: Web/API/PaymentRequestEvent/instrumentKey
browser-compat: api.PaymentRequestEvent.instrumentKey
---
{{APIRef("Payment Request API")}}{{deprecated_header}}{{non-standard_header}}

The **`instrumentKey`** read-only property of the
{{domxref("PaymentRequestEvent")}} interface returns a
`PaymentInstrument` object reflecting the payment instrument selected by
the user or an empty string if the user has not registered or chosen a payment
instrument.

## Syntax

```js
var instrumentKey = paymentRequestEvent.instrumentKey
```

### Value

A `PaymentInstrument` object.

## Specifications

This feature is no longer part of any specification.

## Browser compatibility

{{Compat}}
