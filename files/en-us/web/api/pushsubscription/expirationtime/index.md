---
title: PushSubscription.expirationTime
slug: Web/API/PushSubscription/expirationTime
tags:
  - API
  - Experimental
  - Property
  - Push API
  - PushManager
  - PushSubscription
  - Reference
  - Service Worker
browser-compat: api.PushSubscription.expirationTime
---
{{SeeCompatTable}}{{APIRef("Push API")}}

The **`expirationTime`** read-only property of the
{{domxref("PushSubscription")}} interface returns a {{domxref("DOMHighResTimeStamp")}}
of the subscription expiration time associated with the push subscription, if there is
one, or null otherwise.

## Syntax

```js
var expirationTime = pushSubscription.expirationTime
```

### Value

A {{domxref("DOMHighResTimeStamp")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
