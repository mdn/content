---
title: "RTCDataChannelStats: state property"
short-title: state
slug: Web/API/RTCDataChannelStats/state
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_data-channel.state
---

{{APIRef("WebRTC")}}

The **`state`** property of the `RTCDataChannelStats` dictionary returns a string that indicates the {{domxref("RTCDataChannel.readyState","readyState")}} of the data channel's underlying data connection: `connecting`, `open`, `closing` or `closed`.

Note that this property is required.

## Values

A string containing the same value as the {{domxref("RTCDataChannel.readyState")}} property of the associated data channel.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCDataChannel.readyState")}}
