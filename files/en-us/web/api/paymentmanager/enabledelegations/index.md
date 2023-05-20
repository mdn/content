---
title: "PaymentManager: enableDelegations() method"
short-title: enableDelegations()
slug: Web/API/PaymentManager/enableDelegations
page-type: web-api-instance-method
status:
  - experimental
  - non-standard
browser-compat: api.PaymentManager.enableDelegations
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{Non-standard_header}}

The **`enableDelegations()`** method of the {{domxref("PaymentManager")}} interface delegates responsibility for providing various parts of the required payment information to the payment app rather than collecting it from the browser (for example, via autofill).

For example, if the `requestShipping` option is set to `true` in the options object when invoking the {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}} constructor, a shipping address will be returned.

- If `enableDelegations()` was used to delegate `shippingAddress`, that address will come from the payment app.
- If not, it will come from the browser autofill.

## Syntax

```js-nolint
enableDelegations(delegations)
```

### Parameters

- `delegations` {{optional_inline}}
  - : An array containing one or more enumerated values that specify the payment information you want to delegate to the payment app. Possible values can be:
    - `payerEmail`
      - : The payment app will provide the payer's email whenever it is needed.
    - `payerName`
      - : The payment app will provide the payer's name whenever it is needed.
    - `payerPhone`
      - : The payment app will provide the payer's phone number whenever it is needed.
    - `shippingAddress`
      - : The payment app will provide the shipping address whenever it is needed.

### Return value

A {{jsxref("Promise")}} that resolves with a value of `undefined`.

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
- [Web-based payment apps overview](https://web.dev/web-based-payment-apps-overview/)
- [Setting up a payment method](https://web.dev/setting-up-a-payment-method/)
- [Life of a payment transaction](https://web.dev/life-of-a-payment-transaction/)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
