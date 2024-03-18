---
title: "RTCRemoteInboundRtpStreamStats: jitter property"
short-title: jitter
slug: Web/API/RTCRemoteInboundRtpStreamStats/jitter
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_remote-inbound-rtp.jitter
---

{{APIRef("WebRTC")}}

The **`jitter`** property of the {{domxref("RTCRemoteInboundRtpStreamStats")}} dictionary returns the {{glossary("Jitter", "packet jitter")}} for the [synchronization source (SSRC)](/en-US/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) as measured by the remote endpoint.

High packet jitter values indicate that packet arrival rates vary significantly, which may degrade video, audio, and other real-time communications over WebRTC.

## Value

Packet jitter, in seconds.

The value is calculated using the "interarrival jitter" algorithm described in {{RFC("3550", "", "6.4.1")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRemoteInboundRtpStreamStats.ssrc")}}
- {{domxref("RTCInboundRtpStreamStats.jitter")}}
