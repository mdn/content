---
title: "RTCDataChannelStats: type property"
short-title: type
slug: Web/API/RTCDataChannelStats/type
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_data-channel.type
---

{{APIRef("WebRTC")}}

The **`type`** property of the {{domxref("RTCDataChannelStats")}} dictionary is a string with the value `"data-channel"`.

Different statistics are obtained by iterating the {{domxref("RTCStatsReport")}} object returned by a call to {{domxref("RTCPeerConnection.getStats()")}}.
The type indicates the set of statistics available through the object in a particular iteration step.
A value of `"data-channel"` indicates that the statistics available in the current step are those defined in {{domxref("RTCDataChannelStats")}}.

## Value

A string with the value `"data-channel"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
