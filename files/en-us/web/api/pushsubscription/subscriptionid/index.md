---
title: PushSubscription.subscriptionId
slug: Web/API/PushSubscription/subscriptionId
tags:
  - API
  - Deprecated
  - Experimental
  - Property
  - Push
  - Push API
  - PushSubscription
  - Reference
  - Service Workers
  - subscriptionId
browser-compat: api.PushSubscription.subscriptionId
---
{{APIRef("Push API")}}{{Deprecated_header}}

The **`subscriptionId`** read-only property of the
{{domxref("PushSubscription")}} interface returns a {{domxref("DOMString")}} containing
the subscription ID associated with the push subscription.

> **Warning:** Instead of this feature, use the {{domxref("PushSubscription.endPoint")}} property on the same interface.

## Syntax

```js
var subId = pushSubscription.subscriptionId;
```

## Specifications

This feature was removed from the [Push API](https://w3c.github.io/push-api/#pushsubscription-interface) specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}
