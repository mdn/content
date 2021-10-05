---
title: PaymentRequest.onpaymentmethodchange
slug: Web/API/PaymentRequest/onpaymentmethodchange
tags:
  - API
  - Commerce
  - Event Handler
  - Payment Method
  - PaymentRequest
  - Property
  - Reference
  - onpaymentmethodchange
  - payment
browser-compat: api.PaymentRequest.onpaymentmethodchange
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The {{domxref("PaymentRequest")}} event handler
**`onpaymentmethodchange`** is invoked when the
{{event("paymentmethodchange")}} is fired, indicating that the user has changed
payment methods within a given payment handler.

For example, when using Apple Pay, the
user can swipe to select different credit cards, debit cards, and so forth. Each time
the user does so, this event is fired.

This event may not be fired by all payment handlers.

## Syntax

```js
PaymentRequest.addEventListener('paymentmethodchange', paymentMethodChangeEvent => { ... });

PaymentRequest.onpaymentmethodchange = function(paymentMethodChangeEvent) { ... };
```

### Value

An event handler function which is to be called whenever the
{{event("paymentmethodchange")}} event is fired at the {{domxref("PaymentRequest")}},
indicating that the user has changed payment methods within the same payment handler.

The {{event("paymentmethodchange")}} event is triggered by a user-agent controlled
interaction (e.g., the end-user switches from a debit to a credit card in the payment
app). To make sure you receive the event, you should add event listeners to
{{domxref('PaymentRequest')}} object after instantiation, but before you call
`show()`.

## Examples

An example payment method change handler is shown below; this example handles changes
made to the payment method when using Apple Pay, specifically:

```js
request.onpaymentmethodchange = ev => {
  const { type: cardType } = ev.methodDetails;
  const newStuff = {};
  if (ev.methodName === "https://apple.com/apple-pay") {
    switch (cardType) {
      case "store":
        // do Apple Pay specific handling for store card...
        // methodDetails contains the store card information
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
