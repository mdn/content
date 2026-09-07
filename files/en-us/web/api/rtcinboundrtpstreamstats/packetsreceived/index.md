---
title: "RTCInboundRtpStreamStats: packetsReceived property"
short-title: packetsReceived
slug: Web/API/RTCInboundRtpStreamStats/packetsReceived
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.packetsReceived
---

{{APIRef("WebRTC")}}

The **`packetsReceived`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary returns the total number of {{Glossary("RTP")}} packets received from the [synchronization source (SSRC)](/en-US/docs/Web/API/RTCInboundRtpStreamStats/ssrc) of this stream, including retransmissions.

## Value

A positive integer value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.ssrc")}}
- {{domxref("RTCRemoteInboundRtpStreamStats.packetsReceived", "packetsReceived")}}
- {{domxref("RTCInboundRtpStreamStats.packetsLost", "packetsLost")}}
- {{domxref("RTCInboundRtpStreamStats.packetsLost", "packetsDiscarded")}}
