---
title: AddressErrors.sortingCode
slug: Web/API/AddressErrors/sortingCode
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
  - Validation
  - payment
  - sortingCode
browser-compat: api.AddressErrors.sortingCode
---
{{APIRef("Payment Request API")}}

An object based on {{domxref("AddressErrors")}} includes a **`sortingCode`** property when the address's {{domxref("PaymentAddress.sortingCode", "sortingCode")}} property couldn't be validated. The returned string explains the error and should offer suggestions for how to correct it.

## Syntax

```js
var sortingCodeError = AddressErrors.sortingCode;
```

### Value

If the value specified in the {{domxref("PaymentAddress")}} object's {{domxref("PaymentAddress.sortingCode", "sortingCode")}} property could not be validated, this property contains a {{domxref("DOMString")}} offering a human-readable explanation of the validation error and offers suggestions for correcting it.

If the `sortingCode` value was validated successfully, this property is not included in the `AddressErrors` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
