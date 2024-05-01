---
title: "PaymentRequestEvent: methodData property"
short-title: methodData
slug: Web/API/PaymentRequestEvent/methodData
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PaymentRequestEvent.methodData
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

The **`methodData`** read-only property of the
{{domxref("PaymentRequestEvent")}} interface returns an array of
`PaymentMethodData` objects containing payment method identifiers for the
payment methods that the website accepts and any associated payment method-specific
data.

## Value

An array of `PaymentMethodData` objects. Each object contains the following properties:

- `supportedMethods`
  - : A payment method identifier for a payment method that the merchant website accepts.
- `data`
  - : An object that provides optional information that might be needed by the supported payment methods. If supplied, it will be JSON-serialized.

## Examples

```js
self.addEventListener("paymentrequest", (e) => {
  console.log(e.methodData);
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
