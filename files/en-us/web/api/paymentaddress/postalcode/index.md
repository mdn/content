---
title: PaymentAddress.postalCode
slug: Web/API/PaymentAddress/postalCode
tags:
  - API
  - Address
  - PIN
  - PIN Code
  - Payment Request
  - Payment Request API
  - PaymentRequest
  - Post Code
  - Postal Code
  - Property
  - Read-only
  - Reference
  - ZIP
  - ZIP Code
  - payment
  - paymentAddress
  - postalCode
browser-compat: api.PaymentAddress.postalCode
---
{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`postalCode`** read-only property of the
{{domxref('PaymentAddress')}} interface returns a string containing a code used by a
jurisdiction for mail routing, for example, the {{interwiki("wikipedia", "ZIP Code")}}
in the United States or the {{interwiki("wikipedia", "Postal Index Number")}} (PIN code)
in India.

## Syntax

```js
var paymentPostalCode = PaymentAddress.postalCode;
```

### Value

A {{domxref("DOMString")}} which contains the postal code portion of the address. A
postal code is a string (either numeric or alphanumeric) which is used by a postal
service to optimize mail routing and delivery.

Various countries use different terms for this. In most of the world, it's known as the
"post code" or "postal code." In the United States, the ZIP code is used. India uses PIN
codes.

## Browser compatibility

{{Compat}}

## See also

- Universal Postal Union: [Post
  code lookup service](http://www.upu.int/en/resources/postcodes/looking-up-a-postcode.html)
- Universal Postal Union: [Universal
  Post\*Code® Database](http://www.upu.int/en/resources/postcodes/universal-postcoder-database.html)
