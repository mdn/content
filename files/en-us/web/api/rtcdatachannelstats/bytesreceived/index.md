---
title: "RTCDataChannelStats: bytesReceived property"
short-title: bytesReceived
slug: Web/API/RTCDataChannelStats/bytesReceived
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_data-channel.bytesReceived
---

{{APIRef("WebRTC")}}

The **`bytesReceived`** property of the {{domxref("RTCDataChannelStats")}} dictionary returns the total number of payload bytes received on the associated {{domxref("RTCDataChannel")}}.

Note that non-payload bytes, such as those for framing and in headers, are not included.

## Value

A positive integer value indicating the total number of payload bytes received on the associated data channel.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCDataChannel")}}
