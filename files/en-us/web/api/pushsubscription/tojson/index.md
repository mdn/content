---
title: PushSubscription.toJSON()
slug: Web/API/PushSubscription/toJSON
tags:
  - API
  - Experimental
  - Method
  - Push
  - Push API
  - PushSubscription
  - Reference
  - Serializer
  - Service Workers
  - toJSON
browser-compat: api.PushSubscription.toJSON
---
{{SeeCompatTable}}{{APIRef("Push API")}}

The `toJSON()` method of the {{domxref("PushSubscription")}} interface is a
standard serializer: it returns a JSON representation of the subscription properties,
providing a useful shortcut.

## Syntax

```js
mySubscription = subscription.toJSON()
```

### Parameters

None.

### Returns

A JSON object. It currently only contains the subscription endpoint, as an
`endpoint` member.

## Example

```js
navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.getSubscription().then(function(subscription) {
    var mySubscription = subscription.toJSON();
    // do something with subscription details
  })
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
