---
title: WebSocket.binaryType
slug: Web/API/WebSocket/binaryType
tags:
  - API
  - Property
  - Reference
  - Web API
  - WebSocket
browser-compat: api.WebSocket.binaryType
---
{{APIRef("Web Sockets API")}}

The **`WebSocket.binaryType`** property controls the type of
binary data being received over the WebSocket connection.

## Syntax

```js
var binaryType = aWebSocket.binaryType;
```

## Value

A {{DOMXref("DOMString")}}:

- `"blob"`
  - : Use {{domxref("Blob")}} objects for binary data. This is the default value.
- `"arraybuffer"`
  - : Use {{jsxref("ArrayBuffer")}} objects for binary data.

## Examples

```js
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");
// Change binary type from "blob" to "arraybuffer"
socket.binaryType = "arraybuffer";

// Listen for messages
socket.addEventListener("message", function (event) {
    if(event.data instanceof ArrayBuffer) {
        // binary frame
        const view = new DataView(event.data);
        console.log(view.getInt32(0));
    } else {
        // text frame
        console.log(event.data);
    }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
