---
title: "RTCOutboundRtpStreamStats: totalEncodedBytesTarget property"
short-title: totalEncodedBytesTarget
slug: Web/API/RTCOutboundRtpStreamStats/totalEncodedBytesTarget
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_outbound-rtp.totalEncodedBytesTarget
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`totalEncodedBytesTarget`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary represents the sum of the target frame sizes for all of the frames encoded so far.

The codec has a target maximum size for each frame that it is asked to compress, in bytes.
This property indicates the cumulative total of the target sizes for each frame at the current time.
This will probably differ from the total of the actual frame sizes.
You can compare to {{domxref("RTCOutboundRtpStreamStats/bytesSent","bytesSent")}} in order to estimate how closely the codec is matching its target.

The value increases every time {{domxref("RTCOutboundRtpStreamStats/framesEncoded","framesEncoded")}} goes up.

> [!NOTE]
> The property is undefined for audio streams.

## Value

The sum of the target frame sizes in bytes, represented as a positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
