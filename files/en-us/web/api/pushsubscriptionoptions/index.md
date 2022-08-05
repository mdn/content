---
title: PushSubscriptionOptions
slug: Web/API/PushSubscriptionOptions
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - PushSubscriptionOptions
browser-compat: api.PushSubscriptionOptions
---
{{DefaultAPISidebar("Push API")}}

The **`PushSubscriptionOptions`** interface of the {{domxref('Push API','','',' ')}} represents the options associated with a push subscription.

The read-only `PushSubscriptionOptions` object is returned by calling {{domxref("PushSubscription.options")}} on a {{domxref("PushSubscription")}}. This interface has no constructor of its own.

## Properties

- {{domxref("PushSubscriptionOptions.userVisibleOnly")}} {{ReadOnlyInline}}
  - : A boolean value indicating that the returned push
    subscription will only be used for messages whose effect is made visible to the user.
- {{domxref("PushSubscriptionOptions.applicationServerKey")}} {{ReadOnlyInline}}
  - : A public key your push server will use to send
    messages to client apps via a push server.

## Examples

Calling {{domxref("PushSubscription.options")}} on a {{domxref("PushSubscription")}} returns a `PushSubscriptionOptions` object. In the example below this is printed to the console.

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const options = subscription.options;
    console.log(options); // a PushSubscriptionOptions object
  })
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
