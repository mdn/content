---
title: PaymentAddress.recipient
slug: Web/API/PaymentAddress/recipient
tags:
  - API
  - Payment Request
  - Payment Request API
  - PaymentRequest
  - Property
  - Reference
  - paymentAddress
browser-compat: api.PaymentAddress.recipient
---
{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The read-only **`recipient`** property of the
{{domxref('PaymentAddress')}} interface returns a string containing the name of the
recipient, purchaser, or contact person at the payment address.

## Syntax

```js
var paymentRecipient = PaymentAddress.recipient;
```

### Value

A {{domxref("DOMString")}} giving the name of the person receiving  or paying for the
purchase, or the name of a contact person in other contexts. If no name is available,
this string is empty.

## Browser compatibility

{{Compat}}
