---
title: RTCIceCandidatePairStats.transportId
slug: Web/API/RTCIceCandidatePairStats/transportId
page-type: web-api-instance-property
tags:
  - API
  - ICE
  - Networking
  - Property
  - RTCIceCandidatePairStats
  - RTCIceTransport
  - Reference
  - Statistics
  - Stats
  - Transport
  - WebRTC
  - WebRTC API
  - id
  - transportID
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
