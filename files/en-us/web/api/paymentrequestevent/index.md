---
title: PaymentRequestEvent
slug: Web/API/PaymentRequestEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PaymentRequestEvent
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}

The **`PaymentRequestEvent`** interface of the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) is the object passed to a payment handler when a {{domxref("PaymentRequest")}} is made.

{{InheritanceDiagram}}

## Constructor

- {{domxref("PaymentRequestEvent.PaymentRequestEvent","PaymentRequestEvent()")}} {{Experimental_Inline}}
  - : Creates a new `PaymentRequestEvent` object instance.

## Instance properties

- {{domxref("PaymentRequestEvent.instrumentKey","instrumentKey")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns a {{domxref("PaymentInstrument")}} object reflecting the payment instrument selected by the user or an empty string if the user has not registered or chosen a payment instrument.
- {{domxref("PaymentRequestEvent.methodData","methodData")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array of {{domxref("PaymentMethodData")}} objects containing payment method identifiers for the payment methods that the website accepts and any associated payment method specific data.
- {{domxref("PaymentRequestEvent.modifiers","modifiers")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array of objects containing changes to payment details.
- {{domxref("PaymentRequestEvent.paymentRequestId","paymentRequestId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the ID of the {{domxref("PaymentRequest")}} object.
- {{domxref("PaymentRequestEvent.paymentRequestOrigin","paymentRequestOrigin")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the origin where the {{domxref("PaymentRequest")}} object was initialized.
- {{domxref("PaymentRequestEvent.topOrigin","topOrigin")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the top-level origin where the {{domxref("PaymentRequest")}} object was initialized.
- {{domxref("PaymentRequestEvent.total","total")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the total amount being requested for payment.

## Instance methods

- {{domxref("PaymentRequestEvent.openWindow","openWindow()")}} {{Experimental_Inline}}
  - : Opens the specified URL in a new window, if and only if the given URL is on the same origin as the calling page. It returns a {{jsxref("Promise")}} that resolves with a reference to a {{domxref("WindowClient")}}.
- {{domxref("PaymentRequestEvent.respondWith","respondWith()")}} {{Experimental_Inline}}
  - : Prevents the default event handling and allows you to provide a {{jsxref("Promise")}} for a {{domxref("PaymentResponse")}} object yourself.

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

- [Web-based payment apps overview](https://web.dev/web-based-payment-apps-overview/)
- [Setting up a payment method](https://web.dev/setting-up-a-payment-method/)
- [Life of a payment transaction](https://web.dev/life-of-a-payment-transaction/)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
