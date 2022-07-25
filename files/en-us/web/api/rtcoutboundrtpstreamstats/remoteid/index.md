---
title: RTCOutboundRtpStreamStats.remoteId
slug: Web/API/RTCOutboundRtpStreamStats/remoteId
page-type: web-api-instance-property
tags:
  - API
  - Property
  - RTCOutboundRtpStreamStats
  - RTCRtpReceiver
  - RTCRtpSender
  - Reference
  - Remote
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - id
  - remoteId
browser-compat: api.RTCOutboundRtpStreamStats.remoteId
---
{{APIRef("WebRTC")}}

The **`remoteId`** property of the
{{domxref("RTCOutboundRtpStreamStats")}} dictionary specifies the
{{domxref("RTCStats.id", "id")}} of the {{domxref("RTCRemoteInboundRtpStreamStats")}}
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
