---
title: RTCOutboundRtpStreamStats.framesEncoded
slug: Web/API/RTCOutboundRtpStreamStats/framesEncoded
tags:
  - API
  - Encoding
  - Frames
  - Media
  - Property
  - RTCOutboundRtpStreamStats
  - Reference
  - Statistics
  - Stats
  - Video
  - WebRTC
  - WebRTC API
  - encode
  - framesEncoded
  - stream
browser-compat: api.RTCOutboundRtpStreamStats.framesEncoded
---
{{APIRef("WebRTC")}}

The **`framesEncoded`** property of
the {{domxref("RTCOutboundRtpStreamStats")}} dictionary indicates the total number of
frames that have been encoded by this {{domxref("RTCRtpSender")}} for this media
source.

## Syntax

```js
var framesEncoded = RTCOutboundRtpStreamStats.framesEncoded;
```

### Value

An integer value indicating the total number of video frames that this sender has
encoded so far for this stream.

> **Note:** This property is only valid for video streams.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
