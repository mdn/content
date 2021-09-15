---
title: PaymentCurrencyAmount.currencySystem
slug: Web/API/PaymentCurrencyAmount/currencySystem
tags:
  - API
  - Commerce
  - Currency
  - Currency System
  - Money
  - Deprecated
  - Payment Request
  - Payment Request API
  - PaymentCurrencyAmount
  - Property
  - Reference
  - payment
browser-compat: api.PaymentCurrencyAmount.currencySystem
---
{{APIRef("Payment Request API")}} {{Deprecated_Header}}

{{securecontext_header}}

The _obsolete_ {{domxref("PaymentCurrencyAmount")}}
property **`currencySystem`** is a string which specifies the
standard being used to specify the {{domxref("PaymentCurrencyAmount.currency",
    "currency")}} the {{domxref("PaymentCurrencyAmount.value", "value")}} is specified
in. For example, the default is `urn:iso:std:iso:4217`, which
specifies that the standard used is {{interwiki("wikipedia", "ISO 4217")}}.

> **Warning:** This property has been removed from the specification and should no longer be used;
> the currency is now _always_ specified using ISO 4127.

## Syntax

```js
currencySystem = paymentCurrencyAmount.currencySystem;
```

### Value

A {{domxref("DOMString")}} which specifies the currency standard used to specify the
{{domxref("PaymentCurrencyAmount.currency", "currency")}} in which the payment value is
represented. The default, `urn:iso:std:iso:4217`, indicates the [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) standard.

## Specifications

This property was removed in the [May 3, 2018 update](https://www.w3.org/TR/2018/CR-payment-request-20180503)
of the Payment Request API specification. This feature is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using
  the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing
  concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
