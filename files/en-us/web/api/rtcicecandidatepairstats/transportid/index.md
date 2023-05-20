---
title: "RTCIceCandidatePairStats: transportId property"
short-title: transportId
slug: Web/API/RTCIceCandidatePairStats/transportId
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidatePairStats.transportId
---

{{APIRef("WebRTC")}}

The **`transportId`** property
uniquely identifies the {{domxref("RTCIceTransport")}} that was inspected to obtain
the transport-related statistics contained in the
{{domxref("RTCIceCandidatePairStats")}} object.

## Value

A string which uniquely identifies the `RTCIceTransport`
object from which the transport-related data was obtained for the statistics contained
in this {{domxref("RTCIceCandidatePairStats")}} object.

The transport-related statistics come from the {{domxref("RTCTransportStats")}}
dictionary's properties.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
