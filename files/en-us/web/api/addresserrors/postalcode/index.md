---
title: AddressErrors.postalCode
slug: Web/API/AddressErrors/postalCode
page-type: web-api-instance-property
tags:
  - API
  - Address
  - AddressErrors
  - Payment Request
  - Payment Request API
  - Post Code
  - Postal Code
  - Property
  - Read-only
  - Reference
  - Validation
  - ZIP
  - ZIP Code
  - payment
  - postalCode
browser-compat: api.AddressErrors.postalCode
---
{{APIRef("Payment Request API")}}

An object based on {{domxref("AddressErrors")}} includes a **`postalCode`** property when the address's {{domxref("PaymentAddress.postalCode", "postalCode")}} property couldn't be validated. The returned string explains the error and should offer suggestions for how to correct it.

## Value

If the value specified in the {{domxref("PaymentAddress")}} object's {{domxref("PaymentAddress.postalCode", "postalCode")}} property could not be validated, this property contains a string offering a human-readable explanation of the validation error and offers suggestions for correcting it.

If the `postalCode` value was validated successfully, this property is not included in the `AddressErrors` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
