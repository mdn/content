---
title: "RTCTransportStats: iceRole property"
short-title: iceRole
slug: Web/API/RTCTransportStats/iceRole
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_transport.iceRole
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`iceRole`** property of the {{domxref("RTCTransportStats")}} dictionary is a string that indicates the ICE role that the transport is fulfilling: that of the controlling agent, or the agent that is being controlled.

This has the same value as the {{domxref("RTCIceTransport.role")}} property of the underlying {{domxref("RTCDtlsTransport.iceTransport")}}.

## Value

A string that will be one of the following values: `controlled`, `controlling`, or `unknown`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
