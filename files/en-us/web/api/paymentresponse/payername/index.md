---
title: PaymentRequest.payerName
slug: Web/API/PaymentResponse/payerName
tags:
  - API
  - Experimental
  - Payment Request
  - Payment Request API
  - PaymentResponse
  - Property
  - Reference
  - Secure context
browser-compat: api.PaymentResponse.payerName
---
{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`payerName`** read-only property of the
{{domxref("PaymentResponse")}} interface returns the name supplied by the user. This
option is only present when the `requestPayerName` option is set to
`true` in the options parameter of the
{{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} constructor.

## Syntax

```js
var payerName = PaymentResponse.payerName;
```

### Value

A string containing the payer name.

## Browser compatibility

{{Compat}}
