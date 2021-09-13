---
title: 'RTCDataChannel: close event'
slug: Web/API/RTCDataChannel/close_event
tags:
  - API
  - Connection
  - Connectivity
  - Networking
  - RTCDataChannel
  - Reference
  - WebRTC
  - WebRTC API
  - channel
  - close
  - data
  - events
  - Event
browser-compat: api.RTCDataChannel.close_event
---
{{APIRef("WebRTC")}}

The **`close`** event is sent to the {{domxref("RTCDataChannel.onclose", "onclose")}} event handler on an {{domxref("RTCDataChannel")}} instance when the data transport being used for the data channel has closed. Before any further data can be transferred using `RTCDataChannel`, a new data channel instance must be created.

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
      <td>{{domxref("RTCDataChannel.onclose")}}</td>
    </tr>
  </tbody>
</table>

## Examples

This example sets up a handler for the `close` event for the {{domxref("RTCDataChannel")}} named `dc`; its responsibility in this example is to update user interface elements to reflect that there is no longer an ongoing call, and to allow a new call to be started.

```js
dc.addEventListener("close", ev => {
  messageInputBox.disabled = true;
  sendButton.disabled = true;
  connectButton.disabled = false;
  disconnectButton.disabled = true;
}, false);
```

All this code does in response to receiving the `close` event is to disable an input box and its "Send" button, and to enable the button used to start a call (while disabling the one that ends a call).

You can also use the {{domxref("RTCDataChannel.onclose", "onclose")}} event handler property to set a handler for `close` events:

```js
dc.onclose = ev => {
  messageInputBox.disabled = true;
  sendButton.disabled = true;
  connectButton.disabled = false;
  disconnectButton.disabled = true;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [A simple RTCDataChannel example](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Related events: {{domxref("RTCDataChannel.open_event", "open")}}, {{domxref("RTCDataChannel.message_event", "message")}}, and {{domxref("RTCDataChannel.error_event", "error")}}
