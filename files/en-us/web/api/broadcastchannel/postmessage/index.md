---
title: BroadcastChannel.postMessage()
slug: Web/API/BroadcastChannel/postMessage
tags:
  - API
  - Broadcast Channel API
  - BroadcastChannel
  - Experimental
  - HTML API
  - Method
  - Reference
browser-compat: api.BroadcastChannel.postMessage
---
{{APIRef("BroadCastChannel API")}}

The **`BroadcastChannel.postMessage()`** sends a message, which
can be of any kind of {{jsxref("Object")}}, to each listener in any {{glossary("browsing
  context")}} with the same {{glossary("origin")}}. The message is transmitted as a
{{event("message")}} event targeted at each `BroadcastChannel` bound to the
channel.

{{AvailableInWorkers}}

## Syntax

```js
var str = channel.postMessage(object);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BroadcastChannel")}}, the interface it belongs to.
