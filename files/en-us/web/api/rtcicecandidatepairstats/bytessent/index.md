---
title: "RTCIceCandidatePairStats: bytesSent property"
short-title: bytesSent
slug: Web/API/RTCIceCandidatePairStats/bytesSent
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_candidate-pair.bytesSent
---

{{APIRef("WebRTC")}}

The **`bytesSent`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary indicates the total number of payload bytes that have been sent so far on the connection described by the candidate pair.

## Value

An integer value indicating the total number of bytes sent so far on the connection described by this candidate pair.

Only data bytes are counted; overhead such as padding, headers, and the like are not included in this count.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCIceCandidatePairStats.bytesReceived")}}
