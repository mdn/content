---
title: PayerErrors.email
slug: Web/API/PayerErrors/email
tags:
  - API
  - Commerce
  - Email
  - Errors
  - PayerErrors
  - Payment Request
  - Payment Request API
  - Reference
  - Shopping
  - Validation
  - payment
browser-compat: api.PayerErrors.email
---
{{APIRef("Payment Request API")}} {{Deprecated_header}} {{Non-standard_header}}

The **`email`** property is included in a
{{domxref("PayerErrors")}} object if the {{domxref("PaymentResponse.payerEmail")}}
property failed validation; in this case, the property should contain a string
describing how to correct the problem. If the payer's email address passed validation,
this property is not included in the `PayerErrors` object.

## Syntax

```js
payerEmail = payerErrors.email;
```

### Value

If validation of the payer's email address ({{domxref("PaymentResponse.payerEmail")}})
found problems, this property should be set to a {{domxref("DOMString")}} that explains
the validation problem and how to correct it. If the email address is valid, this
property should be omitted from the {{domxref("PayerErrors")}} object.

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
