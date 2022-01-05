---
title: PushSubscription.endpoint
slug: Web/API/PushSubscription/endpoint
tags:
  - API
  - Experimental
  - Property
  - Push
  - Push API
  - PushSubscription
  - Reference
  - Service Workers
  - endPoint
browser-compat: api.PushSubscription.endpoint
---
{{SeeCompatTable}}{{APIRef("Push API")}}

The **`endpoint`** read-only property of the
{{domxref("PushSubscription")}} interface returns a {{domxref("USVString")}} containing
the endpoint associated with the push subscription.

The endpoint takes the form of a custom URL pointing to a push server, which can be
used to send a push message to the particular service worker instance that subscribed to
the push service. For this reason, it is a good idea to keep your endpoint a secret, so
others do not hijack it and abuse the push functionality.

## Syntax

```js
var myEnd = pushSubscription.endpoint;
```

### Value

A {{domxref("USVString")}}.

## Example

```js
navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.subscribe({userVisibleOnly: true}).then(function(subscription) {
    console.log(subscription.endpoint);

      // At this point you would most likely send the subscription
      // endpoint to your server, save it, then use it to send a
      // push message at a later date
  })
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
