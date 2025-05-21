---
title: Payment Handler API
slug: Web/API/Payment_Handler_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.PaymentRequestEvent
---

{{DefaultAPISidebar("Payment Handler API")}}{{securecontext_header}}{{SeeCompatTable}}{{AvailableInWorkers}}

The Payment Handler API provides a standardized set of functionality for web applications to directly handle payments, rather than having to be redirected to a separate site for payment handling.

When a merchant website initiates payment via the {{domxref("Payment Request API", "Payment Request API", "", "nocode")}}, the Payment Handler API handles discovery of applicable payment apps, presenting them as choices to the user, opening a payment handler window once a choice has been made to allow the user to enter their payment details, and handling the payment transaction with the payment app.

Communication with payment apps (authorization, passing of payment credentials) is handled via Service Workers.

## Concepts and usage

On a merchant website, a payment request is initiated by the construction of a new {{domxref("PaymentRequest")}} object:

```js
const request = new PaymentRequest(
  [
    {
      supportedMethods: "https://bobbucks.dev/pay",
    },
  ],
  {
    total: {
      label: "total",
      amount: { value: "10", currency: "USD" },
    },
  },
);
```

The `supportedMethods` property specifies a URL representing the payment method supported by the merchant. To use more than one payment method, you would specify them in an array of objects, like this:

```js
const request = new PaymentRequest(
  [
    {
      supportedMethods: "https://alicebucks.dev/pay",
    },
    {
      supportedMethods: "https://bobbucks.dev/pay",
    },
  ],
  {
    total: {
      label: "total",
      amount: { value: "10", currency: "USD" },
    },
  },
);
```

### Making payment apps available

In supporting browsers, the process starts by requesting a payment method manifest file from each URL. A payment method manifest is typically called something like `payment-manifest.json` (the exact name can be whatever you like), and should be structured like this:

```json
{
  "default_applications": ["https://bobbucks.dev/manifest.json"],
  "supported_origins": ["https://alicepay.friendsofalice.example"]
}
```

Given a payment method identifier like `https://bobbucks.dev/pay`, the browser:

1. Starts loading `https://bobbucks.dev/pay` and checks its HTTP headers.
   1. If a {{httpheader("Link")}} header is found with `rel="payment-method-manifest"`, then it downloads the payment method manifest at that location instead (see [Optionally route the browser to find the payment method manifest in another location](https://web.dev/articles/setting-up-a-payment-method#optionally_route_the_browser_to_find_the_payment_method_manifest_in_another_location) for details).
   2. Otherwise, parse the response body of `https://bobbucks.dev/pay` as the payment method manifest.
2. Parses the downloaded content as JSON with `default_applications` and `supported_origins` members.

These members have the following purposes:

- `default_applications` tells the browser where to find the default payment app that can use the BobBucks payment method if it doesn't already have one installed.
- `supported_origins` tells the browser what other payment apps are permitted to handle the BobBucks payment if needed. If they are already installed on the device, they will be presented to the user as alternative payment options alongside the default application.

From the payment method manifest, the browser gets the URL of the default payment apps' [web app manifest](/en-US/docs/Web/Progressive_web_apps/Manifest) files, which can be called whatever you like, and look something like this:

```json
{
  "name": "Pay with BobBucks",
  "short_name": "BobBucks",
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

When the {{domxref("PaymentRequest.show()")}} method is invoked by the merchant app in response to a user gesture, the browser uses the [`name`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/name) and [`icons`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/icons) information found in each manifest to present the payment apps to the user in the browser-provided Payment Request UI.

- If there are multiple payment app options, a list of options is presented to the user for them to choose from. Selecting a payment app will start the payment flow, which causes the browser to Just-In-Time (JIT) install the web app if necessary, registering the service worker specified in the [`serviceworker`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/serviceworker) member so it can handle the payment.
- If there is only one payment app option, the {{domxref("PaymentRequest.show()")}} method will start the payment flow with this payment app, JIT-installing it if necessary, as described above. This is an optimization to avoid presenting the user with a list that contains only one payment app choice.

> [!NOTE]
> If [`prefer_related_applications`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) is set to `true` in the payment app manifest, the browser will launch the platform-specific payment app specified in [`related_applications`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) to handle the payment (if it is available) instead of the web payment app.

See [Serve a web app manifest](https://web.dev/articles/setting-up-a-payment-method#step_3_serve_a_web_app_manifest) for more details.

### Checking whether the payment app is ready to pay with

The Payment Request API's {{domxref("PaymentRequest.canMakePayment()")}} method returns `true` if a payment app is available on the customer's device, meaning that a payment app that supports the payment method is discovered, and that the platform-specific payment app is installed, or the web-based payment app is ready to be registered.

```js
async function checkCanMakePayment() {
  // …

  const canMakePayment = await request.canMakePayment();
  if (!canMakePayment) {
    // Fallback to other means of payment or hide the button.
  }
}
```

The Payment Handler API adds an additional mechanism to prepare for handling a payment. The {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}} event is fired on a payment app's service worker to check whether it is ready to handle a payment. Specifically, it is fired when the merchant website calls the {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}} constructor. The service worker can then use the {{domxref("CanMakePaymentEvent.respondWith()")}} method to respond appropriately:

```js
self.addEventListener("canmakepayment", (e) => {
  e.respondWith(
    new Promise((resolve, reject) => {
      someAppSpecificLogic()
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    }),
  );
});
```

The promise returned by `respondWith()` resolves with a boolean to signal that it is ready to handle a payment request (`true`), or not (`false`).

### Handling the payment

After the {{domxref("PaymentRequest.show()")}} method is invoked, a {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}} event is fired on the service worker of the payment app. This event is listened for inside the payment app's service worker to begin the next stage of the payment process.

```js
let payment_request_event;
let resolver;
let client;

// `self` is the global object in service worker
self.addEventListener("paymentrequest", async (e) => {
  if (payment_request_event) {
    // If there's an ongoing payment transaction, reject it.
    resolver.reject();
  }
  // Preserve the event for future use
  payment_request_event = e;

  // …
});
```

When a `paymentrequest` event is received, the payment app can open a payment handler window by calling {{domxref("PaymentRequestEvent.openWindow()")}}. The payment handler window will present the customers with a payment app interface where they can authenticate, choose shipping address and options, and authorize the payment.

When the payment has been handled, {{domxref("PaymentRequestEvent.respondWith()")}} is used to pass the payment result back to the merchant website.

See [Receive a payment request event from the merchant](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event) for more details of this stage.

### Managing payment app functionality

Once a payment app service worker is registered, you can use the service worker's {{domxref("PaymentManager")}} instance (accessed via {{domxref("ServiceWorkerRegistration.paymentManager")}}) to manage various aspects of the payment app's functionality.

For example:

```js
navigator.serviceWorker.register("serviceworker.js").then((registration) => {
  registration.paymentManager.userHint = "Card number should be 16 digits";

  registration.paymentManager
    .enableDelegations(["shippingAddress", "payerName"])
    .then(() => {
      // …
    });

  // …
});
```

- {{domxref("PaymentManager.userHint")}} is used to provide a hint for the browser to display along with the payment app's name and icon in the Payment Handler UI.
- {{domxref("PaymentManager.enableDelegations()")}} is used to delegate responsibility for providing various parts of the required payment information to the payment app rather than collecting it from the browser (for example, via autofill).

## Interfaces

- {{domxref("CanMakePaymentEvent")}}
  - : The event object for the {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}} event, fired on a payment app's service worker when it has been successfully registered to signal that it is ready to handle payments.
- {{domxref("PaymentManager")}}
  - : Used to manage various aspects of payment app functionality. Accessed via the {{domxref("ServiceWorkerRegistration.paymentManager")}} property.
- {{domxref("PaymentRequestEvent")}} {{Experimental_Inline}}
  - : The event object for the {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}} event, fired on a payment app's service worker when a payment flow has been initiated on the merchant website via the {{domxref("PaymentRequest.show()")}} method.

## Extensions to other interfaces

- {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}} event
  - : Fired on a payment app's {{domxref("ServiceWorkerGlobalScope")}} when it has been successfully registered, to signal that it is ready to handle payments.
- {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}} event
  - : Fired on a payment app's {{domxref("ServiceWorkerGlobalScope")}} when a payment flow has been initiated on the merchant website via the {{domxref("PaymentRequest.show()")}} method.
- {{domxref("ServiceWorkerRegistration.paymentManager")}}
  - : Returns a payment app's {{domxref("PaymentManager")}} instance, which is used to manage various payment app functionality.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [BobBucks sample payment app](https://bobbucks.dev/)
- [Web-based payment apps overview](https://web.dev/articles/web-based-payment-apps-overview)
- [Setting up a payment method](https://web.dev/articles/setting-up-a-payment-method)
- [Life of a payment transaction](https://web.dev/articles/life-of-a-payment-transaction)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
