---
title: PaymentResponse.complete()
slug: Web/API/PaymentResponse/complete
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Payment Request
  - Payment Request API
  - PaymentResponse
  - Reference
  - Secure context
  - complete
browser-compat: api.PaymentResponse.complete
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The {{domxref("PaymentRequest")}} method
**`complete()`** of the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) notifies the
{{Glossary("user agent")}} that the user interaction is over, and causes any remaining
user interface to be closed.

This method must be called after the user accepts
the payment request and the {{jsxref("Promise")}} returned by the
{{domxref('PaymentRequest.show()')}} method is resolved.

## Syntax

```js
complete()
complete(result)
```

### Parameters

- `result` {{optional_inline}}

  - : A string indicating the state of the payment operation upon
    completion. It must be one of the following:

    - `success`
      - : The payment was successfully processed. The user agent may or may not present
        some form of "payment successful" indication to the user.
    - `fail`
      - : The payment was not successfully processed. The failure may or may not be
        announced to the user by the user agent, depending on its design.
    - `unknown`
      - : The success or failure status of the transaction is unknown or irrelevant, and
        the user agent should not present any notification, even if it normally would.
        _This is the default value._

    > **Note:** In older versions of the specification, an empty string,
    > `""`, was used instead of `unknown` to indicate a completion
    > without a known result state. See the [Browser compatibility](#browser_compatibility) section
    > below for details.

### Return value

A {{jsxref("Promise")}} which resolves with no input value once the payment interface
has been fully closed. If an error occurs, the promise instead rejects, returning one of
the exceptions listed below.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : Returned if the document in which the payment request is taking place became inactive while the
    user interface was shown.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the payment has already completed, or `complete()` was called while a
    request to retry the payment is pending. You can't treat a payment as complete after
    requesting that the payment be tried again.

## Examples

The following example sends payment information to a secure server using the [Fetch API](/en-US/docs/Web/API/Fetch_API). It
calls `complete()` with an answer appropriate to the status in the response.

```js
// Initialization of PaymentRequest arguments are excerpted for the
//   sake of brevity.
const payment = new PaymentRequest(supportedInstruments, details, options);

payment.show().then((paymentResponse) => {
  const fetchOptions = {
    method: 'POST',
    credentials: include,
    body: JSON.stringify(paymentResponse)
  };
  const serverPaymentRequest = new Request('secure/payment/endpoint');
  fetch(serverPaymentRequest, fetchOptions).then((response) => {
    if (response.status < 400) {
      paymentResponse.complete("success");
    } else {
      paymentResponse.complete("fail");
    };
  }).catch((reason) => {
    paymentResponse.complete("fail");
  });
}).catch((err) => {
  console.error("Uh oh, something bad happened", err.message);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
