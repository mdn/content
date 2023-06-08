---
title: "RTCRemoteOutboundRtpStreamStats: id property"
short-title: id
slug: Web/API/RTCRemoteOutboundRtpStreamStats/id
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_remote-outbound-rtp.id
---

{{APIRef("WebRTC")}}

The **`id`** property of the {{domxref("RTCRemoteOutboundRtpStreamStats")}} dictionary is a string that uniquely identifies the object for which this object provides statistics.

Using the `id`, you can correlate this statistics object with others, in order to monitor statistics over time for a given WebRTC object, such as an {{domxref("RTCPeerConnection")}}, or an {{domxref("RTCDataChannel")}}.

## Value

A string that uniquely identifies the object for which this `RTCRemoteOutboundRtpStreamStats` object provides statistics.

The format of the ID string is not defined by the specification, so you cannot reliably make any assumptions about the contents of the string, or assume that the format of the string will remain unchanged for a given object type.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
