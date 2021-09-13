---
title: PaymentRequest.shippingAddress
slug: Web/API/PaymentRequest/shippingAddress
tags:
  - API
  - Experimental
  - Payment Request
  - Payment Request API
  - PaymentRequest
  - Property
  - Reference
  - Secure context
  - shippingAddress
browser-compat: api.PaymentRequest.shippingAddress
---
{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`shippingAddress`** read-only property of
the {{domxref('PaymentRequest')}} interface returns the shipping address provided by the
user. It is `null` by default.

## Syntax

```js
var paymentAddress = PaymentRequest.shippingAddress;
```

## Example

Generally, the user agent will fill the `shippingAddress` property value.
You can trigger this by setting
`PaymentOptions.requestShipping` to `true` when calling
the `PaymentRequest` constructor.

In the example below, the cost of shipping varies by geography. When the
{{domxref('PaymentRequest.onshippingaddresschange')}} is
called, `updateDetails()` is called to update the details of
the `PaymentRequest`, using `shippingAddress` to set the correct
shipping cost.

    // Initialization of PaymentRequest arguments are excerpted for the sake of
    //   brevity.
    var payment = new PaymentRequest(supportedInstruments, details, options);

    payment.addEventListener('shippingaddresschange', function(evt) {
      evt.updateWith(new Promise(function(resolve) {
        updateDetails(details, request.shippingAddress, resolve);
      }));
    });

    payment.show().then(function(paymentResponse) {
        // Processing of paymentResponse exerpted for brevity.
    }).catch(function(err) {
        console.error("Uh oh, something bad happened", err.message);
    });

    function updateDetails(details, shippingAddress, resolve) {
      if (shippingAddress.country === 'US') {
        var shippingOption = {
          id: '',
          label: '',
          amount: {currency: 'USD', value: '0.00'},
          selected: true
        };
        if (shippingAddress.region === 'MO') {
          shippingOption.id = 'mo';
          shippingOption.label = 'Free shipping in Missouri';
          details.total.amount.value = '55.00';
        } else {
          shippingOption.id = 'us';
          shippingOption.label = 'Standard shipping in US';
          shippingOption.amount.value = '5.00';
          details.total.amount.value = '60.00';
        }
        details.displayItems.splice(2, 1, shippingOption);
        details.shippingOptions = [shippingOption];
      } else {
        delete details.shippingOptions;
      }
      resolve(details);
    }

## Browser compatibility

{{Compat}}
