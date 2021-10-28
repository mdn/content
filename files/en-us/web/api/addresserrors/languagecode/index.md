---
title: AddressErrors.languageCode
slug: Web/API/AddressErrors/languageCode
tags:
  - API
  - Address
  - AddressErrors
  - Deprecated
  - Language
  - LanguageCode
  - Locale
  - Payment Request
  - Payment Request API
  - Property
  - Reference
  - payment
browser-compat: api.AddressErrors.languageCode
---
{{APIRef("Payment Request API")}}{{deprecated_header}}

An object based on {{domxref("AddressErrors")}} includes a **`languageCode`** property when the address's {{domxref("PaymentAddress.languageCode", "languageCode")}} property couldn't be validated. The returned string explains the error and should offer suggestions for how to correct it.

## Syntax

```js
var languageError = AddressErrors.languageCode;
```

### Value

If the value specified in the {{domxref("PaymentAddress")}} object's {{domxref("PaymentAddress.languageCode", "languageCode")}} property could not be validated, this property contains a {{domxref("DOMString")}} offering a human-readable explanation of the validation error and offers suggestions for correcting it.

This validation might be as simple as ensuring the text of the string is compliant with the syntax defined in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}, or as detailed as actually verifying that the specified string matches a value from a database.

If the `languageCode` value was validated successfully, this property is not included in the `AddressErrors` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
