---
title: "RTCCodecStats: type property"
short-title: type
slug: Web/API/RTCCodecStats/type
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_codec.type
---

{{APIRef("WebRTC")}}

The **`type`** property of the {{domxref("RTCCodecStats")}} dictionary is a string with the value `"codec"`.

Different statistics are obtained by iterating the {{domxref("RTCStatsReport")}} object returned by a call to {{domxref("RTCPeerConnection.getStats()")}}.
The type indicates the set of statistics available through the object in a particular iteration step.
A value of `"codec"` indicates that the statistics available in the current step are those defined in {{domxref("RTCCodecStats")}}.

## Value

A string with the value `"codec"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
