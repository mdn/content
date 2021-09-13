---
title: WebSocket.bufferedAmount
slug: Web/API/WebSocket/bufferedAmount
tags:
  - API
  - Property
  - Reference
  - Web API
  - WebSocket
browser-compat: api.WebSocket.bufferedAmount
---
{{APIRef("Web Sockets API")}}

The **`WebSocket.bufferedAmount`** read-only property returns
the number of bytes of data that have been queued using calls to {{manch("send")}} but
not yet transmitted to the network. This value resets to zero once all queued data has
been sent. This value does not reset to zero when the connection is closed; if you keep
calling {{manch("send")}}, this will continue to climb.

## Syntax

```js
var bufferedAmount = aWebSocket.bufferedAmount;
```

## Value

An `unsigned long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
