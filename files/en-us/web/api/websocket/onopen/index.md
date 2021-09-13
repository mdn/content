---
title: WebSocket.onopen
slug: Web/API/WebSocket/onopen
tags:
  - API
  - Property
  - Reference
  - Web API
  - WebSocket
browser-compat: api.WebSocket.onopen
---
{{APIRef("Web Sockets API")}}

The **`WebSocket.onopen`** property is an
[event handler](/en-US/docs/Web/Events/Event_handlers) that is called when the {{domxref("WebSocket")}}
connection's {{domxref("WebSocket.readyState","readyState")}} changes to
{{domxref("WebSocket.readyState","1")}}; this indicates that the connection is ready to
send and receive data. It is called with an {{domxref("Event")}}.

## Syntax

```js
aWebSocket.onopen = function(event) {
  console.log("WebSocket is open now.");
};
```

## Value

An {{domxref("EventListener")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
