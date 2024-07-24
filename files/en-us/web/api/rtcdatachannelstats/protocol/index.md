---
title: "RTCDataChannelStats: protocol property"
short-title: protocol
slug: Web/API/RTCDataChannelStats/protocol
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_data-channel.protocol
---

{{APIRef("WebRTC")}}

The **`protocol`** property of the {{domxref("RTCDataChannelStats")}} dictionary returns a string containing the {{domxref("RTCDataChannel.protocol", "protocol")}} of the associated data channel.

The value is defined by the website or app when it creates the data channel.

## Value

A string containing the same value as the {{domxref("RTCDataChannel.protocol")}} property of the associated data channel.

If no protocol was defined, this will be the empty string ("").

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCDataChannel.protocol")}}
