---
title: "RTCOutboundRtpStreamStats: qualityLimitationReason property"
short-title: qualityLimitationReason
slug: Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_outbound-rtp.qualityLimitationReason
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`qualityLimitationReason`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary is a string indicating the reason why the media quality in the stream is currently being reduced by the codec during encoding, or `none` if no quality reduction is being performed.

This quality reduction may include changes such as reduced frame rate or resolution, or an increase in compression factor.
Note that the user agent report the most limiting factor.
If the most limiting factor cannot be determined the result will be reported using the priority order: "bandwidth", "cpu", "other".

The amount of time the encoded media has had its quality reduced in each of the potential ways that can be done can be found in {{domxref("RTCOutboundRtpStreamStats.qualityLimitationDurations", "qualityLimitationDurations")}}.

> [!NOTE]
> The property is undefined for audio streams.

## Value

A string with one of the following values:

- `none`
  - : The quality is not limited.
- `cpu`
  - : The quality is primarily limited due to CPU load.
- `bandwidth`
  - : The quality is primarily limited due to congestion cues during bandwidth estimation, such as inter-arrival time and round-trip time.
- `other`
  - : The quality is primarily limited for a reason other than the above.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
