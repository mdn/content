---
title: "RTCInboundRtpStreamStats: totalDecodeTime property"
short-title: totalDecodeTime
slug: Web/API/RTCInboundRtpStreamStats/totalDecodeTime
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.totalDecodeTime
---

{{APIRef("WebRTC")}}

The **`totalDecodeTime`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total time spend decoding frames for this media source/stream, in seconds.

The time it takes to decode one frame is the time passed between feeding the decoder a frame and the decoder returning decoded data for that frame.

The number of decoded frames is given in {{domxref("RTCInboundRtpStreamStats.framesDecoded", "framesDecoded")}}, and the average decode time is `totalDecodeTime / framesDecoded`.

> [!NOTE]
> The property is undefined for audio streams.

## Value

An positive number, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.framesDecoded", "framesDecoded")}}
