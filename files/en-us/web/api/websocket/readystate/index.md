---
title: "WebSocket: readyState property"
short-title: readyState
slug: Web/API/WebSocket/readyState
page-type: web-api-instance-property
browser-compat: api.WebSocket.readyState
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

The **`WebSocket.readyState`** read-only property returns the
current state of the {{domxref("WebSocket")}} connection.

## Value

A number which is one of the four possible state constants defined on the {{domxref("WebSocket")}} interface:

- `WebSocket.CONNECTING` (0)
  - : Socket has been created. The connection is not yet open.
- `WebSocket.OPEN` (1)
  - : The connection is open and ready to communicate.
- `WebSocket.CLOSING` (2)
  - : The connection is in the process of closing.
- `WebSocket.CLOSED` (3)
  - : The connection is closed or couldn't be opened.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
