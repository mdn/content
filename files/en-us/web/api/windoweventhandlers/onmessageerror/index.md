---
title: WindowEventHandlers.onmessageerror
slug: Web/API/WindowEventHandlers/onmessageerror
tags:
  - API
  - Event Handler
  - HTML-DOM
  - Property
  - Reference
  - Window
  - onmessageerror
browser-compat: api.WindowEventHandlers.onmessageerror
---
{{APIRef("HTML DOM")}}

The **`onmessageerror`** event handler
of the {{domxref("WindowEventHandlers")}} interface is an
{{domxref("EventListener")}}, called whenever an {{domxref("MessageEvent")}} of type
`messageerror` is fired on a window—that is, when it receives a message
that cannot be {{glossary("Deserialization", "deserialized")}}.

{{AvailableInWorkers}}

## Syntax

```js
window.onmessageerror = function() { /* ... */ };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
