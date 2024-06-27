---
title: "PushSubscription: unsubscribe() method"
short-title: unsubscribe()
slug: Web/API/PushSubscription/unsubscribe
page-type: web-api-instance-method
browser-compat: api.PushSubscription.unsubscribe
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The `unsubscribe()` method of the {{domxref("PushSubscription")}} interface
returns a {{jsxref("Promise")}} that resolves to a boolean value when the
current subscription is successfully unsubscribed.

## Syntax

```js-nolint
unsubscribe()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to a boolean value when the current
subscription is successfully unsubscribed.

## Examples

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

- {{domxref("PushManager.getSubscription")}}
