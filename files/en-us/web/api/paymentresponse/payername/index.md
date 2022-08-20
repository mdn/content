---
title: PaymentRequest.payerName
slug: Web/API/PaymentResponse/payerName
page-type: web-api-instance-property
tags:
  - API
  - Payment Request
  - Payment Request API
  - PaymentResponse
  - Property
  - Reference
  - Secure context
  - Deprecated
  - Non-standard
browser-compat: api.PaymentResponse.payerName
---
{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`payerName`** read-only property of the
{{domxref("PaymentResponse")}} interface returns the name supplied by the user. This
option is only present when the `requestPayerName` option is set to
`true` in the options parameter of the
{{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} constructor.

## Value

A string containing the payer name.

## Browser compatibility

{{Compat}}
