---
title: "PaymentRequestEvent: openWindow() method"
short-title: openWindow()
slug: Web/API/PaymentRequestEvent/openWindow
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PaymentRequestEvent.openWindow
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}

The **`openWindow()`** method of the {{domxref("PaymentRequestEvent")}} interface opens the specified URL in a new window, only if the given URL is on the same origin as the calling page. It returns a {{jsxref("Promise")}} that resolves with a reference to a {{domxref("WindowClient")}}.

## Syntax

```js-nolint
openWindow(url)
```

### Parameters

- `url`
  - : The URL to open in the new window. It must be on the same origin as the calling
    page.

### Return value

A {{jsxref("Promise")}} that resolves with a reference to a
{{domxref("WindowClient")}}.

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
