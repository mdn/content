---
title: AddressErrors.country
slug: Web/API/AddressErrors/country
tags:
  - API
  - AddressErrors
  - Error
  - Payment Request
  - Payment Request API
  - Property
  - Reference
  - Validation
  - country
  - payment
browser-compat: api.AddressErrors.country
---
{{APIRef("Payment Request API")}}

An object based on {{domxref("AddressErrors")}} includes a **`country`** property if during validation of the address the specified value of {{domxref("PaymentAddress.country", "country")}} was determined to be invalid. The value is a string describing the error and should offer suggestions for how to correct it.

## Syntax

```js
var countryError = AddressErrors.country;
```

### Value

If an error occurred during validation of the address due to the {{domxref("PaymentAddress.country", "country")}} property having an invalid value, this property is set to a {{domxref("DOMString")}} providing a human-readable error message explaining the validation error.

The text should also include, when possible, advice about how to go about correcting the error.

If the {{domxref("PaymentAddress")}} object's `country` property was determined to be valid, this property is not included in the dictionary.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
