---
title: CanMakePaymentEvent.respondWith()
slug: Web/API/CanMakePaymentEvent/respondWith
page-type: web-api-instance-method
tags:
  - API
  - respondWith
  - Experimental
  - Method
  - Reference
browser-compat: api.CanMakePaymentEvent.respondWith
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}

The **`respondWith()`** method of the {{domxref("CanMakePaymentEvent")}} interface enables the service worker to respond appropriately once registered to signal that it is ready to handle payments.

## Syntax

```js-nolint
respondWith(response)
```

### Parameters

- `response`
  - : A {{jsxref("Promise")}} that resolves with a boolean value. At the time of writing, the value is always `true`.

### Return value

None (`undefined`).

## Examples

When a `CanMakePaymentEvent` is received, the service worker always returns `true`.

```js
self.addEventListener("canmakepayment", function(e) {
  e.respondWith(true);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}}
- [Web-based payment apps overview](https://web.dev/web-based-payment-apps-overview/)
- [Setting up a payment method](https://web.dev/setting-up-a-payment-method/)
- [Life of a payment transaction](https://web.dev/life-of-a-payment-transaction/)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
