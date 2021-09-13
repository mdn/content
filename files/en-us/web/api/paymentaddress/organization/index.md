---
title: PaymentAddress.organization
slug: Web/API/PaymentAddress/organization
tags:
  - API
  - Address
  - Payment Request
  - Payment Request API
  - PaymentRequest
  - Property
  - Read-only
  - Reference
  - business
  - company
  - institution
  - organization
  - paymentAddress
browser-compat: api.PaymentAddress.organization
---
{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`organization`** read-only
property of the {{domxref('PaymentAddress')}} interface returns a string containing
the name of the organization, firm, company, or institution at the address.

## Syntax

```js
var paymentOrganization = PaymentAddress.organization;
```

### Value

A {{domxref("DOMString")}} whose value is the name of the organization or company
located at the address described by the `PaymentAddress` object. This should
be the name of the organization that is to receive the shipment for shipping addresses,
or which is repsonsible for payment for payment addresses.

## Browser compatibility

{{Compat}}
