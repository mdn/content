---
title: "PaymentRequestEvent: paymentRequestId property"
short-title: paymentRequestId
slug: Web/API/PaymentRequestEvent/paymentRequestId
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PaymentRequestEvent.paymentRequestId
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}

The **`paymentRequestId`** read-only property of the
{{domxref("PaymentRequestEvent")}} interface returns the ID of the
{{domxref("PaymentRequest")}} object.

## Value

A string containing the ID.

## Examples

```js
self.addEventListener("paymentrequest", (e) => {
  console.log(e.paymentRequestId);
});
```

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
