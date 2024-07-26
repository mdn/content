---
title: "RTCDataChannelStats: bytesSent property"
short-title: bytesSent
slug: Web/API/RTCDataChannelStats/bytesSent
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_data-channel.bytesSent
---

{{APIRef("WebRTC")}}

The **`bytesSent`** property of the {{domxref("RTCDataChannelStats")}} dictionary returns the total number of payload bytes sent on the associated {{domxref("RTCDataChannel")}}.

Note that non-payload bytes, such as those for framing and in headers, are not included.

## Value

A positive integer value indicating the total number of payload bytes sent on the associated data channel.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCDataChannel")}}
