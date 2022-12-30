---
title: CanMakePaymentEvent
slug: Web/API/CanMakePaymentEvent
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Interface
  - Landing
  - CanMakePaymentEvent
  - Reference
browser-compat: api.CanMakePaymentEvent
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}

The **`CanMakePaymentEvent`** interface of the {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}} is the event object for the {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}} event, fired on a payment app's service worker when it has been successfully registered to signal that it is ready to handle payments.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CanMakePaymentEvent.CanMakePaymentEvent", "CanMakePaymentEvent()")}} {{Experimental_Inline}}
  - : Creates a new `CanMakePaymentEvent` object instance.

## Instance methods

- {{domxref("CanMakePaymentEvent.respondWith", "respondWith()")}} {{Experimental_Inline}}
  - : Enables the service worker to respond appropriately once registered to signal that it is ready to handle payments.

## Examples

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
