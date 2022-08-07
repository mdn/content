---
title: PaymentMethodChangeEvent.methodDetails
slug: Web/API/PaymentMethodChangeEvent/methodDetails
page-type: web-api-instance-property
tags:
  - API
  - Commerce
  - Payment Method
  - Payment Request
  - Payment Request API
  - PaymentMethodChangeEvent
  - Property
  - Reference
  - methodDetails
  - payment
  - paymentmethodchange
browser-compat: api.PaymentMethodChangeEvent.methodDetails
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The read-only **`methodDetails`** property of the {{domxref("PaymentMethodChangeEvent")}} interface is an object
containing any data the payment handler may provide to describe the change the user
has made to their payment method. The value is `null` if no details
are available.

## Value

An object containing any data needed to describe the changes made to the payment
method. The contents vary depending on the actual payment method chosen, so you will
need to refer to the {{domxref("PaymentMethodChangeEvent.methodName", "methodName")}}
property first, then interpret the `methodDetails` after that.

The default value is `null`, indicating that no additional details are
available.

## Examples

This example uses the {{domxref("PaymentRequest.paymentmethodchange_event", "paymentmethodchange")}} event to watch for changes to
the payment method selected for Apple Pay, in order to compute a discount if the user
chooses to use a Visa card as their payment method.

```js
request.onpaymentmethodchange = (ev) => {
  const { type: cardType } = ev.methodDetails;
  const newStuff = {};
  if (ev.methodName === "https://apple.com/apple-pay") {
    switch (cardType) {
      case "visa": {
        // do Apple Pay specific handling for Visa card…
        // methodDetails contains the card information
        const discount = calculateDiscount(ev.methodDetails);
        Object.assign(newStuff, discount);
        break;
      }
    }
  }
  // finally…
  ev.updateWith(newStuff);
};
const response = await request.show();
```

Note that the `methodDetails` property is being used by the `calculateDiscount()` function to compute any payment discount, then {{domxref("PaymentRequestUpdateEvent.updateWith", "updateWith()")}} is called to update the event with the computed update.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
