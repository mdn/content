---
title: PushSubscription.toJSON()
slug: Web/API/PushSubscription/toJSON
page-type: web-api-instance-method
tags:
  - API
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
{{APIRef("Push API")}}

The `toJSON()` method of the {{domxref("PushSubscription")}} interface is a
standard serializer: it returns a JSON representation of the subscription properties,
providing a useful shortcut.

## Syntax

```js
toJSON()
```

### Parameters

None.

### Return value

A JSON object. It currently only contains the subscription endpoint, as an
`endpoint` member.

## Examples

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const mySubscription = subscription.toJSON();
    // do something with subscription details
  })
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
