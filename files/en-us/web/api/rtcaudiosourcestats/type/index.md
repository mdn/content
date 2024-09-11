---
title: "RTCAudioSourceStats: type property"
short-title: type
slug: Web/API/RTCAudioSourceStats/type
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_media-source.type
---

{{APIRef("WebRTC")}}

The **`type`** property of the {{domxref("RTCAudioSourceStats")}} dictionary is a string with value `media-source`.

The type of `media-source` identifies the type of statistics as either {{domxref("RTCAudioSourceStats")}} or {{domxref("RTCVideoSourceStats")}} when iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCRtpSender.getStats()")}} or {{domxref("RTCPeerConnection.getStats()")}}.
The type of stats can further be differentiated using the {{domxref("RTCAudioSourceStats.kind", "kind")}}, which will be `audio` for `RTCAudioSourceStats`.

## Value

A string with the value `media-source`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
