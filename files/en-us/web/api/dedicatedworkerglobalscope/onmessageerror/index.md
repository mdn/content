---
title: DedicatedWorkerGlobalScope.onmessageerror
slug: Web/API/DedicatedWorkerGlobalScope/onmessageerror
tags:
  - API
  - DedicatedWorkerGlobalScope
  - Event Handler
  - Property
  - Reference
  - onmessageerror
browser-compat: api.DedicatedWorkerGlobalScope.onmessageerror
---
{{APIRef("HTML DOM")}}

The **`onmessageerror`** event handler of the
{{domxref("DedicatedWorkerGlobalScope")}} interface is an {{domxref("EventListener")}},
called whenever an {{domxref("MessageEvent")}} of type `messageerror` is
fired on the worker—that is, when it receives a message that cannot be
{{glossary("Deserialization", "deserialized")}}.

{{AvailableInWorkers}}

## Syntax

```js
onmessageerror = function() { /* ... */ };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
