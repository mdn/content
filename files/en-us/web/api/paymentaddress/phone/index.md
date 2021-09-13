---
title: PaymentAddress.phone
slug: Web/API/PaymentAddress/phone
tags:
  - API
  - Address
  - Payment Request
  - Payment Request API
  - PaymentRequest
  - Phone
  - Phone Number
  - Property
  - Read-only
  - Reference
  - Téléphone
  - payment
  - paymentAddress
browser-compat: api.PaymentAddress.phone
---
{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The read-only **`phone`** property of the
{{domxref('PaymentAddress')}} interface returns a string containing the telephone number
of the recipient or contact person.

## Syntax

```js
var paymentPhone = PaymentAddress.phone;
```

### Value

A {{domxref("DOMString")}} containing the telephone number for the recipient of the
shipment or of the responsible party for payment. If no phone number is available, this
value is an empty string.

## Browser compatibility

{{Compat}}
