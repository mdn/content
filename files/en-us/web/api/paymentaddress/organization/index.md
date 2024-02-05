---
title: "PaymentAddress: organization property"
short-title: organization
slug: Web/API/PaymentAddress/organization
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.PaymentAddress.organization
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`organization`** read-only
property of the {{domxref('PaymentAddress')}} interface returns a string containing
the name of the organization, firm, company, or institution at the address.

## Value

A string whose value is the name of the organization or company
located at the address described by the `PaymentAddress` object. This should
be the name of the organization that is to receive the shipment for shipping addresses,
or which is responsible for payment addresses.

## Browser compatibility

{{Compat}}
