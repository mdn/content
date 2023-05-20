---
title: "WebSocket: readyState property"
short-title: readyState
slug: Web/API/WebSocket/readyState
page-type: web-api-instance-property
browser-compat: api.WebSocket.readyState
---

{{APIRef("Web Sockets API")}}

The **`WebSocket.readyState`** read-only property returns the
current state of the {{domxref("WebSocket")}} connection.

## Value

One of the following `unsigned short` values:

| Value | State        | Description                                              |
| ----- | ------------ | -------------------------------------------------------- |
| `0`   | `CONNECTING` | Socket has been created. The connection is not yet open. |
| `1`   | `OPEN`       | The connection is open and ready to communicate.         |
| `2`   | `CLOSING`    | The connection is in the process of closing.             |
| `3`   | `CLOSED`     | The connection is closed or couldn't be opened.          |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
