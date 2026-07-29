---
title: "RTCInboundRtpStreamStats: headerBytesReceived property"
short-title: headerBytesReceived
slug: Web/API/RTCInboundRtpStreamStats/headerBytesReceived
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.headerBytesReceived
---

{{APIRef("WebRTC")}}

The **`headerBytesReceived`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total number of RTP header and padding bytes received for this [synchronization source (SSRC)](/en-US/docs/Web/API/RTCInboundRtpStreamStats/ssrc), including those sent in retransmissions.

Note that the total number of bytes received as payload over the transport is equal to: `headerBytesReceived` + {{domxref("RTCInboundRtpStreamStats.bytesReceived","bytesReceived")}}.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
