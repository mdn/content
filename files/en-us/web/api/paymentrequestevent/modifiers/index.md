---
title: "PaymentRequestEvent: modifiers property"
short-title: modifiers
slug: Web/API/PaymentRequestEvent/modifiers
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PaymentRequestEvent.modifiers
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

The **`modifiers`** read-only property of the
{{domxref("PaymentRequestEvent")}} interface returns an {{jsxref("Array")}} of `PaymentDetailsModifier` objects containing modifiers for payment details.

## Value

An array of objects containing modifiers for payment details. These objects contain the following properties:

- `supportedMethods`
  - : A payment method identifier. The members of the object only apply to the payment if the user selects this payment method.
- `total`
  - : A `PaymentItem` object containing the following properties:
    - `label`
      - : A string containing a human-readable description of the item, which may be displayed to the user.
    - `amount`
      - : A `PaymentCurrencyAmount` object (see [`total` > Value](/en-US/docs/Web/API/PaymentRequestEvent/total#value)).
    - `pending`
      - : A boolean. When set to true it means that the `amount` member is not final. This is commonly used to show items such as shipping or tax amounts that depend upon selection of shipping address or shipping option.
- `additionalDisplayItems`
  - : An array of `PaymentItem` objects providing additional display items to be included in the payment details. This member is commonly used to add a discount or surcharge line item indicating the reason for the different total amount for the selected payment method that the user agent MAY display.
- `data`
  - : An object that provides optional information that might be needed by the supported payment methods. If supplied, it will be JSON-serialized.

## Examples

```js
self.addEventListener("paymentrequest", (e) => {
  console.log(e.modifiers);
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
