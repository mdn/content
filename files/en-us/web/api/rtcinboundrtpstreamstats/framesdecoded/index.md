---
title: "RTCInboundRtpStreamStats: framesDecoded property"
short-title: framesDecoded
slug: Web/API/RTCInboundRtpStreamStats/framesDecoded
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.framesDecoded
---

{{APIRef("WebRTC")}}

The **`framesDecoded`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total number of video frames which have been decoded successfully for this media source.

This represents the number of frames that would have been displayed assuming no frames were skipped.

> [!NOTE]
> The property is undefined for audio streams.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.totalDecodeTime", "totalDecodeTime")}}
