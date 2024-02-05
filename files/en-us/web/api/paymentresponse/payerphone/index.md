---
title: "PayerResponse: payerPhone property"
short-title: payerPhone
slug: Web/API/PaymentResponse/payerPhone
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.PaymentResponse.payerPhone
---

{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The `payerPhone` read-only property of the {{domxref("PaymentResponse")}}
interface returns the phone number supplied by the user. This option is only present
when the `requestPayerPhone` option is set to `true` in the
{{domxref('PaymentOptions')}} object passed to the
{{domxref('PaymentRequest.PaymentRequest','PaymentRequest')}} constructor.

## Value

A string.

## Browser compatibility

{{Compat}}
