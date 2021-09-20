---
title: PayerErrors
slug: Web/API/PayerErrors
tags:
  - API
  - Address
  - AddressErrors
  - Dictionary
  - Errors
  - Interface
  - Payment Address
  - Payment Request
  - Payment Request API
  - Reference
  - payment
  - paymentAddress
browser-compat: api.PayerErrors
---
{{APIRef("Payment Request API")}} {{Deprecated_header}} {{Non-standard_header}}

The **`PayerErrors`** dictionary is used by the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) to indicate the presence of—and to explain how to correct—validation errors in the payer details.

For each field in the payment information that fails validation, the `PayerErrors` object contains a string explaining the error.

The payer details include the payer's name, phone number, and email address.

## Properties

- {{domxref("PayerErrors.email", "email")}} {{optional_inline}}{{Deprecated_inline}}
  - : If present, this {{domxref("DOMString")}} is a string describing the validation error from which the payer's email address—as given by {{domxref("PaymentResponse.payerEmail")}}—currently suffers. If this property is absent from the `PayerErrors` object, the email address passed validation.
- {{domxref("PayerErrors.name", "name")}} {{optional_inline}}{{Deprecated_inline}}
  - : If this {{domxref("DOMString")}} is present in the object, the {{domxref("PaymentResponse.payerName")}} property failed validation, and this string explains what needs to be corrected. If this property is absent, the paer name is fine
- {{domxref("PayerErrors.phone", "phone")}} {{optional_inline}}{{Deprecated_inline}}
  - : If present, this string is an error message explaining why the payer's phone number ({{domxref("PaymentResponse.payerPhone")}}) failed validation. This property is absent if the phone number passed validation.

## Browser compatibility

{{Compat}}
