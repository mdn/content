---
title: "RTCOutboundRtpStreamStats: bytesSent property"
short-title: bytesSent
slug: Web/API/RTCOutboundRtpStreamStats/bytesSent
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.bytesSent
---

{{APIRef("WebRTC")}}

The **`bytesSent`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary indicates the total number of payload bytes sent on this stream ({{domxref("RTCDataChannel")}}).

The value includes bytes in retransmitted payload bytes.
It does not include headers or padding.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
