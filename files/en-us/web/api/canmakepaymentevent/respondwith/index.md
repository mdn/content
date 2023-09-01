---
title: "CanMakePaymentEvent: respondWith() method"
short-title: respondWith()
slug: Web/API/CanMakePaymentEvent/respondWith
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CanMakePaymentEvent.respondWith
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}

The **`respondWith()`** method of the {{domxref("CanMakePaymentEvent")}} interface enables the service worker to respond appropriately to signal whether it is ready to handle payments.

## Syntax

```js-nolint
respondWith(response)
```

### Parameters

- `response`
  - : A {{jsxref("Promise")}} that resolves with a boolean value to signal that it is ready to handle a payment request: (`true`), or not (`false`).

### Return value

None (`undefined`).

## Examples

```js
self.addEventListener("canmakepayment", (e) => {
  e.respondWith(
    new Promise((resolve, reject) => {
      someAppSpecificLogic()
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    }),
  );
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
