---
title: AddressErrors.city
slug: Web/API/AddressErrors/city
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
  - city
  - payment
browser-compat: api.AddressErrors.city
---
{{APIRef("Payment Request API")}}

An object based on {{domxref("AddressErrors")}} includes a **`city`** property when validation of the address fails for the value given for the address's {{domxref("PaymentAddress.city", "city")}} property. The returned string explains the error and should offer suggestions for how to correct it.

## Syntax

```js
var cityError = AddressErrors.city;
```

### Value

If the value specified in the {{domxref("PaymentAddress")}} object's {{domxref("PaymentAddress.city", "city")}} property could not be validated, this property contains a {{domxref("DOMString")}} offering a human-readable explanation of the validation error and offers suggestions for correcting it.

If the city value was validated successfully, this property is not included in the `AddressErrors` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
