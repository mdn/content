---
title: AddressErrors.addressLine
slug: Web/API/AddressErrors/addressLine
tags:
  - API
  - AddressErrors
  - Error
  - Payment Request
  - Payment Request API
  - Property
  - Reference
  - Validation
  - addressLine
  - payment
browser-compat: api.AddressErrors.addressLine
---
{{APIRef("Payment Request API")}}

An object based on {{domxref("AddressErrors")}} includes an **`addressLine`** property when validation of the address finds one or more errors in the array of strings in the address's {{domxref("PaymentAddress.addressLine", "addressLine")}}. The returned string explains the error and should offer suggestions for how to correct it.

## Syntax

```js
var addressLineError = AddressErrors.addressLine;
```

### Value

If an error occurred during validation of the address due to one of the strings in the {{domxref("PaymentAddress.addressLine", "addressLine")}} array having an invalid value, this property is set to a {{domxref("DOMString")}} providing a human-readable error message explaining the validation error.

The text should also include, when possible, advice about how to go about correcting the error.

If the {{domxref("PaymentAddress")}} object's `addressLine` property was determined to be valid, this property is not included in the `AddressErrors` dictionary.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
