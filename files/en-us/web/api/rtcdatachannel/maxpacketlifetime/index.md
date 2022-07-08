---
title: RTCDataChannel.maxPacketLifeTime
slug: Web/API/RTCDataChannel/maxPacketLifeTime
page-type: web-api-instance-property
tags:
  - Property
  - RTCDataChannel
  - Read-only
  - Reference
  - WebRTC
  - maxPacketLifeTime
browser-compat: api.RTCDataChannel.maxPacketLifeTime
---
{{APIRef("WebRTC")}}

The read-only `RTCDataChannel` property
**`maxPacketLifeTime`** returns the amount of time, in
milliseconds, the browser is allowed to take to attempt to transmit a message, as set
when the data channel was created, or `null`. This limits how long
the browser can continue to attempt to transmit and retransmit the message before giving
up.

## Value

The number of milliseconds over which the browser may continue to attempt to transmit
the message until it either succeeds or gives up. If not set when
{{domxref("RTCPeerConnection.createDataChannel()")}} was called to create the data
channel, this value is `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.maxRetransmits")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
