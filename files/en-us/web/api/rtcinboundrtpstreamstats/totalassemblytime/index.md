---
title: "RTCInboundRtpStreamStats: totalAssemblyTime property"
short-title: totalAssemblyTime
slug: Web/API/RTCInboundRtpStreamStats/totalAssemblyTime
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_inbound-rtp.totalAssemblyTime
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`totalAssemblyTime`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total time spent assembling successfully decoded video frames that were transported in multiple RTP packets.

> [!NOTE]
> The value is undefined for audio streams.

## Value

A number, in seconds.

## Description

The property is updated whenever a video frame that was transported in multiple RTP packets is is successfully decoded.
The time increment is calculated by subtracting the timestamp of the last and first RTP packets that contained the video frame data.
The time is not updated for video frames that are not decoded, or that are transported entirely within one RTP packet.

The average assembly time can be determined by dividing `totalAssemblyTime` by {{domxref("RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets","framesAssembledFromMultiplePackets")}}.
A higher average assembly time might indicate network issues or inefficiencies in the receiving pipeline.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
