---
title: "RTCOutboundRtpStreamStats: mediaSourceId property"
short-title: mediaSourceId
slug: Web/API/RTCOutboundRtpStreamStats/mediaSourceId
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.mediaSourceId
---

{{APIRef("WebRTC")}}

The **`mediaSourceId`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary represents the ID of the statistics object of the track currently attached to the sender of this stream.

This can then be used to obtain the corresponding {{domxref("RTCVideoSourceStats")}} or {{domxref("RTCAudioSourceStats")}}.

## Value

A string containing the ID of a media source statistics object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
