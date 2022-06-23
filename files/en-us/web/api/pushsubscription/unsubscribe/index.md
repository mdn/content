---
title: PushSubscription.unsubscribe()
slug: Web/API/PushSubscription/unsubscribe
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - Method
  - Push
  - Push API
  - PushSubscription
  - Reference
  - Service Workers
  - unsubscribe
browser-compat: api.PushSubscription.unsubscribe
---
{{SeeCompatTable}}{{APIRef("Push API")}}

The `unsubscribe()` method of the {{domxref("PushSubscription")}} interface
returns a {{jsxref("Promise")}} that resolves to a boolean value when the
current subscription is successfully unsubscribed.

## Syntax

```js
unsubscribe()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to a boolean value when the current
subscription is successfully unsubscribed.

## Examples

```js
navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.getSubscription().then(function(subscription) {
    subscription.unsubscribe().then(function(successful) {
      // You've successfully unsubscribed
    }).catch(function(e) {
      // Unsubscribing failed
    })
  })
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PushManager.getSubscription")}}
