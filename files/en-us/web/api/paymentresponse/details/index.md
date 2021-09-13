---
title: PaymentResponse.details
slug: Web/API/PaymentResponse/details
tags:
  - API
  - Experimental
  - Payment Request
  - Payment Request API
  - PaymentResponse
  - Property
  - Reference
  - Secure context
  - details
browser-compat: api.PaymentResponse.details
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Payment Request API")}}

The **`details`** read-only property of the
{{domxref("PaymentResponse")}} interface returns a JSON-serializable object that
provides a payment method specific message used by the merchant to process the
transaction and determine a successful funds transfer.

This data is returned by the payment app that satisfies the payment request, and must
conform to the structure defined in the {{domxref("BasicCardResponse")}} dictionary.

## Syntax

```js
var detailsObject = PaymentResponse.details;
```

## Example

The following example extracts the details from the {{domxref('PaymentResponse')}}
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
