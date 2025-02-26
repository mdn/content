---
title: "RTCRemoteInboundRtpStreamStats: packetsReceived property"
short-title: packetsReceived
slug: Web/API/RTCRemoteInboundRtpStreamStats/packetsReceived
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_remote-inbound-rtp.packetsReceived
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`packetsReceived`** property of the {{domxref("RTCRemoteInboundRtpStreamStats")}} dictionary returns the total number of {{Glossary("RTP")}} packets received from the [synchronization source (SSRC)](/en-US/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) of this stream by the remote endpoint, including retransmissions.

## Value

A positive integer value indicating the total number of received RTP packets at the remote endpoint.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRemoteInboundRtpStreamStats.ssrc")}}
- {{domxref("RTCInboundRtpStreamStats.packetsReceived")}}
