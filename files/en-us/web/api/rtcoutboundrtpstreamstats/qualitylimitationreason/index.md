---
title: RTCOutboundRtpStreamStats.qualityLimitationReason
slug: Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason
tags:
  - API
  - Media
  - Property
  - Quality
  - RTCOutboundRtpStreamStats
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - qualityLimitationReason
  - reason
  - stream
browser-compat: api.RTCOutboundRtpStreamStats.qualityLimitationReason
---
{{APIRef("WebRTC")}}

The **`qualityLimitationReason`**
property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary is a string
indicating the reason why the media quality in the stream is currently being reduced
by the codec during encoding, or `none` if no quality reduction is being
performed.

This quality reduction may include changes such as reduced frame
rate or resolution, or an increase in compression factor.

The amount of time the encoded media has had its quality reduced in each of the
potential ways that can be done can be found in
{{domxref("RTCOutboundRtpStreamStats.qualityLimitationDurations",
  "qualityLimitationDurations")}}.

## Syntax

```js
var qualityLimitationReason = RTCOutboundRtpStreamStats.qualityLimitationReason;
```

### Value

A {{jsxref("Map")}} whose keys are {{domxref("DOMString")}}s whose values come from the
{{domxref("RTCQualityLimitationReason")}} enumerated type, and whose values are the
duration of the media, in seconds, whose quality was reduced for that reason.

## Examples



## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
