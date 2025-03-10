---
title: "RTCDataChannelStats: dataChannelIdentifier property"
short-title: dataChannelIdentifier
slug: Web/API/RTCDataChannelStats/dataChannelIdentifier
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_data-channel.dataChannelIdentifier
---

{{APIRef("WebRTC")}}

The **`dataChannelIdentifier`** property of the {{domxref("RTCDataChannelStats")}} dictionary containing the {{domxref("RTCDataChannel.id", "id")}} of the associated `RTCDataChannel` providing these statistics.

Using the `dataChannelIdentifier`, you can correlate this statistics object to a particular {{domxref("RTCDataChannel")}}.

## Value

A string containing the same value as the {{domxref("RTCDataChannel.id")}} property of the associated data channel.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
