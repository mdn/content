---
title: BasicCardRequest.supportedTypes
slug: Web/API/BasicCardRequest/supportedTypes
tags:
  - API
  - Basic Card Payment
  - BasicCardRequest
  - Commerce
  - Credit
  - Debit
  - Payment Method
  - Payment Request
  - Payment Request API
  - Property
  - Reference
  - payment
  - supportedTypes
  - Deprecated
  - Non-standard
browser-compat: api.BasicCardRequest.supportedTypes
---
{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The obsolete **`supportedTypes`**
property of the {{domxref("BasicCardRequest")}} dictionary can optionally be provided
to specify an array of {{domxref("DOMString")}}s representing the card types that the
retailer supports (e.g. `credit`, `debit`,
`prepaid`).

This property is obsolete and should no longer be used. Instead of making the web app
or site worry about this, the onus has been transferred to the payment processor.

## Syntax

```js
basicCardRequest.supportedTypes = [cardType1...cardTypeN];
```

### Value

An array containing one or more {{domxref("DOMString")}}s, which describe the card
types the retailer supports. Legal values are defined in
[`BasicCardType`](https://w3c.github.io/payment-method-basic-card/#basiccardtype-enum)
enum, and are currently:

- `credit`
- `debit`
- `prepaid`

## Example

The following example shows a sample definition of the first parameter of the
{{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}} constructor, the
`data` property of which contains `supportedNetworks` and
`supportedTypes` properties.

```js
var supportedInstruments = [{
  supportedMethods: 'basic-card',
  data: {
    supportedNetworks: ['visa', 'mastercard', 'amex', 'jcb',
                        'diners', 'discover', 'mir', 'unionpay'],
    supportedTypes: ['credit', 'debit']
  }
}];

var details = { ... };

var options = { ... };

var request = new PaymentRequest(supportedInstruments, details, options);
```

## Browser compatibility

{{Compat}}
