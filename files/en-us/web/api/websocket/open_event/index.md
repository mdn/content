---
title: 'WebSocket: open event'
slug: Web/API/WebSocket/open_event
tags:
  - API
  - Event
  - WebSocket
  - events
  - open
browser-compat: api.WebSocket.open_event
---
{{APIRef}}

The `open` event is fired when a connection with a `WebSocket` is opened.

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{ domxref("WebSocket.onopen","onopen")}}</td>
    </tr>
  </tbody>
</table>

## Examples

```js
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', (event) => {
  socket.send('Hello Server!');
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebSocket: close event](/en-US/docs/Web/API/WebSocket/close_event)
- [WebSocket: error event](/en-US/docs/Web/API/WebSocket/error_event)
- [WebSocket: message event](/en-US/docs/Web/API/WebSocket/message_event)
- [Writing WebSocket client applications](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
