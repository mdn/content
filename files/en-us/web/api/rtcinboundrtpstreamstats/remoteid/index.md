---
title: "RTCInboundRtpStreamStats: remoteId property"
short-title: remoteId
slug: Web/API/RTCInboundRtpStreamStats/remoteId
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.remoteId
---

{{APIRef("WebRTC")}}

The **`remoteId`** property of the
{{domxref("RTCInboundRtpStreamStats")}} dictionary specifies the {{domxref("RTCInboundRtpStreamStats.id", "id")}} of the {{domxref("RTCRemoteOutboundRtpStreamStats")}} object representing the remote peer's {{domxref("RTCRtpSender")}} which is sending the media to the local peer.

## Value

A string containing the ID of the
{{domxref("RTCRemoteOutboundRtpStreamStats")}} object that represents the remote peer's
{{domxref("RTCRtpSender")}} for the synchronization source represented by this stats
object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
