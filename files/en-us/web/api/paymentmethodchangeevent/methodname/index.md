---
title: PaymentMethodChangeEvent.methodName
slug: Web/API/PaymentMethodChangeEvent/methodName
tags:
  - API
  - Commerce
  - Payment Handler
  - Payment Method
  - Payment Request
  - Payment Request API
  - PaymentMethodChangeEvent
  - Property
  - Reference
  - methodName
  - payment
browser-compat: api.PaymentMethodChangeEvent.methodName
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The read-only **`methodName`** property of the {{domxref("PaymentMethodChangeEvent")}} interface is a string which
uniquely identifies the payment handler currently selected by the user. The
payment handler may be a payment technology, such as Apple Pay or Android Pay, and each
payment handler may support multiple payment methods; changes to the payment method
within the payment handler are described by the `PaymentMethodChangeEvent`.

## Syntax

```js
var methodName = paymentMethodChangeEvent.methodName;
```

### Value

A {{domxref("DOMString")}} which uniquely identifies the currently-selected payment
handler. This may be a string chosen from the list of standardized payment method
identifiers, or a URL used by the payment processing service. See
{{SectionOnPage("/en-US/docs/Web/API/Payment_Request_API", "Payment method
  identifiers")}} for more information.

The default value is the empty string, `""`.

## Example

This example uses the {{event("paymentmethodchange")}} event to watch for changes to
the payment method selected for Apple Pay, in order to compute a discount if the user
chooses to use a Visa card as their payment method.

```js
request.onpaymentmethodchange = function(ev) {
  const { type: cardType } = ev.methodDetails;
  const newStuff = {};
  if (ev.methodName === "https://apple.com/apple-pay") {
    switch (cardType) {
      case "visa":
        // do Apple Pay specific handling for Visa card...
        // methodDetails contains the card information
        const result = calculateDiscount(ev.methodDetails);
        Object.assign(newStuff, result);
        break;
    }
  }
  // finally...
  ev.updateWith(newStuff);
};
const response = await request.show();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
