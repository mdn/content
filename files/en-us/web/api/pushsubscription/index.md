---
title: PushSubscription
slug: Web/API/PushSubscription
page-type: web-api-interface
browser-compat: api.PushSubscription
---

{{ApiRef("Push API")}}{{SecureContext_Header}}

The `PushSubscription` interface of the [Push API](/en-US/docs/Web/API/Push_API) provides a subscription's URL endpoint and allows unsubscribing from a push service.

An instance of this interface can be serialized.

## Instance properties

- {{domxref("PushSubscription.endpoint")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : A string containing the endpoint associated with the push subscription.
- {{domxref("PushSubscription.expirationTime")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : A {{domxref("DOMHighResTimeStamp")}} of the subscription expiration time associated with the push subscription, if there is one, or null otherwise.
- {{domxref("PushSubscription.options")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : An object containing the options used to create the subscription.
- {{domxref("PushSubscription.subscriptionId")}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : A string containing the subscription ID associated with the push subscription.

## Instance methods

- {{domxref("PushSubscription.getKey()")}} {{SecureContext_Inline}}
  - : Returns an {{jsxref("ArrayBuffer")}} which contains the client's public key, which can then be sent to a server and used in encrypting push message data.
- {{domxref("PushSubscription.toJSON()")}} {{SecureContext_Inline}}
  - : Standard serializer — returns a JSON representation of the subscription properties.
- {{domxref("PushSubscription.unsubscribe()")}} {{SecureContext_Inline}}
  - : Starts the asynchronous process of unsubscribing from the push service, returning a {{jsxref("Promise")}} that resolves to a boolean value when the current subscription is successfully unregistered.

## Example

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    subscription
      .unsubscribe()
      .then((successful) => {
        // You've successfully unsubscribed
      })
      .catch((e) => {
        // Unsubscribing failed
      });
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Push API](/en-US/docs/Web/API/Push_API)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
