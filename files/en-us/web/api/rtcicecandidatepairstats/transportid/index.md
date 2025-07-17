---
title: "RTCIceCandidatePairStats: transportId property"
short-title: transportId
slug: Web/API/RTCIceCandidatePairStats/transportId
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_candidate-pair.transportId
---

{{APIRef("WebRTC")}}

The **`transportId`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary uniquely identifies the {{domxref("RTCIceTransport")}} object that was inspected to obtain the transport-related statistics contained in the stats object.

## Value

A string which uniquely identifies the `RTCIceTransport` object from which the transport-related data was obtained for the statistics contained in this {{domxref("RTCIceCandidatePairStats")}} object.

The transport-related statistics come from the {{domxref("RTCTransportStats")}} dictionary.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
