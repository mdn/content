---
title: PaymentResponse.methodName
slug: Web/API/PaymentResponse/methodName
tags:
  - API
  - Commerce
  - Experimental
  - Payment Request
  - Payment Request API
  - PaymentResponse
  - Property
  - Reference
  - Secure context
  - methodName
browser-compat: api.PaymentResponse.methodName
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The **`methodName`** read-only
property of the {{domxref("PaymentResponse")}} interface returns a string uniquely
identifying the payment handler selected by the user.

This string may be either
one of the standardized payment method identifiers or a URL used by the payment handler
to process payments.

## Syntax

```js
var methodName = PaymentResponse.methodName;
```

### Value

A {{domxref("DOMString")}} uniquely identifying the payment handler being used to
process the payment. This may be either a standardized identifier, or a URL used by the
payment processor to handle payments. See
{{SectionOnPage("/en-US/docs/Web/API/Payment_Request_API/Concepts", "Merchant
  validation")}} for more information.

## Example

The following example extracts the method name from the {{domxref('PaymentResponse')}}
object to the promise returned from {{domxref('PaymentRequest.show()')}}. In a
real-world implementation this data would then be sent to a payment server.

```js
payment.show().then(paymentResponse => {
  var paymentData = {
    // payment method string
    method: paymentResponse.methodName,
    // payment details as you requested
    details: paymentResponse.details,
    // shipping address information
    address: toDict(paymentResponse.shippingAddress)
  };
  // Send information to the server
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
