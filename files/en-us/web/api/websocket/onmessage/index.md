---
title: WebSocket.onmessage
slug: Web/API/WebSocket/onmessage
tags:
  - API
  - Property
  - Reference
  - Web API
  - WebSocket
browser-compat: api.WebSocket.onmessage
---
{{APIRef("Web Sockets API")}}

The **`WebSocket.onmessage`** property is an
[event handler](/en-US/docs/Web/Events/Event_handlers) that is called when a message is received from the server.
It is called with a {{domxref("MessageEvent")}}.

## Syntax

```js
aWebSocket.onmessage = function(event) {
  console.debug("WebSocket message received:", event);
};
```

## Value

An {{domxref("EventListener")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
