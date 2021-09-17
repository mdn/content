---
title: 'RTCDataChannel: closing event'
slug: Web/API/RTCDataChannel/closing_event
tags:
  - API
  - Communications
  - Connection
  - Disconnecting
  - Networking
  - RTCDataChannel
  - Reference
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - closing
  - events
  - Event
  - Experimental
browser-compat: api.RTCDataChannel.closing_event
---
{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`closing`** event is sent to an {{domxref("RTCDataChannel")}} just before the channel begins the process of shutting down its underlying data transport.

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
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{DOMxRef("RTCDataChannel.onclosing")}}</td>
    </tr>
  </tbody>
</table>

## Description

While the `closing` event is sent to the channel just before beginning to close the channel's data transport, the {{domxref("RTCDataChannel.close_event", "close")}} event is sent once the closing process is complete.

## Examples

This example updates a connection status interface when the `closing` event arrives.

First, an example using {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

```js
dataChannel.addEventListener("closing", ev => {
  myConnectionStatus.icon = closingIcon;
  myConnectionStatus.text = "Connection closing";
});
```

You can also set the {{domxref("RTCDataChannel.onclosing", "onclosing")}} event handler property directly:

```js
pc.onclosing = ev => {
 myConnectionStatus.icon = closingIcon;
 myConnectionStatus.text = "Connection closing";
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
