---
title: RTCDataChannelEvent
slug: Web/API/RTCDataChannelEvent
page-type: web-api-interface
tags:
  - API
  - Interface
  - RTCDataChannelEvent
  - Reference
  - WebRTC
  - datachannel
browser-compat: api.RTCDataChannelEvent
---
{{APIRef("WebRTC")}}

The **`RTCDataChannelEvent`** interface
represents an event related to a specific {{DOMxRef("RTCDataChannel")}}.

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("RTCDataChannelEvent.RTCDataChannelEvent", "RTCDataChannelEvent()")}}
  - : Creates a new `RTCDataChannelEvent`.

## Properties

_Also inherits properties from {{DOMxRef("Event")}}._

- {{DOMxRef("RTCDataChannelEvent.channel", "channel")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("RTCDataChannel")}} associated with the event.

## Examples

In this example, the `datachannel` event handler is set up to save the data channel reference and set up handlers for the events which need to be monitored. The {{domxref("RTCDataChannelEvent.channel", "channel")}} property provides the {{domxref("RTCDataChannel")}} representing the connection to the other peer.

```js
pc.ondatachannel = (event) => {
  inboundDataChannel = event.channel;
  inboundDataChannel.onmessage = handleIncomingMessage;
  inboundDataChannel.onopen = handleChannelOpen;
  inboundDataChannel.onclose = handleChannelClose;
}
```

See [A simple RTCDataChannel sample](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample) for another, more complete, example of how to use data channels.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- [A simple RTCDataChannel sample](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- {{domxref("RTCPeerConnection")}} (the target interface for {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}} events)
