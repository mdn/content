---
title: PayerErrors.name
slug: Web/API/PayerErrors/name
tags:
  - API
  - Commerce
  - Errors
  - Payer
  - PayerErrors
  - Payment Request
  - Payment Request API
  - Property
  - Reference
  - Response
  - Validation
  - name
  - payment
browser-compat: api.PayerErrors.name
---
{{APIRef("Payment Request API")}} {{Deprecated_header}} {{Non-standard_header}}

The **`name`** property is included in a
{{domxref("PayerErrors")}} object if the {{domxref("PaymentResponse.payerName",
  "payerName")}} returned in the response couldn't be validated. The value is a string
explaining the problem. If the payer's name validated successfully, the
`name` property is omitted from the `PayerErrors` object.

## Syntax

```js
payerName = payerErrors.name;
```

### Value

If this property is present in the {{domxref("PayerErrors")}} object, the payer's name
couldn't be successfully validated, and the `name` property's value is a
{{domxref("DOMString")}} explaining the error. This string will be displayed to the user
by the {{Glossary("user agent", "user agent's")}} payment handling user interface.

If the payer's name is valid, this property is left out of the
{{domxref("PayerErrors")}} object.

## Example

```js
function validatePayment(response) {
  const correctionPromises
  let paymentErrors = {};
  let payerErrors = {};

  // Check payer details

  if (!validEmail(response.payerEmail)) {
    payerErrors.email = "Please make sure you enter a valid email address."
  }
  if (!validName(response.payerName)) {
    payerErrors.email = "Please enter a valid name, using only <appropriate characters>."
  }
  if (!validPhone(response.payerPhone)) {
    payerErrors.phone = "Please enter a valid phone number in the form ###-###-####."
  }

  // Check everything else too...

  //
}
```

## Browser compatibility

{{Compat}}
