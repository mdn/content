---
title: RTCStatsReport
slug: Web/API/RTCStatsReport
page-type: web-api-interface
tags:
  - API
  - Dictionary
  - Draft
  - Interface
  - Media
  - NeedsContent
  - RTCStatsReport
  - Reference
  - WebRTC
browser-compat: api.RTCStatsReport
---
{{APIRef("WebRTC")}}

The **`RTCStatsReport`** interface provides a statistics report obtained by calling one of the {{domxref("RTCPeerConnection.getStats()")}}, {{domxref("RTCRtpReceiver.getStats()")}}, and {{domxref("RTCRtpSender.getStats()")}} methods.

This statistics report contains a mapping of statistic category string names to objects containing the corresponding statistics data.

Calling `getStats()` on an {{domxref("RTCPeerConnection")}} lets you specify whether you wish to obtain statistics for outbound, inbound, or all streams on the connection. The {{domxref("RTCRtpReceiver")}} and {{domxref("RTCRtpSender")}} versions of `getStats()` specifically only return statistics available to the incoming or outgoing stream on which you call them.

## The statistics objects

For each category of statistic information, there is a dictionary whose properties provide the relevant information.

### Properties common to all statistic categories

All WebRTC statistics objects are fundamentally based on the {{domxref("RTCStats")}} dictionary, which provides the most fundamental information: the timestamp, the statistic type string, and an ID uniquely identifying the source of the data.

### The statistic categories

The {{domxref("RTCStats.type", "type")}} gives the name of the statistic category represented by the object, and is how you locate the specific type of data you need.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCPeerConnection.getStats()")}}, {{domxref("RTCRtpReceiver.getStats()")}}, and {{domxref("RTCRtpSender.getStats()")}}
