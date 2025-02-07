---
title: "RTCOutboundRtpStreamStats: retransmittedBytesSent property"
short-title: retransmittedBytesSent
slug: Web/API/RTCOutboundRtpStreamStats/retransmittedBytesSent
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.retransmittedBytesSent
---

{{APIRef("WebRTC")}}

The **`retransmittedBytesSent`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary represents the total number of payload bytes retransmitted for the source associated with this stream.

RTX (Retransmission) is one of several mechanisms that WebRTC uses for retransmitting lost payload bytes, and broadly refers to support for the special packets defined in {{rfc("4588")}}.
RTX has to be negotiated between the sender and receiver during initial handshake.
If RTX has not been negotiated the retransmitted bytes will be sent over the same SSRC; otherwise the bytes are sent on a separate SSRC but are still accounted for in this property.

The retransmitted bytes sent are included in the count reported by {{domxref("RTCOutboundRtpStreamStats .bytesSent", "bytesSent")}}.

## Value

A positive integer indicating the number of retransmitted payload bytes for the source.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
