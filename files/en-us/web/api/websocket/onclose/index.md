---
title: WebSocket.onclose
slug: Web/API/WebSocket/onclose
tags:
  - API
  - Property
  - Reference
  - Web API
  - WebSocket
browser-compat: api.WebSocket.onclose
---
{{APIRef("Web Sockets API")}}

The **`WebSocket.onclose`** property is
an [event handler](/en-US/docs/Web/Events/Event_handlers) that is called when the WebSocket connection's
{{domxref("WebSocket.readyState","readyState")}} changes
to {{domxref("WebSocket.readyState","CLOSED")}}. It is called with a
{{domxref("CloseEvent")}}.

## Syntax

```js
aWebSocket.onclose = function(event) {
  console.log("WebSocket is closed now.");
};
```

## Value

An {{domxref("EventListener")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
