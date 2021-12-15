---
title: Worker.onmessageerror
slug: Web/API/Worker/onmessageerror
tags:
  - API
  - Event Handler
  - Property
  - Reference
  - Worker
  - onmessageerror
browser-compat: api.Worker.onmessageerror
---
{{APIRef("HTML DOM")}}

The **`onmessageerror`** event handler of the
{{domxref("Worker")}} interface is an {{domxref("EventListener")}}, called whenever an
{{domxref("MessageEvent")}} of type `messageerror` is fired on the
`Worker` instance — that is, when it receives a message that cannot be
{{glossary("Deserialization", "deserialized")}}.

{{AvailableInWorkers}}

## Syntax

```js
Worker.onmessageerror = function() { /* ... */ };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
