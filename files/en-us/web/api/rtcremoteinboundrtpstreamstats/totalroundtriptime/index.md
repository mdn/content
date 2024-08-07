---
title: "RTCRemoteInboundRtpStreamStats: totalRoundTripTime property"
short-title: totalRoundTripTime
slug: Web/API/RTCRemoteInboundRtpStreamStats/totalRoundTripTime
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_remote-inbound-rtp.totalRoundTripTime
---

{{APIRef("WebRTC")}}

The **`totalRoundTripTime`** property of the {{domxref("RTCRemoteInboundRtpStreamStats")}} dictionary indicates the cumulative number sum of all round trip time (RTT) measurements since the beginning of the session, in seconds.

The individual round trip time is calculated based on the RTCP timestamps in the RTCP Receiver Report (RR), hence requires a DLSR value other than 0.
The average RTT can be computed by dividing `totalRoundTripTime` by {{domxref("RTCRemoteInboundRtpStreamStats.roundTripTimeMeasurements","roundTripTimeMeasurements")}}.

## Value

A number indicating the total round trip time for the session, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{rfc("3550","RR: Receiver Report RTCP Packet", "6.4.2")}}
