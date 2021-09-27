---
title: RTCRtpContributingSource.rtpTimestamp
slug: Web/API/RTCRtpContributingSource/rtpTimestamp
tags:
  - API
  - Audio
  - Media
  - Property
  - RTCRtpContributingSource
  - Reference
  - Stamp
  - Time
  - Video
  - WebRTC
  - WebRTC API
  - receiver
  - rtpTimestamp
browser-compat: api.RTCRtpContributingSource.rtpTimestamp
---
{{APIRef("WebRTC API")}}

The read-only **`rtpTimestamp`**
property of the {{domxref("RTCRtpContributingSource")}} dictionary contains a
{{domxref("DOMHighResTimeStamp")}} indicating the source-generated time at which the
media contained int he packet was first sampled or obtained.

## Syntax

```js
let rtpTimestamp = RTCRtpContributingSource.rtpTimestamp
```

### Value

An integer value specifiying a source-generated timestamp indicating the time at which
the media in this packet, scheduled for play out at the time indicated by
{{domxref("RTCRtpContributingSource.timestamp", "timestamp")}}, was initially sampled or
generated. This value may be useful for sequencing and synchronization purposes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
