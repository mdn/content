---
title: "RTCAudioSourceStats: kind property"
short-title: kind
slug: Web/API/RTCAudioSourceStats/kind
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_media-source.kind
---

{{APIRef("WebRTC")}}

The {{domxref("RTCAudioSourceStats")}} dictionary's **`kind`** property is a string value that is used to differentiate `audio` and `video` media sources.

Along with the {{domxref("RTCAudioSourceStats.type", "type")}}, this identifies the object as an {{domxref("RTCAudioSourceStats")}} object when iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCRtpSender.getStats()")}} or {{domxref("RTCPeerConnection.getStats()")}}.

## Value

A string with the value `audio`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
