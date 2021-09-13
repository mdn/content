---
title: RTCInboundRtpStreamStats.sliCount
slug: Web/API/RTCInboundRtpStreamStats/sliCount
tags:
  - API
  - Corruption
  - Errors
  - Property
  - RTCInboundRtpStreamStats
  - RTP
  - Reference
  - SLI
  - Slice Loss
  - Statistics
  - Stats
  - Video
  - WebRTC
  - WebRTC API
  - sliCount
  - stream
browser-compat: api.RTCInboundRtpStreamStats.sliCount
---
{{APIRef("WebRTC")}}

The **`sliCount`** property of the
{{domxref("RTCInboundRtpStreamStats")}} dictionary indicates how many **Slice
Loss Indication** (**SLI**) packets the
{{domxref("RTCRtpReceiver")}} for which this object provdes statistics sent to the
remote {{domxref("RTCRtpSender")}}.

An SLI packet is used by a decoder to let
the encoder know that it's detected corruption of one or more consecutive macroblocks
(in scan order) in the received media.

In general, what's usually of interest is that the higher this number is, the more the
stream data is becoming corrupted between the sender and the receiver, requiring resends
or dropping frames.

## Syntax

```js
var sliCount = rtcInboundRtpStreamStats.sliCount;
```

### Value

An unsigned integer indicating the number of SLI packets this receiver sent to the
remote sender due to lost runs of macroblocks. A high value of `sliCount` may
be an indication of an unreliable network.

This is a very technical part of how video codecs work. For details, see {{RFC(4585,
  "6.3.2")}}.

> **Note:** This value is only present for video media.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{RFC(4585, "6.3.2")}}: Definition of "Slice Loss Indication" in the document
  _Extended RTP Profile for Real-time Transport Control Protocol (RTCP)-Based
  Feedback (RTP/AVPF)_.
