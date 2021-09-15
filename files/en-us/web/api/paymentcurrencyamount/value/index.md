---
title: PaymentCurrencyAmount.value
slug: Web/API/PaymentCurrencyAmount/value
tags:
  - API
  - Commerce
  - Currency
  - Payment Request
  - Payment Request API
  - PaymentCurrencyAmount
  - Price
  - Property
  - Reference
  - cost
  - payment
  - value
browser-compat: api.PaymentCurrencyAmount.value
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The {{domxref("PaymentCurrencyAmount")}} property
**`value`** is a string containing the decimal numeric value
of the payment, specified in the currency units indicated by the
{{domxref("PaymentCurrencyAmount.currency", "currency")}} property.

The
contents of this string must be a valid decimal number; that is, some number of digits
between 0 and 9 with up to one optional decimal point. An optional leading minus sign
("-") can be included to indicate a negative value, such as to represent a refund or
discount.

> **Note:** The number given in this string is always specified
> using the period (".") as the decimal point, rather than the comma (","), even if the
> user's locale normally uses the comma. You must convert the entered text to this form
> or it will not be valid.

## Syntax

```js
value = paymentCurrencyAmount.value;
```

### Value

A {{domxref("DOMString")}} indicating the numeric value of the payment. This must be a
valid decimal number, with an optional leading minus sign ("-"), then one or more
decimal digits 0 through 9, optionally with a decimal point (".") with at least one
digit following it to represent fractional units. There must not be any leading or
trailing whitespace in the string.

For uniformity and consistency, the value is always given using the period (".") as the
decimal character, regardless of the user's locale. You need to convert the value to
this format before submitting the payment.

See the example {{anch("Verifying a properly formatted price")}} below for a simple
regular expression that can be used to validate the `value` string prior to
submission.

## Examples

### Representing prices

This example represents the price of $42.95 in US dollars:

```js
let itemPrice = {
  currency: "USD",
  value: "42.95"
};
```

This example specifies a price of £7.77:

```js
let shippingCost = {
  currency: "GBP",
  value: "7.77"
}
```

This example specifies a price of 1000¥:

```js
let price = {
  currency: "JPY",
  value: "1000"
}
```

### Verifying a properly formatted price

You can ensure that the value entered as a price is formatted correctly prior to
submission by matching it against a simple {{Glossary("regular expression")}}:

```js
function checkPriceFormat(price) {
  let validRegex = /^-?[0-9]+(\.[0-9]+)?$/;

  return validRegex.test(price);
}
```

This function, `checkPriceFormat()`, will return `true` if the
specified price string is formatted properly, or `false` if it's not.

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
