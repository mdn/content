---
title: PaymentManager
slug: Web/API/PaymentManager
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PaymentManager
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`PaymentManager`** interface of the {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}} is used to manage various aspects of payment app functionality.

It is accessed via the {{domxref("ServiceWorkerRegistration.paymentManager")}} property.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("PaymentManager.userHint", "userHint")}} {{Experimental_Inline}}
  - : Provides a hint for the browser to display along with the payment app's name and icon in the Payment Handler UI.

## Instance methods

- {{domxref("PaymentManager.enableDelegations", "enableDelegations()")}} {{Experimental_Inline}}
  - : Delegates responsibility for providing various parts of the required payment information to the payment app rather than collecting it from the browser (for example, via autofill).

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
