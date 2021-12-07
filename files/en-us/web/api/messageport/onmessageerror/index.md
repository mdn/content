---
title: MessagePort.onmessageerror
slug: Web/API/MessagePort/onmessageerror
tags:
  - API
  - Channel messaging
  - MessagePort
  - Property
  - Reference
  - events
  - onmessageerror
browser-compat: api.MessagePort.onmessageerror
---
{{APIRef("HTML DOM")}}

The **`onmessageerror`** event handler of the
{{domxref("MessagePort")}} interface is an {{domxref("EventListener")}}, called whenever
an {{domxref("MessageEvent")}} of type `messageerror` is fired on the
port—that is, when it receives a message that cannot be {{glossary("Deserialization",
  "deserialized")}}.

{{AvailableInWorkers}}

## Syntax

```js
port.onmessageerror = function() { /* ... */ };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
