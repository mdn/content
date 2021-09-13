---
title: PaymentRequestEvent.methodData
slug: Web/API/PaymentRequestEvent/methodData
browser-compat: api.PaymentRequestEvent.methodData
---
{{SeeCompatTable}}{{APIRef("Payment Request API")}}

The **`methodData`** read-only property of the
{{domxref("PaymentRequestEvent")}} interface returns an array of
{{domxref("PaymentMethodData")}} objects containing payment method identifiers for the
payment methods that the web site accepts and any associated payment method specific
data.

## Syntax

```js
var methodData[] = paymentRequestEvent.methodData
```

### Value

An array of {{domxref("PaymentMethodData")}} objects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
