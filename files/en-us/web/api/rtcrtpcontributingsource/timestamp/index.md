---
title: RTCRtpContributingSource.timestamp
slug: Web/API/RTCRtpContributingSource/timestamp
tags:
  - API
  - Media
  - Property
  - RTCRtpContributingSource
  - Reference
  - WebRTC
  - timeStamp
browser-compat: api.RTCRtpContributingSource.timestamp
---
{{APIRef("WebRTC API")}}

The read-only **`timestamp`** property
of the {{domxref("RTCRtpContributingSource")}} dictionary contains a
{{domxref("DOMHighResTimeStamp")}} indicating the most recent time of playout of an
RTP packet from the source.

## Syntax

```js
var domHighResTimeStamp = RTCRtpContributingSource.timestamp
```

### Value

A {{domxref("DOMHighResTimeStamp")}} which indicates the time at which the most recent
RTP packet from the corresponding source was played out.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
