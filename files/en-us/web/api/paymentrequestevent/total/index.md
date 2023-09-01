---
title: "PaymentRequestEvent: total property"
short-title: total
slug: Web/API/PaymentRequestEvent/total
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PaymentRequestEvent.total
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}

The **`total`** read-only property of the {{domxref("PaymentRequestEvent")}} interface returns a
`PaymentCurrencyAmount` object containing the total amount being requested for payment.

## Value

A `PaymentCurrencyAmount` object. This object contains the following properties:

- `currency`
  - : A string containing a three-letter [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) standard currency code representing the currency of the payment. Examples include `USD`, `CAN`, and `GBP`.
- `value`
  - : A string containing a decimal monetary value, e.g. `2.55`.

## Examples

```js
self.addEventListener("paymentrequest", (e) => {
  console.log(e.total);
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
