---
title: Payment Handler API
slug: Web/API/Payment_Handler_API
page-type: web-api-overview
tags:
  - API
  - Experimental
  - Landing
  - Overview
  - Payment Handler API
  - Reference
browser-compat: api.PaymentRequestEvent
---

{{DefaultAPISidebar("Payment Handler API")}}{{securecontext_header}}{{SeeCompatTable}}

The Payment Handler API provides a standardized set of functionality for web applications to directly handle payments, rather than having to be redirected to a separate site for payment handling.

When a merchant website initiates payment via the {{domxref("Payment Request API", "Payment Request API", "", "nocode")}}, the Payment Handler API handles discovery of applicable payment apps, presenting them as choices to the user, opening a payment handler window once a choice has been made to allow the user to enter their payment details, and handling the payment transaction with the payment app.

Communication with payment apps (authorization, passing of payment credentials) is handled via Service Workers.

## Concepts and usage

On a merchant website, a payment request is initiated by the construction of a new {{domxref("PaymentRequest")}} object:

```js
const request = new PaymentRequest([{
  supportedMethods: 'https://bobpay.xyz/pay'
}], {
  total: {
    label: 'total',
    amount: { value: '10', currency: 'USD' }
  }
});
```

The `supportedMethods` property specifies one or more URLs representing the payment methods supported by the merchant.

### Making payment apps available

In supporting browsers, the Payment Request API starts off the process of installing payment apps that can use the payment methods by requesting a [payment method manifest](TBD) file from each URL. Those manifests are returned either directly, or indirectly via a {{httpheader("Link")}} header if stored somewhere else (see [Optionally route the browser to find the payment method manifest in another location](https://web.dev/setting-up-a-payment-method/#optionally-route-the-browser-to-find-the-payment-method-manifest-in-another-location) for details).

A payment method manifest should be called `payment-manifest.json`, and be structured like this:

```json
{
  "default_applications": ["https://bobpay.xyz/manifest.json"],
  "supported_origins": [
    "https://alicepay.friendsofalice.example"
  ]
}
```

- `default_applications` tells the browser where to find the default payment app that can use the BobPay payment method if it doesn't already have one installed.
- `supported_origins` tells the browser where to find other payment apps that it is permitted to use to handle the BobPay payment if needed.

From that manifest, the browser gets the URL of the [web app manifest](/en-US/docs/Web/Manifest) of the supported payment app, which should be called `manifest.json` and look something like this:

```json
{
  "name": "Pay with Bobpay",
  "short_name": "Bobpay",
  "description": "This is an example of the Payment Handler API.",
  "icons": [
    {
      "src": "images/manifest/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "images/manifest/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "serviceworker": {
    "src": "service-worker.js",
    "scope": "/",
    "use_cache": false
  },
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#3f51b5",
  "background_color": "#3f51b5",
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.android.samplepay",
      "min_version": "1",
      "fingerprints": [
        {
          "type": "sha256_cert",
          "value": "4C:FC:14:C6:97:DE:66:4E:66:97:50:C0:24:CE:5F:27:00:92:EE:F3:7F:18:B3:DA:77:66:84:CD:9D:E9:D2:CB"
        }
      ]
    }
  ]
}
```

It first uses the information found in this manifest to present this payment method as a payment option to the user in the browser-provided Payment Request UI in the merchant app ([`name`](/en-US/docs/Web/Manifest/name), [`icons`](/en-US/docs/Web/Manifest/icons)).

When the user chooses this payment method in the UI, if [`prefer_related_applications`](/en-US/docs/Web/Manifest/prefer_related_applications) is set to `true` in the manifest, the browser will launch the platform-specific payment app specified in [`related_applications`](/en-US/docs/Web/Manifest/related_applications). In the above case, `prefer_related_applications` is not specified, so the browser Just-In-Time (JIT) installs the web app, registering the service worker specified in [`serviceworker`](/en-US/docs/Web/Manifest/serviceworker) so it can handle the payment.

At this point, the {{domxref("PaymentRequest.show()")}} method should be invoked by the merchant app to start the payment flow.

See [Serve a web app manifest](https://web.dev/setting-up-a-payment-method/#step-3-serve-a-web-app-manifest) for more details.

### Checking whether the payment app is ready to pay with

The Payment Request API's {{domxref("PaymentRequest.canMakePayment()")}} method returns `true` if a payment app is available on the customer's device, meaning that a payment app that supports the payment method is discovered, and that the platform-specific payment app is installed, or the web-based payment app is ready to be registered.

```js
const canMakePayment = await request.canMakePayment();
if (!canMakePayment) {
  // Fallback to other means of payment or hide the button.
}
```

The Payment Handler API adds an additional mechanism to prepare for handling a payment. When a payment app's service worker has been successfully registered, a {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}} event is fired on it. The service worker can then use the {{domxref("CanMakePaymentEvent.respondWith()")}} method to respond appropriately:

```js
self.addEventListener("canmakepayment", function(e) {
  e.respondWith(true);
});
```

### Handling the payment

When the {{domxref("PaymentRequest.show()")}} method is invoked, a {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}} event is fired on the service worker of the payment app. This event is listened for inside the payment app's service worker to begin the next stage of the payment process.

```js
let payment_request_event;
let resolver;
let client;

// `self` is the global object in service worker
self.addEventListener('paymentrequest', async e => {
  if (payment_request_event) {
    // If there's an ongoing payment transaction, reject it.
    resolver.reject();
  }
  // Preserve the event for future use
  payment_request_event = e;

  // ...

});
```

When a `paymentrequest` event is received, the payment app can open a payment handler window by calling {{domxref("PaymentRequestEvent.openWindow()")}}. The payment handler window will present the customers with a payment app interface where they can authenticate, choose shipping address and options, and authorize the payment.

When the payment has been handled, {{domxref("PaymentRequestEvent.respondWith()")}} is used to pass the payment result back to the merchant website.

See [Receive a payment request event from the merchant](https://web.dev/orchestrating-payment-transactions/#receive-payment-request-event) for more details of this stage.

### Managing payment app functionality

Once a payment app service worker is registered, you can use the service worker's {{domxref("PaymentManager")}} instance (accessed via {{domxref("ServiceWorkerRegistration.paymentManager")}}) to manage various aspects of the payment app's functionality.

For example:

```js
navigator.serviceWorker.register("serviceworker.js")
  .then(registration => {
    registration.paymentManager.userHint = "Card number should be 16 digits";

    registration.paymentManager.enableDelegations(['shippingAddress', 'payerName']) 
      .then(() => {
          // ...
      });

    // ...

  });
```

- {{domxref("PaymentManager.userHint")}} is used to provide a hint for the browser to display along with the payment app's name and icon in the Payment Handler UI.
- {{domxref("PaymentManager.enableDelegations()")}} is used to delegate responsibility for providing various parts of the required payment information to the payment app rather than collecting it from within the merchant website.

## Interfaces

- {{domxref("CanMakePaymentEvent")}}
  - : The event object for the {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}} event, fired on a payment app's service worker when it has been successfully registered to signal that it is ready to handle payments.
- {{domxref("PaymentManager")}}
  - : Used to manage various aspects of payment app functionality. Accessed via the {{domxref("ServiceWorkerRegistration.paymentManager")}} property.
- {{domxref("PaymentRequestEvent")}}
  - : The event object for the {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}} event, fired on a payment app's service worker when a payment flow has been initiated on the merchant website via the {{domxref("PaymentRequest.show()")}} method.

## Extensions to other interfaces

- {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}} event
  - : Fired on a payment app's {{domxref("ServiceWorkerGlobalScope")}} when it has been successfully registered to signal that it is ready to handle payments.
- {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}} event
  - : Fired on a payment app's {{domxref("ServiceWorkerGlobalScope")}} when a payment flow has been initiated on the merchant website via the {{domxref("PaymentRequest.show()")}} method.
- {{domxref("ServiceWorkerRegistration.paymentManager")}}
  - : Returns a payment app's {{domxref("PaymentManager")}} instance, which is used to manage various payment app functionality.

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
