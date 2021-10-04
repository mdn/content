---
title: PaymentValidationErrors
slug: Web/API/PaymentValidationErrors
tags:
  - API
  - Commerce
  - Dictionary
  - Errors
  - Payment Request
  - Payment Request API
  - PaymentValidationErrors
  - Reference
  - Validation
  - payment
browser-compat: api.PaymentValidationErrors
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The **`PaymentValidationErrors`** dictionary represents objects providing information about any and all errors that occurred while processing a payment request. When validation of the {{domxref("PaymentResponse")}} returned by the {{domxref("PaymentRequest.show()")}} or {{domxref("PaymentResponse.retry()")}} methods fails, your code creates a `PaymentValidationErrors` object to pass into `retry()` so that the {{Glossary("user agent")}} knows what needs to be fixed and what if any error messages to display to the user.

## Properties

- {{domxref("PyamentValidationErrors.error", "error")}} {{optional_inline}}
  - : A general description of a payment error from which the user may attempt to recover by retrying the payment, possibly after correcting mistakes in the payment information. `error` can be provided all by itself to provide only a generic error message, or in concert with the other properties to serve as an overview while other properties' values gude the user to errors in specific fields in the payment form.
- {{domxref("PaymentValidationErrors.paymentMethod", "paymentMethod")}} {{optional_inline}}
  - : Any payment method specific errors which may have occurred. This object's contents will vary depending on the payment method used.

## Example

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
