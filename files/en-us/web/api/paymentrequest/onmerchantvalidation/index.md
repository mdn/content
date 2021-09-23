---
title: PaymentRequest.onmerchantvalidation
slug: Web/API/PaymentRequest/onmerchantvalidation
tags:
  - API
  - Commerce
  - Event Handler
  - Payment Method
  - Payment Request API
  - PaymentRequest
  - Property
  - Reference
  - onmerchantvalidation
  - payment
browser-compat: api.PaymentRequest.onmerchantvalidation
---
{{deprecated_header}}{{non-standard_header}}{{securecontext_header}}

The {{domxref("PaymentRequest")}} event handler
**`onmerchantvalidation`** is invoked when the
{{event("merchantvalidation")}} is fired, indicating that the payment handler
(e.g., Apple Pay) requires the merchant to validate themselves.

This is usually the
first event to be fired, and the user won't be able to proceed with a payment until the
merchant validate themselves.

This event is not be fired by all payment handlers. In particular, it's used by Apple
Pay.

## Syntax

```js
paymentRequest.onmerchantvalidation = eventHandlerFunction;
```

### Value

An event handler function which is to be called whenever the
{{event("merchantvalidation")}} event is fired at the {{domxref("PaymentRequest")}},
indicating that the payment handler requires the merchant to validate themselves as
allowed to use this payment handler.

## Examples

An example merchant validation handler for the {{domxref("PaymentRequest")}} object
`request` looks like this:

```js
request.onmerchantvalidation = ev => {
  ev.complete(async () => {
    const merchantServerUrl = window.location.origin +
        '/validation?url=' + encodeURIComponent(ev.validationURL);
    // get validation data, and complete validation;
    return await fetch(merchantServerUrl).then(r => r.text());
  })
};

const response = await request.show();
```

For more information, see
{{SectionOnPage("/en-US/docs/Web/API/Payment_Request_API/Concepts", "Merchant
  Validation")}}.

## Browser compatibility

{{Compat}}
