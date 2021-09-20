---
title: PaymentResponse.payerEmail
slug: Web/API/PaymentResponse/payerEmail
tags:
  - API
  - Experimental
  - Payment Request
  - Payment Request API
  - PaymentResponse
  - Property
  - Reference
  - Secure context
  - payerEmail
browser-compat: api.PaymentResponse.payerEmail
---
{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The `payerEmail` read-only property of the {{domxref("PaymentResponse")}}
interface returns the email address supplied by the user. This option is only present
when the `requestPayerEmail` option is set to `true` in the
{{domxref('PaymentOptions')}} object passed to the
{{domxref('PaymentRequest.PaymentRequest','PaymentRequest')}} constructor.

## Syntax

```js
var payerEmail = PaymentResponse.payerEmail;
```

## Browser compatibility

{{Compat}}
