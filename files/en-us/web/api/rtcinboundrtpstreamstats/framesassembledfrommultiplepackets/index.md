---
title: "RTCInboundRtpStreamStats: framesAssembledFromMultiplePackets property"
short-title: framesAssembledFromMultiplePackets
slug: Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_inbound-rtp.framesAssembledFromMultiplePackets
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`framesAssembledFromMultiplePackets`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total number of correctly decoded frames for this RTP stream that were assembled from more than one RTP packet.

This property can be used with {{domxref("RTCInboundRtpStreamStats/totalAssemblyTime","totalAssemblyTime")}} to determine the average assembly time: `totalAssemblyTime / framesAssembledFromMultiplePacket`.
A higher average assembly time might indicate network issues or inefficiencies in the receiving pipeline.

> [!NOTE]
> The value is undefined for audio streams.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
