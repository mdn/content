---
title: 'WebSocket: close event'
slug: Web/API/WebSocket/close_event
tags:
  - API
  - Event
  - Reference
  - Web
  - WebSocket
  - close
  - events
browser-compat: api.WebSocket.close_event
---
{{APIRef}}

The `close` event is fired when a connection with a `WebSocket` is closed.

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
      <td>{{domxref("CloseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{ domxref("WebSocket.onclose","onclose")}}</td>
    </tr>
  </tbody>
</table>

## Examples

You might want to know when the connection has been closed so that you can update the UI or, perhaps, save data about the closed connection. Given that you have a variable called `exampleSocket` that refers to an opened `WebSocket`, this handler would handle the situation where the socket has been closed.

```js
exampleSocket.addEventListener('close', (event) => {
  console.log('The connection has been closed successfully.');
});
```

You can perform the same actions using the event handler property, like this:

```js
exampleSocket.onclose = function (event) {
  console.log('The connection has been closed successfully.');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebSocket: error event](/en-US/docs/Web/API/WebSocket/error_event)
- [WebSocket: message event](/en-US/docs/Web/API/WebSocket/message_event)
- [WebSocket: open event](/en-US/docs/Web/API/WebSocket/open_event)
- [Writing WebSocket client applications](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
