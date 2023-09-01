---
title: "PaymentResponse: shippingOption property"
short-title: shippingOption
slug: Web/API/PaymentResponse/shippingOption
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.PaymentResponse.shippingOption
---

{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`shippingOption`** read-only property of
the `PaymentRequest` interface returns the ID attribute of the shipping
option selected by the user. This option is only present when the
`requestShipping` option is set to `true` in the
{{domxref('PaymentOptions')}} object passed to the
{{domxref('PaymentRequest.PaymentRequest','PaymentRequest')}} constructor.

## Value

A string.

## Examples

In the example below, the {{domxref('PaymentRequest.shippingoptionchange_event', 'shippingoptionchange')}} event
is called. It calls `updateDetails()` to toggle the shipping method between
"standard" and "express".

```js
// Initialization of PaymentRequest arguments are excerpted for brevity.
const payment = new PaymentRequest(supportedInstruments, details, options);

request.addEventListener("shippingoptionchange", (evt) => {
  evt.updateWith(
    new Promise((resolve, reject) => {
      updateDetails(details, request.shippingOption, resolve, reject);
    }),
  );
});

payment
  .show()
  .then((paymentResponse) => {
    // Processing of paymentResponse excerpted for the same of brevity.
  })
  .catch((err) => {
    console.error("Uh oh, something bad happened", err.message);
  });

function updateDetails(details, shippingOption, resolve, reject) {
  let selectedShippingOption;
  let otherShippingOption;
  if (shippingOption === "standard") {
    selectedShippingOption = details.shippingOptions[0];
    otherShippingOption = details.shippingOptions[1];
    details.total.amount.value = "55.00";
  } else if (shippingOption === "express") {
    selectedShippingOption = details.shippingOptions[1];
    otherShippingOption = details.shippingOptions[0];
    details.total.amount.value = "67.00";
  } else {
    reject(`Unknown shipping option '${shippingOption}'`);
    return;
  }
  selectedShippingOption.selected = true;
  otherShippingOption.selected = false;
  details.displayItems.splice(2, 1, selectedShippingOption);
  resolve(details);
}
```

## Browser compatibility

{{Compat}}
