---
title: "ServiceWorkerGlobalScope: paymentrequest event"
short-title: paymentrequest
slug: Web/API/ServiceWorkerGlobalScope/paymentrequest_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.ServiceWorkerGlobalScope.paymentrequest_event
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}

The **`paymentrequest`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired on a payment app when a payment flow has been initiated on the merchant website via the {{domxref("PaymentRequest.show()")}} method.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("paymentrequest", (event) => {});

onpaymentrequest = (event) => {};
```

## Event type

A {{domxref("PaymentRequestEvent")}}. Inherits from {{domxref("ExtendableEvent")}}.

{{InheritanceDiagram("PaymentRequestEvent")}}

## Examples

When the {{domxref("PaymentRequest.show()")}} method is invoked, a {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}} event is fired on the service worker of the payment app. This event is listened for inside the payment app's service worker to begin the next stage of the payment process.

```js
let payment_request_event;
let resolver;
let client;

// `self` is the global object in service worker
self.addEventListener("paymentrequest", async (e) => {
  if (payment_request_event) {
    // If there's an ongoing payment transaction, reject it.
    resolver.reject();
  }
  // Preserve the event for future use
  payment_request_event = e;

  // ...
});
```

When a `paymentrequest` event is received, the payment app can open a payment handler window by calling {{domxref("PaymentRequestEvent.openWindow()")}}. The payment handler window will present the customers with a payment app interface where they can authenticate, choose shipping address and options, and authorize the payment.

When the payment has been handled, {{domxref("PaymentRequestEvent.respondWith()")}} is used to pass the payment result back to the merchant website.

See [Receive a payment request event from the merchant](https://web.dev/orchestrating-payment-transactions/#receive-payment-request-event) for more details of this stage.

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
