---
title: "RTCRemoteInboundRtpStreamStats: roundTripTime property"
short-title: roundTripTime
slug: Web/API/RTCRemoteInboundRtpStreamStats/roundTripTime
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_remote-inbound-rtp.roundTripTime
---

{{APIRef("WebRTC")}}

The **`roundTripTime`** property of the {{domxref("RTCRemoteInboundRtpStreamStats")}} dictionary indicates the estimated round trip time (RTT) for this [synchronization source (SSRC)](/en-US/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc), in seconds.

The round trip time is calculated based on the RTCP timestamps in the RTCP Sender Report (SR), and requires a report with a Delay Since Last SR (DLSR) block that has a value other than 0.
The property does not exist until such a report has been received.

Note that the _average_ RTT for the session can be computed by dividing {{domxref("RTCRemoteInboundRtpStreamStats.totalRoundTripTime","totalRoundTripTime")}} by {{domxref("RTCRemoteInboundRtpStreamStats.roundTripTimeMeasurements","roundTripTimeMeasurements")}}.

## Value

A number indicating the current estimated round trip time, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{rfc("3550","SR: Sender Report RTCP Packet", "6.4.1")}}
