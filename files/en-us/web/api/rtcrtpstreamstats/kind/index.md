---
title: "RTCRtpStreamStats: kind property"
short-title: kind
slug: Web/API/RTCRtpStreamStats/kind
page-type: web-api-instance-property
browser-compat: api.RTCRtpStreamStats.kind
---

{{APIRef("WebRTC")}}

The **`kind`** property of the
{{domxref("RTCRtpStreamStats")}} dictionary is a string indicating whether the
described {{Glossary("RTP")}} stream contains audio or video media.

Its value
is always either `"audio"` or `"video"`.

This property was previously called `mediaType`. The name was changed in the
specification in February, 2018. See [Browser compatibility](#browser_compatibility) below to
determine how this affects the browsers you're targeting.

## Value

A string whose value is `"audio"` if the track whose
statistics are given by the `RTCRtpStreamStats` object contains audio, or
`"video"` if the track contains video media.

This string will always be the same as the one provided by the associated
{{domxref("MediaStreamTrack")}} object's {{domxref("MediaStreamTrack.kind", "kind")}}
property. It will also match the statistics object's {{domxref("RTCCodecStats.codec")}}
property's media type.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
