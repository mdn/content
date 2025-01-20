---
title: "RTCOutboundRtpStreamStats: headerBytesSent property"
short-title: headerBytesSent
slug: Web/API/RTCOutboundRtpStreamStats/headerBytesSent
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.headerBytesSent
---

{{APIRef("WebRTC")}}

The **`headerBytesSent`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary indicates the total number of RTP header and padding bytes sent for this SSRC.

The value does not include the bytes for transport layer headers such as IP or UDP.
Note that the total number of bytes sent as payload over the transport is equal to: `headerBytesSent` + {{domxref("RTCOutboundRtpStreamStats.bytesSent","bytesSent")}}.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
