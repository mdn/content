---
title: WebSocket.bufferedAmount
slug: Web/API/WebSocket/bufferedAmount
page-type: web-api-instance-property
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
the number of bytes of data that have been queued using calls to [`send()`](/en-US/docs/Web/API/WebSocket/send) but
not yet transmitted to the network. This value resets to zero once all queued data has
been sent. This value does not reset to zero when the connection is closed; if you keep
calling [`send()`](/en-US/docs/Web/API/WebSocket/send), this will continue to climb.

## Value

An `unsigned long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
