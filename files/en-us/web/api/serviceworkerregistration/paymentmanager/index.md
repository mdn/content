---
title: "ServiceWorkerRegistration: paymentManager property"
short-title: paymentManager
slug: Web/API/ServiceWorkerRegistration/paymentManager
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ServiceWorkerRegistration.paymentManager
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`paymentManager`** read-only property of the
{{domxref("ServiceWorkerRegistration")}} interface returns a payment app's {{domxref("PaymentManager")}} instance, which is used to manage various payment app functionality.

## Value

A {{domxref("PaymentManager")}} object instance.

## Examples

```js
navigator.serviceWorker.register("serviceworker.js").then((registration) => {
  registration.paymentManager.userHint = "Card number should be 16 digits";

  registration.paymentManager
    .enableDelegations(["shippingAddress", "payerName"])
    .then(() => {
      // ...
    });

  // ...
});
```

- {{domxref("PaymentManager.userHint")}} is used to provide a hint for the browser to display along with the payment app's name and icon in the Payment Handler UI.
- {{domxref("PaymentManager.enableDelegations()")}} is used to delegate responsibility for providing various parts of the required payment information to the payment app rather than collecting it from within the merchant website.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Payment Handler API", "", "", "nocode")}}
- [Web-based payment apps overview](https://web.dev/articles/web-based-payment-apps-overview)
- [Setting up a payment method](https://web.dev/articles/setting-up-a-payment-method)
- [Life of a payment transaction](https://web.dev/articles/life-of-a-payment-transaction)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
