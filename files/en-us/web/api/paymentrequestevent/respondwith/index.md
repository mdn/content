---
title: "PaymentRequestEvent: respondWith() method"
short-title: respondWith()
slug: Web/API/PaymentRequestEvent/respondWith
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PaymentRequestEvent.respondWith
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

The **`respondWith()`** method of the {{domxref("PaymentRequestEvent")}} interface prevents the default event handling and allows you to provide a {{jsxref("Promise")}} for a payment handler response object yourself.

## Syntax

```js-nolint
respondWith(promise)
```

### Parameters

- `promise`
  - : A payment handler response object or a {{jsxref('Promise')}} that resolves to one. This object should contain the following properties:
    - `methodName`
      - : The payment method identifier for the payment method that the user selected to fulfill the transaction.
    - `details`
      - : A JSON-serializable object that provides a payment method-specific message used by the merchant to process the transaction and determine a successful fund transfer. See [7.1.2 details attribute](https://w3c.github.io/payment-handler/#details-attribute) for more details.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The example below is taken from [Open the payment handler window to display the web-based payment app frontend](https://web.dev/articles/orchestrating-payment-transactions#open-payment-handler-window). Read the article to understand the context of the code.

```js
self.addEventListener("paymentrequest", async (e) => {
  // Retain a promise for future resolution
  resolver = new PromiseResolver();

  // Pass a promise that resolves when payment is done.
  e.respondWith(resolver.promise);
  // Open the checkout page.
  try {
    // Open the window and preserve the client
    client = await e.openWindow(checkoutURL);
    if (!client) {
      // Reject if the window fails to open
      throw "Failed to open window";
    }
  } catch (err) {
    // Reject the promise on failure
    resolver.reject(err);
  }
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
