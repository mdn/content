---
title: "PaymentRequestEvent: respondWith() method"
short-title: respondWith()
slug: Web/API/PaymentRequestEvent/respondWith
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PaymentRequestEvent.respondWith
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}

The **`respondWith()`** method of the {{domxref("PaymentRequestEvent")}} interface prevents the default event handling and allows you to provide a {{jsxref("Promise")}} for a {{domxref("PaymentResponse")}} object yourself.

## Syntax

```js-nolint
respondWith(promise)
```

### Parameters

- `promise`
  - : A {{jsxref('Promise')}} that resolves with a `PaymentHandlerResponse` object.

### Return value

A `PaymentHandlerResponse` object. This contains the following properties:

- `methodName`
  - : The payment method identifier for the payment method that the user selected to fulfill the transaction.
- `details`
  - : A JSON-serializable object that provides a payment method-specific message used by the merchant to process the transaction and determine a successful fund transfer. See [7.1.2 details attribute](https://w3c.github.io/payment-handler/#details-attribute) for more details.

## Examples

```js
…
self.addEventListener('paymentrequest', async e => {
…
  // Retain a promise for future resolution
  // Polyfill for PromiseResolver at link below.
  resolver = new PromiseResolver();

  // Pass a promise that resolves when payment is done.
  e.respondWith(resolver.promise);
  // Open the checkout page.
  try {
    // Open the window and preserve the client
    client = await e.openWindow(checkoutURL);
    if (!client) {
      // Reject if the window fails to open
      throw 'Failed to open window';
    }
  } catch (err) {
    // Reject the promise on failure
    resolver.reject(err);
  };
});
…
```

See [Open the payment handler window to display the web-based payment app frontend](https://web.dev/orchestrating-payment-transactions/#open-payment-handler-window) for more details about how this would be used.

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
