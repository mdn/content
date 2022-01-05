---
title: 'RTCPeerConnection: datachannel event'
slug: Web/API/RTCPeerConnection/datachannel_event
tags:
  - Channels
  - Connection
  - Connectivity
  - Networking
  - RTCDataChannel
  - Reference
  - WebRTC
  - WebRTC API
  - data
  - datachannel
  - events
  - Event
  - rtc
browser-compat: api.RTCPeerConnection.datachannel_event
---
{{APIRef("WebRTC")}}

A **`datachannel`** event is sent to an {{domxref("RTCPeerConnection")}} instance when an {{domxref("RTCDataChannel")}} has been added to the connection, as a result of the remote peer calling {{domxref("RTCPeerConnection.createDataChannel()")}}.

> **Note:** This event is _not_ dispatched when the local end of the connection creates the channel.

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
      <td>{{DOMxRef("RTCDataChannelEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{DOMxRef("RTCPeerConnection.ondatachannel", "ondatachannel")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

This example sets up a function that handles `datachannel` events by gathering the information needed to communicate with the newly added {{domxref("RTCDataChannel")}} and by adding event handlers for the events that occur on that channel.

```js
pc.addEventListener("datachannel", ev => {
  receiveChannel = ev.channel;
  receiveChannel.onmessage = myHandleMessage;
  receiveChannel.onopen = myHandleOpen;
  receiveChannel.onclose = myHandleClose;
}, false);
```

`receiveChannel` is set to the value of the event's {{domxref("RTCDataChannelEvent.channel", "channel")}} property, which specifies the `RTCDataChannel` object representing the data channel linking the remote peer to the local one.

This same code can also instead use the {{domxref("RTCPeerConnection")}} interface's {{domxref("RTCPeerConnection.ondatachannel", "ondatachannel")}} event handler property, like this:

```js
pc.ondatachannel = ev => {
  receiveChannel = ev.channel;
  receiveChannel.onmessage = myHandleMessage;
  receiveChannel.onopen = myHandleOpen;
  receiveChannel.onclose = myHandleClose;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Using WebRTC data channels](/en-US/docs/Web/API/WebRTC_API/Using_data_channels)
- [A simple RTCDataChannel sample](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- {{domxref("RTCDataChannelEvent")}}
- {{domxref("RTCPeerConnection.ondatachannel")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
