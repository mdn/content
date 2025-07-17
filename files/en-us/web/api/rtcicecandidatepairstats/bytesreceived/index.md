---
title: "RTCIceCandidatePairStats: bytesReceived property"
short-title: bytesReceived
slug: Web/API/RTCIceCandidatePairStats/bytesReceived
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_candidate-pair.bytesReceived
---

{{APIRef("WebRTC")}}

The **`bytesReceived`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary indicates the total number of received payload bytes that have been received so far on the connection described by the candidate pair.

## Value

An integer indicating the total number of bytes received so far on the connection described by this candidate pair.

Only data bytes are counted; overhead such as padding, headers, and the like are not included in this count.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCIceCandidatePairStats.bytesSent")}}
