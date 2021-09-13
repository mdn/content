---
title: BasicCardRequest.supportedNetworks
slug: Web/API/BasicCardRequest/supportedNetworks
tags:
  - API
  - Basic Card Payment
  - BasicCardRequest
  - Experimental
  - Payment Request
  - Payment Request API
  - Property
  - Reference
  - supportedNetworks
  - Deprecated
  - Non-standard
browser-compat: api.BasicCardRequest.supportedNetworks
---
{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`supportedNetworks`** property of the
{{domxref("BasicCardRequest")}} dictionary contains an array of
{{domxref("DOMString")}}s representing the card networks that the retailer supports
(e.g. `amex`, `mastercard`).

## Syntax

```js
supportedNetworks : [value [, ... value]]
```

### Value

An array containing one or more {{domxref("DOMString")}}s, which describe the card
networks the retailer supports. Legal values are defined in the W3C's document [Card Network Identifiers Approved
for use with Payment Request API](https://www.w3.org/Payments/card-network-ids), and are currently:

- `amex`
- `cartebancaire`
- `diners`
- `discover`
- `jcb`
- `mastercard`
- `mir`
- `unionpay`
- `visa`

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

## Specifications

This feature is no longer part of any specification.

## Browser compatibility

{{Compat}}
