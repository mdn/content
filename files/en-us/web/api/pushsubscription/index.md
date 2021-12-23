---
title: PushSubscription
slug: Web/API/PushSubscription
tags:
  - API
  - Experimental
  - Interface
  - Push
  - Push API
  - PushSubscription
  - Reference
  - Service Workers
browser-compat: api.PushSubscription
---
{{SeeCompatTable}}{{ApiRef("Push API")}}

The `PushSubscription` interface of the [Push API](/en-US/docs/Web/API/Push_API) provides a subcription's URL endpoint and allows unsubscription from a push service.

An instance of this interface can be serialized.

## Properties

- {{domxref("PushSubscription.endpoint")}} {{readonlyinline}}
  - : A {{domxref("USVString")}} containing the endpoint associated with the push subscription.
- {{domxref("PushSubscription.expirationTime")}} {{readonlyinline}}
  - : A {{domxref("DOMHighResTimeStamp")}} of the subscription expiration time associated with the push subscription, if there is one, or null otherwise.
- {{domxref("PushSubscription.options")}} {{readonlyinline}}
  - : An object containing the options used to create the subscription.
- {{domxref("PushSubscription.subscriptionId")}} {{deprecated_inline}} {{readonlyinline}}
  - : A {{domxref("DOMString")}} containing the subscription ID associated with the push subscription.

## Methods

- {{domxref("PushSubscription.getKey()")}}
  - : Returns an {{jsxref("ArrayBuffer")}} which contains the client's public key, which can then be sent to a server and used in encrypting push message data.
- {{domxref("PushSubscription.toJSON()")}}
  - : Standard serializer — returns a JSON representation of the subscription properties.
- {{domxref("PushSubscription.unsubscribe()")}}
  - : Starts the asynchronous process of unsubscribing from the push service, returning a {{jsxref("Promise")}} that resolves to a boolean value when the current subscription is successfully unregistered.

## Example

```js
navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.getSubscription().then(function(subscription) {
    subscription.unsubscribe().then(function(successful) {
      // You've successfully unsubscribed
    }).catch(function(e) {
      // Unsubscription failed
    })
  })
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Push API](/en-US/docs/Web/API/Push_API)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
