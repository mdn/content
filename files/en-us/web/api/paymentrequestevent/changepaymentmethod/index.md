---
title: "PaymentRequestEvent: changePaymentMethod() method"
short-title: changePaymentMethod()
slug: Web/API/PaymentRequestEvent/changePaymentMethod
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PaymentRequestEvent.changePaymentMethod
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

The **`changePaymentMethod()`** method of the {{domxref("PaymentRequestEvent")}} interface is used by the payment handler to get an updated total, given such payment method details as the billing address.

When this method is invoked, a {{domxref("PaymentMethodChangeEvent")}} is fired.

## Syntax

```js-nolint
changePaymentMethod(methodName)
changePaymentMethod(methodName, methodDetails)
```

### Parameters

- `methodName`
  - : The name of the payment method to be used.
- `methodDetails` {{optional_inline}}
  - : An object containing method-specific details that are being updated.

### Return value

A {{jsxref("Promise")}} that resolves with a `PaymentRequestDetailsUpdate` object. This object contains the following properties:

- `error`
  - : A string that explains why the user-selected payment method cannot be used.
- `total`
  - : An updated total based on the changed payment method. The total can change, for example, because the billing address of the payment method selected by the user changes the applicable sales tax.
- `modifiers`

  - : An {{jsxref("Array")}} of `PaymentDetailsModifier` objects, whose properties are described in {{domxref("PaymentRequestEvent.modifiers")}}.

- `paymentMethodErrors`
  - : An object containing validation errors for the payment method, if any.

## Examples

The following shows a trivial code snippet that could be used in a service worker to send a payment method change notification to the main payment handler window. For a complete test example, see [Payment handler for testing payment method change event](https://rsolomakhin.github.io/pr/apps/pmc/).

```js
function notifyPaymentMethodChanged(e) {
  e.changePaymentMethod("someMethod")
    .then((paymentMethodChangeResponse) => {
      paymentHandlerWindow.postMessage(paymentMethodChangeResponse);
    })
    .catch((error) => {
      sendMessage({ error: error.message });
    });
}
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
