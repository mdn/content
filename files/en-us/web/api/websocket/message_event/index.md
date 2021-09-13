---
title: 'WebSocket: message event'
slug: Web/API/WebSocket/message_event
tags:
  - Event
  - Reference
  - WebSocket
  - message
browser-compat: api.WebSocket.message_event
---
{{APIRef}}

The `message` event is fired when data is received through a `WebSocket`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MessageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{ domxref("WebSocket.onmessage","onmessage")}}</td>
    </tr>
  </tbody>
</table>

## Examples

```js
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebSocket: close event](/en-US/docs/Web/API/WebSocket/close_event)
- [WebSocket: error event](/en-US/docs/Web/API/WebSocket/error_event)
- [WebSocket: open event](/en-US/docs/Web/API/WebSocket/open_event)
- [Writing WebSocket client applications](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
