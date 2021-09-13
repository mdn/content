---
title: BasicCardResponse.billingAddress
slug: Web/API/BasicCardResponse/billingAddress
tags:
  - API
  - Basic Card Payment
  - BasicCardResponse
  - Experimental
  - Payment Request
  - Payment Request API
  - Property
  - Reference
  - billingAddress
  - Deprecated
  - Non-standard
browser-compat: api.BasicCardResponse.billingAddress
---
{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`billingAddress`** property of the
{{domxref("BasicCardResponse")}} dictionary contains the billing address of the card
used to make the payment.

## Syntax

```js
"billingAddress" : PaymentAddress
```

### Value

A {{domxref("PaymentAddress")}} object representing the billing address of the card.

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
