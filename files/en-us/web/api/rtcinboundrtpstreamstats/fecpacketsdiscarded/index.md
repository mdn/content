---
title: "RTCInboundRtpStreamStats: fecPacketsDiscarded property"
short-title: fecPacketsDiscarded
slug: Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.fecPacketsDiscarded
---

{{APIRef("WebRTC")}}

The **`fecPacketsDiscarded`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the number of {{Glossary("RTP")}} Forward Error Correction (FEC) packets that have been discarded.

A FEC packet provides parity information that can be used to attempt to reconstruct RTP data packets which have been corrupted in transit.
This kind of packet might be discarded if all the packets that it covers have already been received or recovered using another FEC packet, or if the FEC packet arrived outside the recovery window and the lost RTP packets have already been skipped during playback as a result.
The value of {{domxref("RTCInboundRtpStreamStats/fecPacketsReceived","fecPacketsReceived")}} includes these discarded packets.

## Value

An positive integer value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
