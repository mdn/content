---
title: BroadcastChannel.onmessageerror
slug: Web/API/BroadcastChannel/onmessageerror
tags:
  - API
  - BroadcastChannel
  - Event Handler
  - Property
  - Reference
  - onmessageerror
browser-compat: api.BroadcastChannel.onmessageerror
---
{{APIRef("HTML DOM")}}

The **`onmessageerror`** event handler of the
{{domxref("BroadcastChannel")}} interface is an {{domxref("EventListener")}}, called
whenever an {{domxref("MessageEvent")}} of type `messageerror` is fired on
the `BroadcastChannel` instance — that is, when it receives a message that
cannot be {{glossary("Deserialization", "deserialized")}}.

{{AvailableInWorkers}}

## Syntax

```js
bc.onmessageerror = function() { /* ... */ };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
