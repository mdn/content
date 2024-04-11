---
title: "RTCCodecStats: transportId property"
short-title: transportId
slug: Web/API/RTCCodecStats/transportId
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_codec.transportId
---

{{APIRef("WebRTC")}}

The **`transportId`** property of the {{domxref("RTCCodecStats")}} dictionary is a string that contains the unique identifier of the corresponding transport on which this codec is being used.

You can correlate the codec and associated transport statistics by matching the `RTCCodecStats.transportId` with an {{domxref("RTCTransportStats.id")}} value.

## Value

A string that uniquely identifies a matching {{domxref("RTCTransportStats")}} object using its `id`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
