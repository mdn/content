---
title: "RTCOutboundRtpStreamStats: targetBitrate property"
short-title: targetBitrate
slug: Web/API/RTCOutboundRtpStreamStats/targetBitrate
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.targetBitrate
---

{{APIRef("WebRTC")}}

The **`targetBitrate`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary represents the current target bitrate of the codec in use by the stream.

The value is dynamic, reflecting the encoder settings and other factors such as network conditions and available bandwidth.
It should correlate closely to the payload bytes sent per second (excluding retransmissions).

## Value

A number representing the target rate in bits per second.
This is defined in the same way as the {{rfc("3890","Transport Independent Application Specific (TIAS)")}} bitrate.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCOutboundRtpStreamStats.bytesSent")}}
- {{domxref("RTCOutboundRtpStreamStats.retransmittedBytesSent")}}
