---
title: PaymentResponse.shippingOption
slug: Web/API/PaymentResponse/shippingOption
tags:
  - API
  - Experimental
  - Payment Request
  - PaymentResponse
  - Property
  - Reference
  - Request Payment API
  - Secure context
  - shippingOption
browser-compat: api.PaymentResponse.shippingOption
---
{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`shippingOption`** read-only property of
the `PaymentRequest` interface returns the ID attribute of the shipping
option selected by the user. This option is only present when the
`requestShipping` option is set to `true` in the
{{domxref('PaymentOptions')}} object passed to the
{{domxref('PaymentRequest.PaymentRequest','PaymentRequest')}} constructor.

## Syntax

```js
var shippingOption = PaymentRequest.shippingOption;
```

## Example

In the example below, the {{domxref('PaymentRequest.onshippingaoptionchange')}} event
is called. It calls `updateDetails()` to toggle the shipping method between
"standard" and "express".

    // Initialization of PaymentRequest arguments are excerpted for brevity.
    var payment = new PaymentRequest(supportedInstruments, details, options);

    request.addEventListener('shippingoptionchange', function(evt) {
      evt.updateWith(new Promise(function(resolve, reject) {
        updateDetails(details, request.shippingOption, resolve, reject);
      }));
    });

    payment.show().then(function(paymentResponse) {
      // Processing of paymentResponse exerpted for the same of brevity.
    }).catch(function(err) {
      console.error("Uh oh, something bad happened", err.message);
    });

    function updateDetails(details, shippingOption, resolve, reject) {
      var selectedShippingOption;
      var otherShippingOption;
      if (shippingOption === 'standard') {
        selectedShippingOption = details.shippingOptions[0];
        otherShippingOption = details.shippingOptions[1];
        details.total.amount.value = '55.00';
      } else if (shippingOption === 'express') {
        selectedShippingOption = details.shippingOptions[1];
        otherShippingOption = details.shippingOptions[0];
        details.total.amount.value = '67.00';
      } else {
        reject('Unknown shipping option \'' + shippingOption + '\'');
        return;
      }
      selectedShippingOption.selected = true;
      otherShippingOption.selected = false;
      details.displayItems.splice(2, 1, selectedShippingOption);
      resolve(details);
    }

## Browser compatibility

{{Compat}}
