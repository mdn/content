---
title: BasicCardResponse.expiryMonth
slug: Web/API/BasicCardResponse/expiryMonth
tags:
  - API
  - Basic Card Payment
  - BasicCardResponse
  - Experimental
  - Payment Request
  - Payment Request API
  - Property
  - Reference
  - expiryMonth
  - Deprecated
  - Non-standard
browser-compat: api.BasicCardResponse.expiryMonth
---
{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`expiryMonth`** property of the
{{domxref("BasicCardResponse")}} dictionary contains the expiry month of the card used
to make the payment.

## Syntax

```js
"expiryMonth" : "number"
```

### Value

A {{domxref("DOMString")}} representing the card expiry month as a two-digit number in
the range 01 to 12.

## Example

Let's look at a sample payment request:

```js
var request = new PaymentRequest(supportedInstruments, details, options);

// Call show() to trigger the browser's payment flow.
request.show().then(function(instrumentResponse) {
  // Do something with the response from the UI.
  console.log(instrumentResponse.details);
})
.catch(function(err) {
  // Do something with the error from request.show().
});
```

Once the payment flow has been triggered using {{domxref("PaymentRequest.show()")}} and
the promise resolves successfully, the {{domxref("PaymentResponse")}} object available
inside the fulfilled promise (`instrumentResponse` above) will have a
{{domxref("details","PaymentResponse.details")}} property that will contain response
details. This has to conform to the structure defined by the
`BasicCardResponse` dictionary, and may look something like this:

```js
{
  "cardNumber' : '9999999999999999",
  "cardholderName' : 'Mr. Dick Straw",
  "cardSecurityCode" : "999",
  "expiryMonth" : "07",
  "expiryYear" : "2021",
  "billingAddress" : {
    "country" : "GB",
    // etc. billing address is a PaymentAddress object
  }
}
```

## Specifications

This feature is no longer part of any specification.

## Browser compatibility

{{Compat}}
