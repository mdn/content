---
title: "PaymentRequestEvent: topOrigin property"
short-title: topOrigin
slug: Web/API/PaymentRequestEvent/topOrigin
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PaymentRequestEvent.topOrigin
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

The **`topOrigin`** read-only property of the
{{domxref("PaymentRequestEvent")}} interface returns the top-level payee origin where
the {{domxref("PaymentRequest")}} object was initialized.

## Value

A string.

## Examples

```js
self.addEventListener("paymentrequest", (e) => {
  console.log(e.topOrigin);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web-based payment apps overview](https://web.dev/articles/web-based-payment-apps-overview)
- [Setting up a payment method](https://web.dev/articles/setting-up-a-payment-method)
- [Life of a payment transaction](https://web.dev/articles/life-of-a-payment-transaction)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
