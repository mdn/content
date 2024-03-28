---
title: "RTCRemoteInboundRtpStreamStats: packetsLost property"
short-title: packetsLost
slug: Web/API/RTCRemoteInboundRtpStreamStats/packetsLost
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_remote-inbound-rtp.packetsLost
---

{{APIRef("WebRTC")}}

The **`packetsLost`** property of the {{domxref("RTCRemoteInboundRtpStreamStats")}} dictionary returns the total number of {{Glossary("RTP")}} packets lost from the [synchronization source (SSRC)](/en-US/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc), as reported by the remote endpoint, since the beginning of reception.

## Value

An integer value indicating the number of lost RTP packets.

This value can be negative.
It is determined by subtracting the number of packets received from the number of packets that are expected.
The number of packets that are expected is calculated in a way that assumes that all packets only need to be sent once (based on sequence numbers), while the number of packets received also includes any packets that had to be resent (and hence may be bigger).
For more information see the "cumulative number of packets lost" section in {{RFC("3550", "", "6.4.1")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRemoteInboundRtpStreamStats.ssrc")}}
- {{domxref("RTCInboundRtpStreamStats.packetsLost")}}
