---
title: "RTCRemoteOutboundRtpStreamStats: roundTripTimeMeasurements property"
short-title: roundTripTimeMeasurements
slug: Web/API/RTCRemoteOutboundRtpStreamStats/roundTripTimeMeasurements
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_remote-outbound-rtp.roundTripTimeMeasurements
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`roundTripTimeMeasurements`** property of the {{domxref("RTCRemoteOutboundRtpStreamStats")}} dictionary is a positive integer value that represents the total number valid round of trip time measurements received for this [synchronizing source (SSRC)](/en-US/docs/Web/API/RTCRemoteOutboundRtpStreamStats/ssrc).

The count can be used as a measure of the availability and reliability of round trip time measurement data.

## Value

A positive number indicating the number of valid round trip time measurements.

This is the number of _RTCP Sender Reports (SR)_ received for this SSRC that contain a "delay since last RR (DLRR)" field from which a valid round trip time can be derived (according to {{rfc("3611","DLRR Report Block", "4.5")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
