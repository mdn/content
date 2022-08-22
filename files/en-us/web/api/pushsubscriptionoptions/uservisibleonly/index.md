---
title: PushSubscriptionOptions.userVisibleOnly
slug: Web/API/PushSubscriptionOptions/userVisibleOnly
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - userVisibleOnly
  - PushSubscriptionOptions
browser-compat: api.PushSubscriptionOptions.userVisibleOnly
---
{{DefaultAPISidebar("Push API")}}

The **`userVisibleOnly`** read-only property of the {{domxref("PushSubscriptionOptions")}} interface indicates if the returned push subscription will only be used for messages whose effect is made visible to the user.

## Value

A boolean value that indicates whether the returned push subscription will only be used for messages whose effect is made visible to the user.

## Examples

In the example below the value of `userVisibleOnly` is printed to the console.

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const options = subscription.options;
    console.log(options.userVisibleOnly); // true if this is a user visible subscription
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
