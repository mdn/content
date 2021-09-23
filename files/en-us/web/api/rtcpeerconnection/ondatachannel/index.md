---
title: RTCPeerConnection.ondatachannel
slug: Web/API/RTCPeerConnection/ondatachannel
tags:
  - Event Handler
  - Property
  - RTCPeerConnection
  - Reference
  - WebRTC
  - ondatachannel
browser-compat: api.RTCPeerConnection.ondatachannel
---
{{APIRef("WebRTC")}}

The **`RTCPeerConnection.ondatachannel`** property is an
[event handler](/en-US/docs/Web/Events/Event_handlers) which specifies a function which is called when the
{{DOMxRef("RTCPeerConnection/datachannel_event", "datachannel")}} event occurs on an {{domxref("RTCPeerConnection")}}. This
event, of type {{domxref("RTCDataChannelEvent")}}, is sent when an
{{domxref("RTCDataChannel")}} is added to the connection by the remote peer calling
{{domxref("RTCPeerConnection.createDataChannel", "createDataChannel()")}}.

At the time this event is received, the {{domxref("RTCDataChannel")}} it indicates may
not yet actually be open. Be sure to wait for the `"open"` event to be fired
on the new `RTCDataChannel` before using it.

## Syntax

```js
RTCPeerConnection.ondatachannel = function;
```

### Value

Set this property to be a function you provide which receives as input a single
parameter: an {{domxref("RTCDataChannelEvent")}} which provides in its
`channel` property the {{domxref("RTCDataChannel")}} which has been created.

## Example

```js
pc.ondatachannel = function(ev) {
  console.log('Data channel is created!');
  ev.channel.onopen = function() {
    console.log('Data channel is open and ready to be used.');
  };
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("RTCPeerConnection/datachannel_event", "datachannel")}} event and its type, {{domxref("RTCDataChannelEvent")}}.
- {{domxref("RTCPeerConnection.createDataChannel()")}}
- [A simple
  RTCDataChannel sample](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
