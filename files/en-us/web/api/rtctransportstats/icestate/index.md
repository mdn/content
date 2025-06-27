---
title: "RTCTransportStats: iceState property"
short-title: iceState
slug: Web/API/RTCTransportStats/iceState
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_transport.iceState
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`iceState`** property of the {{domxref("RTCTransportStats")}} dictionary is a string that indicates the current ICE state of the underlying {{domxref("RTCIceTransport")}}.

This has the same value as the corresponding {{domxref("RTCIceTransport.state")}} property.

## Value

A string that will be one of the following values: `new`, `checking`, `connected`, `completed`, `disconnected`, `failed`, or `closed`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
