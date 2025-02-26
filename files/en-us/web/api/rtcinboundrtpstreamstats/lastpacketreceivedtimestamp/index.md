---
title: "RTCInboundRtpStreamStats: lastPacketReceivedTimestamp property"
short-title: lastPacketReceivedTimestamp
slug: Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.lastPacketReceivedTimestamp
---

{{APIRef("WebRTC")}}

The **`lastPacketReceivedTimestamp`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the time at which the most recently received packet arrived from this source.

## Value

A {{domxref("DOMHighResTimeStamp")}} which specifies the time at which the most recently received packet arrived on this RTP stream.

> [!NOTE]
> This value differs from the {{domxref("RTCInboundRtpStreamStats.timestamp", "timestamp")}},
> which represents the time at which the statistics object was created.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
