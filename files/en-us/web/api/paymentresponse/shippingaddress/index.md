---
title: PaymentResponse.shippingAddress
slug: Web/API/PaymentResponse/shippingAddress
page-type: web-api-instance-property
tags:
  - API
  - Payment Request
  - Payment Request API
  - PaymentResponse
  - Property
  - Reference
  - Secure context
  - shippingAddress
  - Deprecated
  - Non-standard
browser-compat: api.PaymentResponse.shippingAddress
---
{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`shippingAddress`** read-only property of
the `PaymentRequest` interface returns a {{domxref('PaymentAddress')}} object
containing the shipping address provided by the user.

## Value

A {{domxref("PaymentAddress")}} object providing details comprising the shipping
address provided by the user.

## Examples

Generally, the user agent will fill the `shippingAddress` property for you.
You can trigger this by
setting `PaymentOptions.requestShipping` to `true` when calling
the {{domxref('PaymentRequest.paymentRequest','PaymentRequest')}} constructor.

In the example below, the cost of shipping varies by geography. When the
{{domxref('PaymentRequest.shippingaddresschange_event', 'shippingaddresschange')}} event is
fired and caught, `updateDetails()` is called to update the details of
the `PaymentRequest`, using `shippingAddress` to set the correct
shipping cost.

```js
// Initialization of PaymentRequest arguments are excerpted for brevity.

const payment = new PaymentRequest(supportedInstruments, details, options);

request.addEventListener('shippingaddresschange', (evt) => {
  evt.updateWith(new Promise((resolve) => {
    updateDetails(details, request.shippingAddress, resolve);
  }));
});

payment.show().then((paymentResponse) => {
  // Processing of paymentResponse excerpted for the same of brevity.
}).catch((err) => {
  console.error("Uh oh, something bad happened", err.message);
});

function updateDetails(details, shippingAddress, resolve) {
  if (shippingAddress.country === 'US') {
    const shippingOption = {
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
```

## Browser compatibility

{{Compat}}
