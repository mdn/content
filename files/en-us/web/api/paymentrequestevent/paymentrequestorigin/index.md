---
title: "PaymentRequestEvent: paymentRequestOrigin property"
short-title: paymentRequestOrigin
slug: Web/API/PaymentRequestEvent/paymentRequestOrigin
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PaymentRequestEvent.paymentRequestOrigin
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

The **`paymentRequestOrigin`** read-only property of the
{{domxref("PaymentRequestEvent")}} interface returns the origin where the
{{domxref("PaymentRequest")}} object was initialized.

## Value

A string.

## Examples

```js
self.addEventListener("paymentrequest", (e) => {
  console.log(e.paymentRequestOrigin);
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
