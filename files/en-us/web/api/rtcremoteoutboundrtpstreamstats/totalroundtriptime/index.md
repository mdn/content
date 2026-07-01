---
title: "RTCRemoteOutboundRtpStreamStats: totalRoundTripTime property"
short-title: totalRoundTripTime
slug: Web/API/RTCRemoteOutboundRtpStreamStats/totalRoundTripTime
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_remote-outbound-rtp.totalRoundTripTime
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`totalRoundTripTime`** property of the {{domxref("RTCRemoteOutboundRtpStreamStats")}} dictionary indicates the sum of all round trip time (RTT) measurements since the beginning of the session, in seconds.

The individual round trip time is calculated based on RTCP timestamps in the DLRR report block of RTCP Sender Reports (SR).
The average RTT can be computed by dividing `totalRoundTripTime` by {{domxref("RTCRemoteOutboundRtpStreamStats.roundTripTimeMeasurements","roundTripTimeMeasurements")}}.

## Value

A number indicating the total round trip time for the session, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{rfc("3611","DLRR Report Block", "4.5")}}
