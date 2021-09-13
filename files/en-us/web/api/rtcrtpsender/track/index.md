---
title: RTCRtpSender.track
slug: Web/API/RTCRtpSender/track
tags:
  - API
  - Audio
  - DTMF
  - Property
  - RTCRtpSender
  - Reference
  - Video
  - Web
  - WebRTC API
  - track
browser-compat: api.RTCRtpSender.track
---
{{APIRef("WebRTC")}}

The **`track`** read-only property of
the {{domxref("RTCRtpSender")}} interface returns the {{domxref("MediaStreamTrack")}}
which is being handled by the `RTCRtpSender`.

## Syntax

```js
var mediaStreamTrack = rtcRtpSender.track
```

### Value

A {{domxref("MediaStreamTrack")}} object representing the media associated with the
`RTCRtpSender`. If no track is associated with the sender, this value is
`null`, in which case the sender transmits nothing.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
