---
title: PaymentAddress.organization
slug: Web/API/PaymentAddress/organization
page-type: web-api-instance-property
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
  - Deprecated
  - Non-standard
browser-compat: api.PaymentAddress.organization
---
{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{Non-standard_Header}}

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
