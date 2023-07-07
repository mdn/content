---
title: "CanMakePaymentEvent: CanMakePaymentEvent() constructor"
short-title: CanMakePaymentEvent()
slug: Web/API/CanMakePaymentEvent/CanMakePaymentEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.CanMakePaymentEvent.CanMakePaymentEvent
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}

The **`CanMakePaymentEvent()`** constructor creates a new {{domxref("CanMakePaymentEvent")}} object instance.

## Syntax

```js-nolint
new CanMakePaymentEvent(type)
```

### Parameters

- `type`
  - : A string representing the type of event. In the case of `CanMakePaymentEvent` this is always `canmakepayment`.

## Examples

A developer would not use this constructor manually. A new `CanMakePaymentEvent` object is constructed when a handler is invoked as a result of the {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}} event firing.

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
