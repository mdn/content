---
title: "RTCAudioSourceStats: kind property"
short-title: kind
slug: Web/API/RTCAudioSourceStats/kind
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_media-source.kind
---

{{APIRef("WebRTC")}}

The **`kind`** property of the {{domxref("RTCAudioSourceStats")}} dictionary is a string with the value `audio`.

The `kind` is used to differentiate between audio and video media sources when iterating an {{domxref("RTCStatsReport")}}, which both have a {{domxref("RTCAudioSourceStats.type", "type")}} of `media-source` (a `kind` of `video` indicates an {{domxref("RTCVideoSourceStats")}} object).

## Value

A string with the value `audio`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
