---
title: "RTCOutboundRtpStreamStats: retransmittedPacketsSent property"
short-title: retransmittedPacketsSent
slug: Web/API/RTCOutboundRtpStreamStats/retransmittedPacketsSent
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.retransmittedPacketsSent
---

{{APIRef("WebRTC")}}

The **`retransmittedPacketsSent`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary represents the total number of packets retransmitted for the source associated with this stream.

If RTX (retransmission) has not been negotiated between the sender and receiver the retransmitted packets will be sent over the same SSRC; otherwise the packets are sent on a separate SSRC but are still accounted for in this property.

The retransmitted packets are included in the count reported by {{domxref("RTCInboundRtpStreamStats.packetsSent", "packetsSent")}}.

## Value

A positive integer indicating the number of retransmitted packets for the source.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
