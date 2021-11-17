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
channel.postMessage(message);
```

### Parameters

- `message`
  - : Data to be sent to the other window. The data is serialized using
    {{domxref("Web_Workers_API/Structured_clone_algorithm", "the structured clone
    algorithm")}}. This means you can pass a broad variety of data objects safely to the
    destination window without having to serialize them yourself.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BroadcastChannel")}}, the interface it belongs to.
