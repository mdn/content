---
title: "RTCInboundRtpStreamStats: fecPacketsDiscarded property"
short-title: fecPacketsDiscarded
slug: Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.fecPacketsDiscarded
---

{{APIRef("WebRTC")}}

The **`fecPacketsDiscarded`** property
of the {{domxref("RTCInboundRtpStreamStats")}} dictionary is a numeric value
indicating the number of {{Glossary("RTP")}} Forward Error Correction (FEC) packets
that have been discarded.

## Value

An unsigned integer value indicating how many FEC packets have been received whose
error correction payload has been discarded.

This can happen if all the packets covered by the FEC packet have already been received
or recovered using another FEC packet, or if the FEC packet arrived outside the recovery
window and the lost RTP packets have already been skipped during playback as a result.
The value of `fecPacketsReceived` includes these discarded packets.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
