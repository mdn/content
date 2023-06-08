---
title: "RTCOutboundRtpStreamStats: remoteId property"
short-title: remoteId
slug: Web/API/RTCOutboundRtpStreamStats/remoteId
page-type: web-api-instance-property
browser-compat: api.RTCOutboundRtpStreamStats.remoteId
---

{{APIRef("WebRTC")}}

The **`remoteId`** property of the
{{domxref("RTCOutboundRtpStreamStats")}} dictionary specifies the
{{domxref("RTCOutboundRtpStreamStats.id", "id")}} of the {{domxref("RTCRemoteInboundRtpStreamStats")}}
object representing the remote peer's {{domxref("RTCRtpReceiver")}} which is sending
the media to the local peer for this SSRC.

## Value

A string containing the ID of the
{{domxref("RTCRemoteInboundRtpStreamStats")}} object that represents the remote peer's
{{domxref("RTCRtpReceiver")}} for the synchronization source represented by this stats
object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
