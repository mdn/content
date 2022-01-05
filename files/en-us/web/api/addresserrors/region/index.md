---
title: AddressErrors.region
slug: Web/API/AddressErrors/region
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
  - region
browser-compat: api.AddressErrors.region
---
{{APIRef("Payment Request API")}}

An object based on {{domxref("AddressErrors")}} includes a **`region`** property when the address's {{domxref("PaymentAddress.region", "region")}} property couldn't be validated. The returned string explains the error and should offer suggestions for how to correct it.

## Syntax

```js
var regionError = AddressErrors.region;
```

### Value

If the value specified in the {{domxref("PaymentAddress")}} object's {{domxref("PaymentAddress.region", "region")}} property could not be validated, this property contains a {{domxref("DOMString")}} offering a human-readable explanation of the validation error and offers suggestions for correcting it.

If the `region` value was validated successfully, this property is not included in the `AddressErrors` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
