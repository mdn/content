---
title: AddressErrors.organization
slug: Web/API/AddressErrors/organization
tags:
  - API
  - Address
  - AddressErrors
  - Error
  - Payment Request
  - Payment Request API
  - Property
  - Read-only
  - Reference
  - organization
  - payment
browser-compat: api.AddressErrors.organization
---
{{APIRef("Payment Request API")}}

An object based on {{domxref("AddressErrors")}} includes an **`organization`** property when the address's {{domxref("PaymentAddress.organization", "organization")}} property couldn't be validated. The returned string explains the error and should offer suggestions for how to correct it.

## Syntax

```js
var organizationError = AddressErrors.organization;
```

### Value

If the value specified in the {{domxref("PaymentAddress")}} object's {{domxref("PaymentAddress.organization", "organization")}} property could not be validated, this property contains a {{domxref("DOMString")}} offering a human-readable explanation of the validation error and offers suggestions for correcting it.

For example, if validation ensures that only permitted characters are included in the organization's name, this might return a string such as "The organization name may only contain the letters A-Z, digits, spaces, and commas."

If the `organization` value was validated successfully, this property is not included in the `AddressErrors` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
