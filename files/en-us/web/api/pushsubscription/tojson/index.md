---
title: "PushSubscription: toJSON() method"
short-title: toJSON()
slug: Web/API/PushSubscription/toJSON
page-type: web-api-instance-method
browser-compat: api.PushSubscription.toJSON
---

{{APIRef("Push API")}}

The `toJSON()` method of the {{domxref("PushSubscription")}} interface is a
standard serializer: it returns a JSON representation of the subscription properties,
providing a useful shortcut.

## Syntax

```js-nolint
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
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
