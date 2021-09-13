---
title: WebSocket.onerror
slug: Web/API/WebSocket/onerror
tags:
  - API
  - Connection
  - Error
  - Error Handler
  - Networking
  - Property
  - Reference
  - Web API
  - WebSocket
  - onerror
browser-compat: api.WebSocket.onerror
---
{{APIRef("Web Sockets API")}}

The {{domxref("WebSocket")}} interface's
**`onerror`** event handler property is a function which gets
called when an error occurs on the WebSocket.

You can also add an `error` event handler using
{{domxref("EventTarget.addEventListener", "addEventListener()")}}.

## Syntax

```js
webSocket.onerror = eventHandler;
```

### Value

A function or [event handler](/en-US/docs/Web/Events/Event_handlers) which is executed whenever an
`error` event occurs on the WebSocket connection.

## Example

```js
webSocket.onerror = function(event) {
  console.error("WebSocket error observed:", event);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
