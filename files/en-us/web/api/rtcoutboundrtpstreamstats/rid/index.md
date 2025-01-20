---
title: "RTCOutboundRtpStreamStats: rid property"
short-title: rid
slug: Web/API/RTCOutboundRtpStreamStats/rid
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.rid
---

{{APIRef("WebRTC")}}

The **`rid`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary is a string that specifies the RTP stream ID, if defined.

The property only exists for audio streams where the rid has been set for the corresponding {{domxref("RTCRtpSender")}}.
If set, this value will be present regardless of whether the RID RTP header extension has been negotiated.

## Value

The value of the [`encodings.rid`](/en-US/docs/Web/API/RTCRtpSender/setParameters#rid) argument passed to {{domxref("RTCRtpSender.setParameters()")}}, if any, when the corresponding transceiver is created.
If the stream ID was not set this property does not exist.

> [!NOTE]
> This property only exists for audio streams.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
