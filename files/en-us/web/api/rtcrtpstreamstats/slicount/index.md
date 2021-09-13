---
title: RTCRtpStreamStats.sliCount
slug: Web/API/RTCRtpStreamStats/sliCount
tags:
  - API
  - Media
  - Packet
  - Property
  - RTCRtpStream
  - RTP
  - Reference
  - Reliability
  - SLI
  - Slice Loss Indication
  - Transmisison
  - WebRTC
  - WebRTC API
  - compression
  - rtc
  - sliCount
  - slice
browser-compat: api.RTCRtpStreamStats.sliCount
---
{{APIRef("WebRTC")}}

The **`sliCount`** property of the
{{domxref("RTCRtpStreamStats")}} dictionary indicates how many **Slice Loss
Indication** (**SLI**) packets were received by the
sender.

An SLI packet is used by a decoder to let the encoder know that it's
detected corruption of one or more consecutive macroblocks in the received media.

## Syntax

```js
var sliCount = RTCRtpStreamStats.sliCount;
```

### Value

An unsigned long integer indicating the number of SLI packets the sender received from
the receiver due to lost runs of macroblocks. A high value of `sliCount` may
be an indication of an unreliable network.

For technical details, see {{RFC(4585, "6.3.2")}}.

> **Note:** This value is sent by the sender to the receiver and is only
> present for video media.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{RFC(4585, "6.3.2")}}: Definition of "Slice Loss Indication" in the document
  _Extended RTP Profile for Real-time Transport Control Protocol (RTCP)-Based
  Feedback (RTP/AVPF)_.
