---
title: "RTCVideoSourceStats: kind property"
short-title: kind
slug: Web/API/RTCVideoSourceStats/kind
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_media-source.kind
---

{{APIRef("WebRTC")}}

The **`kind`** property of the {{domxref("RTCVideoSourceStats")}} dictionary is a string with the value `video`.

The `kind` is used to differentiate between audio and video media sources when iterating an {{domxref("RTCStatsReport")}}, which both have a {{domxref("RTCVideoSourceStats.type", "type")}} of `media-source` (a `kind` of `audio` indicates an {{domxref("RTCAudioSourceStats")}} object).

## Value

A string with the value `video`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
