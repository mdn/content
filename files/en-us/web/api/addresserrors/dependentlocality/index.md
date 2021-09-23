---
title: AddressErrors.dependentLocality
slug: Web/API/AddressErrors/dependentLocality
tags:
  - API
  - AddressErrors
  - Error
  - Locality
  - Payment Request
  - Payment Request API
  - Property
  - Read-only
  - Reference
  - dependentLocality
  - payment
browser-compat: api.AddressErrors.dependentLocality
---
{{APIRef("Payment Request API")}}

An object based on {{domxref("AddressErrors")}} includes a **`dependentLocality`** property when the address's {{domxref("PaymentAddress.dependentLocality", "dependentLocality")}} property couldn't be validated. The returned string explains the error and should offer suggestions for how to correct it.

## Syntax

```js
var localityError = AddressErrors.dependentLocality;
```

### Value

If the value specified in the {{domxref("PaymentAddress")}} object's {{domxref("PaymentAddress.dependentLocality", "dependentLocality")}} property could not be validated, this property contains a {{domxref("DOMString")}} offering a human-readable explanation of the validation error and offers suggestions for correcting it.

If the `dependentLocality` value was validated successfully, this property is not included in the `AddressErrors` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
