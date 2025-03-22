---
title: "RTCIceCandidatePairStats: bytesDiscardedOnSend property"
short-title: bytesDiscardedOnSend
slug: Web/API/RTCIceCandidatePairStats/bytesDiscardedOnSend
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_candidate-pair.bytesDiscardedOnSend
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`bytesDiscardedOnSend`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary indicates the total number of bytes discarded due to socket errors.

The errors might be caused, for example, by attempting to pass packets to the socket when it is full.

### Value

An integer value indicating the total number of bytes discarded due to socket errors.
This is calculated as defined in {{rfc("3550","", "6.4.1")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
