---
title: PaymentCurrencyAmount
slug: Web/API/PaymentCurrencyAmount
tags:
  - API
  - Commerce
  - Currency
  - Dictionary
  - Payment Request
  - Payment Request API
  - PaymentCurrencyAmount
  - Price
  - Reference
  - Shipping
  - cost
  - payment
  - value
browser-compat: api.PaymentCurrencyAmount
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The **`PaymentCurrencyAmount`** dictionary describes an amount of money in terms of both a number of units and the currency (US dollars, Euro, yen, etc.), and is part of the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API).

This is used to specify the prices of both line items on a payment, using {{domxref("PaymentItem")}} objects, and to provide the cost of a shipping option, using {{domxref("PaymentShippingOption")}}.

## Properties

All properties are required.

- {{domxref("PaymentCurrencyAmount.currency", "currency")}}
  - : A string containing a valid 3-letter [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency identifier ({{interwiki("wikipedia", "ISO 4217")}}) indicating the currency used for the payment `value`.
- {{domxref('PaymentCurrencyAmount.value', "value")}}
  - : A string containing a valid decimal value representing the mount of currency constituting the payment amount. This string must only contain an optional leading "-" to indicate a negative value, then one or more digits from 0 to 9, and an optional decimal point (".", regardless of locale) followed by at least one more digit. No whitespace is permitted.

### Obsolete properties

_These properties have been removed from the specification and should no longer be used._

- {{domxref("PaymentCurrencyAmount.currencySystem", "currencySystem")}} {{optional_inline}} {{deprecated_inline}}
  - : A string describing the standard or specification as well as the currency system identifier within that system which was used to provide the `value`. This has been removed; instead of allowing sites to choose the standard to use, ISO 4217 is always used for the `currency` identifier now.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
