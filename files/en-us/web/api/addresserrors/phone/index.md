---
title: AddressErrors.phone
slug: Web/API/AddressErrors/phone
tags:
  - API
  - Address
  - AddressErrors
  - Payment Request
  - Payment Request API
  - Phone
  - Phone Number
  - Property
  - Read-only
  - Reference
  - Telephone Number
  - Téléphone
  - Validation
  - payment
browser-compat: api.AddressErrors.phone
---
{{APIRef("Payment Request API")}}

An object based on {{domxref("AddressErrors")}} includes a **`phone`** property when the address's {{domxref("PaymentAddress.phone", "phone")}} property couldn't be validated. The returned string explains the error and should offer suggestions for how to correct it.

## Syntax

```js
var phoneError = AddressErrors.phone;
```

### Value

If the value specified in the {{domxref("PaymentAddress")}} object's {{domxref("PaymentAddress.phone", "phone")}} property could not be validated, this property contains a {{domxref("DOMString")}} offering a human-readable explanation of the validation error and offers suggestions for correcting it.

If the `phone` value was validated successfully, this property is not included in the `AddressErrors` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
