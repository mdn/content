---
title: "RTCOutboundRtpStreamStats: retransmittedPacketsSent property"
short-title: retransmittedPacketsSent
slug: Web/API/RTCOutboundRtpStreamStats/retransmittedPacketsSent
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.retransmittedPacketsSent
---

{{APIRef("WebRTC")}}

The **`retransmittedPacketsSent`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary represents the total number of packets retransmitted for the source associated with this stream.

RTX (Retransmission) is one of several mechanisms that WebRTC uses for retransmitting lost payload bytes, and broadly refers to support for the special packets defined in {{rfc("4588")}}.
RTX has to be negotiated between the sender and receiver during initial handshake.
If RTX has not been negotiated the retransmitted packets will be sent over the same SSRC; otherwise the bytes are sent on a separate SSRC but are still accounted for in this property.

The retransmitted packets are included in the count reported by {{domxref("RTCOutboundRtpStreamStats.packetsSent", "packetsSent")}}.

## Value

A positive integer indicating the number of retransmitted packets for the source.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
