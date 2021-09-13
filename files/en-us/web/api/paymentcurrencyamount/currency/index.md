---
title: PaymentCurrencyAmount.currency
slug: Web/API/PaymentCurrencyAmount/currency
tags:
  - API
  - Commerce
  - Currency
  - Monetary System
  - Money
  - Payment Request
  - Payment Request API
  - PaymentCurrencySystem
  - Reference
  - payment
browser-compat: api.PaymentCurrencyAmount.currency
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The {{domxref("PaymentCurrencyAmount")}} property
**`currency`** is a string which specifies the currency in
which the {{domxref("PaymentCurrencyAmount.value", "value")}} is specified.

The
value is always specified using the 3-letter codes defined by the [ISO 4127](https://www.iso.org/iso-4217-currency-codes.html) standard.

## Syntax

```js
currency = paymentCurrencyAmount.currency;
```

### Value

A {{domxref("DOMString")}} specifying the canonical, three-character currency
identification code defined by the [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) standard. This is
the currency in which the payment's {{domxref("PaymentCurrencyAmount.value", "value")}}
is given. All currency values must include the currency system in this property.

## Example

This example represents the price of $42.95 in US dollars.

```js
let itemPrice = {
  currency: "USD",
  value: "42.95"
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using
  the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing
  concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
- {{interwiki("wikipedia", "ISO 4217")}} on Wikipedia
