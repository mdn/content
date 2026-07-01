---
title: "RTCOutboundRtpStreamStats: totalEncodeTime property"
short-title: totalEncodeTime
slug: Web/API/RTCOutboundRtpStreamStats/totalEncodeTime
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.totalEncodeTime
---

{{APIRef("WebRTC")}}

The **`totalEncodeTime`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary represents the total number of seconds spent encoding the {{domxref("RTCOutboundRtpStreamStats/framesEncoded","framesEncoded")}} frames for this stream ({{domxref("RTCRtpSender")}}).

The average encode time can be calculated by dividing this value by `framesEncoded`.
The time it takes to encode one frame is the time between sending the encoder a frame and the encoder returning encoded data for that frame.
It does not include any time spent packetizing the resulting data.

> [!NOTE]
> The property is undefined for audio streams.

## Value

A number representing the total time spent encoding frames, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
