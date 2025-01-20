---
title: "RTCOutboundRtpStreamStats: retransmittedBytesSent property"
short-title: retransmittedBytesSent
slug: Web/API/RTCOutboundRtpStreamStats/retransmittedBytesSent
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.retransmittedBytesSent
---

{{APIRef("WebRTC")}}

The **`retransmittedBytesSent`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary represents the total number of payload bytes retransmitted for the source associated with this stream.

If RTX (retransmission) has not been negotiated between the sender and receiver the retransmitted bytes will be sent over the same SSRC; otherwise the bytes are sent on a separate SSRC but are still accounted for in this property.

The retransmitted bytes sent are included in the count reported by {{domxref("RTCInboundRtpStreamStats.bytesSent", "bytesSent")}}.

## Value

A positive integer indicating the number of retransmitted payload bytes for the source.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
