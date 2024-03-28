---
title: "RTCRemoteInboundRtpStreamStats: roundTripTimeMeasurements property"
short-title: roundTripTimeMeasurements
slug: Web/API/RTCRemoteInboundRtpStreamStats/roundTripTimeMeasurements
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_remote-inbound-rtp.roundTripTimeMeasurements
---

{{APIRef("WebRTC")}}

The **`roundTripTimeMeasurements`** property of the {{domxref("RTCRemoteInboundRtpStreamStats")}} dictionary contains a positive integer value that represents the total number valid round trip time measurements received for this [synchronizing source](#ssrc).

The count can be used as a measure of the availability and reliability of round-trip-time measurement data.

## Value

A positive number indicating the number of valid round trip time measurements.

This is the count of _RTCP Receiver Reports (RR)_ received for this [synchronizing source](#ssrc) that contain a non-zero value for the "delay since last SR (DLSR)" field.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{rfc("3550","RR: Receiver Report RTCP Packet", "6.4.2")}}
