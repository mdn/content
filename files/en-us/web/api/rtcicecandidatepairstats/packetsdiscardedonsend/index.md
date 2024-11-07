---
title: "RTCIceCandidatePairStats: packetsDiscardedOnSend property"
short-title: packetsDiscardedOnSend
slug: Web/API/RTCIceCandidatePairStats/packetsDiscardedOnSend
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_candidate-pair.packetsDiscardedOnSend
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`packetsDiscardedOnSend`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary indicates the total number of packets discarded due to socket errors

The errors might be caused, for example, by attempting to pass packets to the socket when it is full.

### Value

An integer value indicating the total number of packets discarded due to socket errors.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCIceCandidatePairStats.bytesDiscardedOnSend")}}
