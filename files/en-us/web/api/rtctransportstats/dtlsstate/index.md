---
title: "RTCTransportStats: dtlsState property"
short-title: dtlsState
slug: Web/API/RTCTransportStats/dtlsState
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_transport.dtlsState
---

{{APIRef("WebRTC")}}

The **`dtlsState`** property of the {{domxref("RTCTransportStats")}} dictionary is a string that indicates the current state of the underlying {{domxref("RTCDtlsTransport")}}.

This has the same value as the corresponding {{domxref("RTCDtlsTransport.state")}} property.

## Value

A string that will be one of the following values: `new`, `connecting`, `connected`, `closed`, `failed`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
