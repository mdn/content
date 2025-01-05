---
title: "PaymentRequest: shippingAddress property"
short-title: shippingAddress
slug: Web/API/PaymentRequest/shippingAddress
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.PaymentRequest.shippingAddress
---

{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`shippingAddress`** read-only property of
the {{domxref('PaymentRequest')}} interface returns the shipping address provided by the
user. It is `null` by default.

## Value

## Examples

Generally, the user agent will fill the `shippingAddress` property value.
You can trigger this by setting
`options.requestShipping` to `true` when calling
the `PaymentRequest` constructor.

In the example below, the cost of shipping varies by geography. When the
{{domxref('PaymentRequest.shippingaddresschange_event', 'shippingaddresschange')}} is
called, `updateDetails()` is called to update the details of
the `PaymentRequest`, using `shippingAddress` to set the correct
shipping cost.

```js
// Initialization of PaymentRequest arguments are excerpted for the sake of
//   brevity.
const payment = new PaymentRequest(supportedInstruments, details, options);

payment.addEventListener("shippingaddresschange", (evt) => {
  evt.updateWith(
    new Promise((resolve) => {
      updateDetails(details, request.shippingAddress, resolve);
    }),
  );
});

payment
  .show()
  .then((paymentResponse) => {
    // Processing of paymentResponse excerpted for brevity.
  })
  .catch((err) => {
    console.error("Uh oh, something bad happened", err.message);
  });

function updateDetails(details, shippingAddress, resolve) {
  if (shippingAddress.country === "US") {
    const shippingOption = {
      id: "",
      label: "",
      amount: { currency: "USD", value: "0.00" },
      selected: true,
    };
    if (shippingAddress.region === "MO") {
      shippingOption.id = "mo";
      shippingOption.label = "Free shipping in Missouri";
      details.total.amount.value = "55.00";
    } else {
      shippingOption.id = "us";
      shippingOption.label = "Standard shipping in US";
      shippingOption.amount.value = "5.00";
      details.total.amount.value = "60.00";
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
