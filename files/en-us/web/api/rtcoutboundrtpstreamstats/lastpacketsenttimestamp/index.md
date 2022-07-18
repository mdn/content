---
title: RTCOutboundRtpStreamStats.lastPacketSentTimestamp
slug: Web/API/RTCOutboundRtpStreamStats/lastPacketSentTimestamp
page-type: web-api-instance-property
tags:
  - API
  - Packet
  - Property
  - RTCOutboundRtpStreamStats
  - RTCRtpSender
  - RTP
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - lastPacketSentTImestamp
  - timeStamp
browser-compat: api.RTCOutboundRtpStreamStats.lastPacketSentTimestamp
---
{{APIRef("WebRTC")}}

The **`lastPacketSentTimestamp`**
property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary indicates the time
at which the {{domxref("RTCRtpSender")}} described by this
{{domxref("RTCOutboundRtpStreamStats")}} object last transmitted a packet to the
remote receiver.

## Value

A {{domxref("DOMHighResTimeStamp")}} which specifies the time at which the most
recently received packet arrived on this RTP stream.

> **Note:** This value differs from the {{domxref("RTCStats.timestamp",
    "timestamp")}}, which represents the time at which the statistics object was created.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
