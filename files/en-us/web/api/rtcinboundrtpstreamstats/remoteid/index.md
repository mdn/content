---
title: RTCInboundRtpStreamStats.remoteId
slug: Web/API/RTCInboundRtpStreamStats/remoteId
page-type: web-api-instance-property
tags:
  - API
  - Media
  - Property
  - RTCInboundRtpStreamStats
  - RTCRtpSender
  - RTP
  - Reference
  - Remote
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - id
  - remoteId
  - sender
  - stream
browser-compat: api.RTCInboundRtpStreamStats.remoteId
---
{{APIRef("WebRTC")}}

The **`remoteId`** property of the
{{domxref("RTCInboundRtpStreamStats")}} dictionary specifies the
{{domxref("RTCStats.id", "id")}} of the {{domxref("RTCRemoteOutboundRtpStreamStats")}}
object representing the remote peer's {{domxref("RTCRtpSender")}} which is sending the
media to the local peer.

## Value

A string containing the ID of the
{{domxref("RTCRemoteOutboundRtpStreamStats")}} object that represents the remote peer's
{{domxref("RTCRtpSender")}} for the synchronization source represented by this stats
object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
