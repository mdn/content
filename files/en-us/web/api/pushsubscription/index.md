---
title: PushSubscription
slug: Web/API/PushSubscription
page-type: web-api-interface
browser-compat: api.PushSubscription
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The `PushSubscription` interface of the [Push API](/en-US/docs/Web/API/Push_API) provides a subscription's URL endpoint along with the public key and secrets that should be used for encrypting push messages to this subscription.
This information must be passed to the application server, using any desired application-specific method.

The interface also provides information about when the subscription will expire, and a method to unsubscribe from the subscription.

## Instance properties

- {{domxref("PushSubscription.endpoint")}} {{ReadOnlyInline}}
  - : A string containing the endpoint associated with the push subscription.
- {{domxref("PushSubscription.expirationTime")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} of the subscription expiration time associated with the push subscription, if there is one, or null otherwise.
- {{domxref("PushSubscription.options")}} {{ReadOnlyInline}}
  - : An object containing the options used to create the subscription.
- {{domxref("PushSubscription.subscriptionId")}} {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : A string containing the subscription ID associated with the push subscription.

## Instance methods

- {{domxref("PushSubscription.getKey()")}}
  - : Returns an {{jsxref("ArrayBuffer")}} which contains the client's public key, which can then be sent to a server and used in encrypting push message data.
- {{domxref("PushSubscription.toJSON()")}}
  - : Standard serializer — returns a JSON representation of the subscription properties.
- {{domxref("PushSubscription.unsubscribe()")}}
  - : Starts the asynchronous process of unsubscribing from the push service, returning a {{jsxref("Promise")}} that resolves to a boolean value when the current subscription is successfully unregistered.

## Description

Each browser uses a particular push service.
A service worker can use {{domxref("PushManager.subscribe()")}} to subscribe to the supported service, and use the returned `PushSubscription` to discover the endpoint where push messages should be sent.

The `PushSubscription` is also used to get the public key and secret that the application server must use to encrypt the messages that it sends to the push service.
Note that the private keys used to decrypt push messages are not shared by the browser, and are used to decrypt messages before they are passed to the service worker.
This ensures that push messages remain private as they pass through the push server infrastructure.

The service worker doesn't need to know anything about the endpoints or encryption, other than to pass the relevant information onto the application server.
Any mechanism may be used to share the information with the application server.

## Example

### Sending coding information to the server

The [`p256dh`](/en-US/docs/Web/API/PushSubscription/getKey#p256dh) public key and [`auth`](/en-US/docs/Web/API/PushSubscription/getKey#auth) secret used for encrypting the message are provided to the service worker via its push subscription, using the {{domxref("PushSubscription.getKey()")}} method, along with the target endpoint for sending push messages in {{domxref("PushSubscription.endpoint")}}.
The coding that should be used for encryption is provided by the {{domxref("PushManager.supportedContentEncodings")}} static property.

This example shows how you might put the needed information from `PushSubscription` and `supportedContentEncodings` into a JSON object, serialize it using [`JSON.stringify()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), and post the result to the application server.

```js
// Get a PushSubscription object
const pushSubscription =
  await serviceWorkerRegistration.pushManager.subscribe();

// Create an object containing the information needed by the app server
const subscriptionObject = {
  endpoint: pushSubscription.endpoint,
  keys: {
    p256dh: pushSubscription.getKey("p256dh"),
    auth: pushSubscription.getKey("auth"),
  },
  encoding: PushManager.supportedContentEncodings,
  /* other app-specific data, such as user identity */
};

// Stringify the object an post to the app server
fetch("https://example.com/push/", {
  method: "post",
  body: JSON.stringify(subscriptionObject),
});
```

### Unsubscribing from a push manager

```js
navigator.serviceWorker.ready
  .then((reg) => reg.pushManager.getSubscription())
  .then((subscription) => subscription.unsubscribe())
  .then((successful) => {
    // You've successfully unsubscribed
  })
  .catch((e) => {
    // Unsubscribing failed
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Push API](/en-US/docs/Web/API/Push_API)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
