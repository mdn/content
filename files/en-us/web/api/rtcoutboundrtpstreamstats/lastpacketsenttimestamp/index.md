---
title: "RTCOutboundRtpStreamStats: lastPacketSentTimestamp property"
short-title: lastPacketSentTimestamp
slug: Web/API/RTCOutboundRtpStreamStats/lastPacketSentTimestamp
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.lastPacketSentTimestamp
---

{{APIRef("WebRTC")}}

The **`lastPacketSentTimestamp`**
property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary indicates the time
at which the {{domxref("RTCRtpSender")}} described by this
{{domxref("RTCOutboundRtpStreamStats")}} object last transmitted a packet to the
remote receiver.

## Value

A {{domxref("DOMHighResTimeStamp")}} which specifies the time at which the most recently received packet arrived on this RTP stream.

> **Note:** This value differs from the {{domxref("RTCOutboundRtpStreamStats.timestamp", "timestamp")}}, which represents the time at which the statistics object was created.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
