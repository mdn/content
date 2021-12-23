---
title: 'RTCDataChannel: open event'
slug: Web/API/RTCDataChannel/open_event
tags:
  - API
  - Connectivity
  - Connetion
  - Data Channel
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
  - rtc
browser-compat: api.RTCDataChannel.open_event
---
{{APIRef("WebRTC")}}

The WebRTC **`open`** event is sent to an {{domxref("RTCDataChannel")}} object's {{domxref("RTCDataChannel.onopen", "onopen")}} event handler when the underlying transport used to send and receive the data channel's messages is opened or re-opened.

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
      <td>{{domxref("RTCDataChannelEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("RTCDataChannel.onopen", "onopen")}}</td>
    </tr>
  </tbody>
</table>

## Examples

This example adds to the {{domxref("RTCDataChannel")}} `dc` a handler for the `open` event that adjusts the user interface to indicate that a chat window is ready to be used after a connection has been established. It enables the message input box and send button as well as enabling the disconnect button and disabling the connect button. Finally, the message input box is focused so the user can immediately begin to type.

```js
dc.addEventListener("open", ev => {
  messageInputBox.disabled = false;
  sendMessageButton.disabled = false;
  disconnectButton.disabled = false;
  connectButton.disabled = true;

  messageInputBox.focus();

}, false);
```

This can also be done by directly setting the value of the channel's {{domxref("RTCDataChannel.onopen", "onopen")}} event handler property.

```js
dc.onopen = ev => {
  messageInputBox.disabled = false;
  sendMessageButton.disabled = false;
  disconnectButton.disabled = false;
  connectButton.disabled = true;

  messageInputBox.focus();
}
```

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [A simple RTCDataChannel example](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Related events: {{domxref("RTCDataChannel.message_event", "message")}}, {{domxref("RTCDataChannel.close_event", "close")}}, and {{domxref("RTCDataChannel.error_event", "error")}}
