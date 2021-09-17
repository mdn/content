---
title: AddressErrors.recipient
slug: Web/API/AddressErrors/recipient
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
  - name
  - payment
browser-compat: api.AddressErrors.recipient
---
{{APIRef("Payment Request API")}}

An object based on {{domxref("AddressErrors")}} includes a **`recipient`** property when the address's {{domxref("PaymentAddress.recipient", "recipient")}} property couldn't be validated. The returned string explains the error and should offer suggestions for how to correct it.

## Syntax

```js
var recipientError = AddressErrors.recipient;
```

### Value

If the value specified in the {{domxref("PaymentAddress")}} object's {{domxref("PaymentAddress.recipient", "recipient")}} property could not be validated, this property contains a {{domxref("DOMString")}} offering a human-readable explanation of the validation error and offers suggestions for correcting it.

If the `recipient` value was validated successfully, this property is not included in the `AddressErrors` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
