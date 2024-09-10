---
title: "PushSubscription: toJSON() method"
short-title: toJSON()
slug: Web/API/PushSubscription/toJSON
page-type: web-api-instance-method
browser-compat: api.PushSubscription.toJSON
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

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

A JSON object. It contains the subscription endpoint, `expirationTime` and public keys, as an
`endpoint` member, an `expirationTime` member and a `keys` member.

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
