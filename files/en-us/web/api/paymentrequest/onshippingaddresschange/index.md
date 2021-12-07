---
title: PaymentRequest.onshippingaddresschange
slug: Web/API/PaymentRequest/onshippingaddresschange
tags:
  - API
  - Event Handler
  - Experimental
  - Payment Request
  - Payment Request API
  - Property
  - Reference
  - Secure context
  - onshippingaddresschange
browser-compat: api.PaymentRequest.onshippingaddresschange
---
{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`onshippingaddresschange`** event of the
{{domxref("PaymentRequest")}} interface is fired whenever the user changes their
shipping address, including when an address is added by the user for the first time.

## Syntax

```js
PaymentRequest.addEventListener('shippingaddresschange', shippingAddressChangeEvent => { /* ... */ });

PaymentRequest.onshippingaddresschange = function(shippingAddressChangeEvent) { /* ... */ };
```

## Examples

The `shippingaddresschange` event is triggered by a user-agent controlled
interaction. If the address stored by the user agent changes at any time during a
payment process, the event is triggered. To make sure an updated address is included
when sending payment information to the server, you should add event listeners for a
{{domxref('PaymentRequest')}} object after instantiation, but before the call
to `show()`.

    // Initialization of PaymentRequest arguments are excerpted for clarity.
    var payment = new PaymentRequest(supportedInstruments, details, options);

    request.addEventListener('shippingaddresschange', function(evt) {
      evt.updateWith(new Promise(function(resolve) {
        updateDetails(details, request.shippingAddress, resolve);
      }));
    });

    payment.show().then(function(paymentResponse) {
      // Processing of paymentResponse exerpted for the same of clarity.
    }).catch(function(err) {
      console.error("Uh oh, something bad happened", err.message);
    });

## Browser compatibility

{{Compat}}
