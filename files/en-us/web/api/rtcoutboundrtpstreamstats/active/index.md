---
title: "RTCOutboundRtpStreamStats: active property"
short-title: active
slug: Web/API/RTCOutboundRtpStreamStats/active
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_outbound-rtp.active
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`active`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary is a boolean that indicates whether this RTP stream is configured to be sent, or is disabled.

For example, this would be be `false` if the track corresponding to the the stream had its {{domxref("MediaStreamTrack.enabled")}} property set to `false`.
Note that an active stream may still not be sending if, for example, the stream is limited by network conditions.

## Value

`true` if the stream is enabled for sending, `false` otherwise.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
