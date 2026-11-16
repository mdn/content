---
title: "RTCInboundRtpStreamStats: estimatedPlayoutTimestamp property"
short-title: estimatedPlayoutTimestamp
slug: Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_inbound-rtp.estimatedPlayoutTimestamp
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`estimatedPlayoutTimestamp`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the estimated playout time of this receiver's track.

This is the [Network Time Protocol (NTP)](https://en.wikipedia.org/wiki/Network_Time_Protocol) timestamp of the last playable audio sample or video frame that has a known timestamp, extrapolated with the time elapsed since it was ready to be played out.
In other words, it is the estimated current playout time of the track in the NTP clock time of the sender, and can be present even if there is no audio currently playing.

This can be used to estimate how much audio and video tracks from the same source are out of sync.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
