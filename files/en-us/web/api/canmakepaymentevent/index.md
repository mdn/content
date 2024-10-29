---
title: CanMakePaymentEvent
slug: Web/API/CanMakePaymentEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CanMakePaymentEvent
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

The **`CanMakePaymentEvent`** interface of the {{domxref("Payment Handler API", "", "", "nocode")}} is the event object for the {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}} event, fired on a payment app's service worker to check whether it is ready to handle a payment. Specifically, it is fired when the merchant website calls the {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}} constructor.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CanMakePaymentEvent.CanMakePaymentEvent", "CanMakePaymentEvent()")}} {{Experimental_Inline}}
  - : Creates a new `CanMakePaymentEvent` object instance.

## Instance methods

- {{domxref("CanMakePaymentEvent.respondWith", "respondWith()")}} {{Experimental_Inline}}
  - : Enables the service worker to respond appropriately to signal whether it is ready to handle payments.

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
- [Web-based payment apps overview](https://web.dev/articles/web-based-payment-apps-overview)
- [Setting up a payment method](https://web.dev/articles/setting-up-a-payment-method)
- [Life of a payment transaction](https://web.dev/articles/life-of-a-payment-transaction)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
