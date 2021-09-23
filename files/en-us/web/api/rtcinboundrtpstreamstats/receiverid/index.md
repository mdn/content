---
title: RTCInboundRtpStreamStats.receiverId
slug: Web/API/RTCInboundRtpStreamStats/receiverId
tags:
  - API
  - Audio
  - Media
  - Property
  - RTCInboundRtpStreamStats
  - RTP
  - RTP Receiver
  - Reference
  - Statistics
  - Stats
  - Video
  - WebRTC
  - WebRTC API
  - receiver
  - receiverId
browser-compat: api.RTCInboundRtpStreamStats.receiverId
---
{{APIRef("WebRTC")}}

The **`receiverId`** property of the
{{domxref("RTCInboundRtpStreamStats")}} dictionary specifies the
{{domxref("RTCStats.id", "id")}} of the {{domxref("RTCAudioReceiverStats")}} or
{{domxref("RTCVideoReceiverStats")}} object representing the
{{domxref("RTCRtpReceiver")}} receiving the stream.

## Syntax

```js
var receiverStatsId = rtcInboundRtpStreamStats.receiverId;
```

### Value

A {{domxref("DOMString")}} which contains the ID of the
`RTCAudioReceiverStats` or `RTCVideoReceiverStats` object which
provides information about the `RTCRtpReceiver` which is receiving the
streamed media.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
