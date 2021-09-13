---
title: RTCDataChannelEvent.channel
slug: Web/API/RTCDataChannelEvent/channel
tags:
  - Property
  - RTCDataChannelEvent
  - Read-only
  - Reference
  - WebRTC
  - channel
browser-compat: api.RTCDataChannelEvent.channel
---
{{APIRef("WebRTC")}}

The read-only property **`RTCDataChannelEvent.channel`**
returns the {{domxref("RTCDataChannel")}} associated with the event.

## Syntax

```js
 var channel = RTCDataChannelEvent.channel;
```

### Value

A {{domxref("RTCDataChannel")}} object representing the data channel linking the
receiving {{domxref("RTCPeerConnection")}} to its remote peer.

## Example

The first line of code in the {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}} event handler shown below takes
the channel from the event object and saves it locally for use by the code handling data
traffic.

```js
pc.ondatachannel = function(event) {
  inboundDataChannel = event.channel;
  inboundDataChannel.onmessage = handleIncomingMessage;
  inboundDataChannel.onopen = handleChannelOpen;
  inboundDataChannel.onclose = handleChannelClose;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}}
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCPeerConnection.ondatachannel")}}
- [A simple
  RTCDataChannel sample](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- {{domxref("RTCPeerConnection")}}
