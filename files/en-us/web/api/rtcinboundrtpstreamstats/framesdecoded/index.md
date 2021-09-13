---
title: RTCInboundRtpStreamStats.framesDecoded
slug: Web/API/RTCInboundRtpStreamStats/framesDecoded
tags:
  - API
  - Decode
  - Frames
  - Media
  - Property
  - RTCInboundRtpStreamStats
  - RTP
  - Reference
  - Statistics
  - Stats
  - Video
  - WebRTC
  - WebRTC API
  - decoding
  - framesDecoded
  - stream
browser-compat: api.RTCInboundRtpStreamStats.framesDecoded
---
{{APIRef("WebRTC")}}

The **`framesDecoded`** property of
the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total number of
frames which have been decoded successfully for this media source.

## Syntax

```js
var framesDecoded = rtcInboundRtpStreamStats.framesDecoded;
```

### Value

An integer value indicating the total number of video frames which have been decoded
for this stream so far. This represents the number of frames that would have been
displayed assuming no frames were skipped.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
