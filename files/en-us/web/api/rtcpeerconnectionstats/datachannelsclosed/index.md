---
title: "RTCPeerConnectionStats: dataChannelsClosed property"
short-title: dataChannelsClosed
slug: Web/API/RTCPeerConnectionStats/dataChannelsClosed
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_peer-connection.dataChannelsClosed
---

{{APIRef("WebRTC")}}

The **`dataChannelsClosed`** property of the {{domxref("RTCPeerConnectionStats")}} dictionary indicates the number of unique {{domxref("RTCDataChannel")}} objects that have left the [`open`](/en-US/docs/Web/API/RTCDataChannel/readyState#open) state during their lifetime.

A channel will leave the `open` state if either end of the connection or the underlying transport is closed.
Note that channels that transition to [`closing`](/en-US/docs/Web/API/RTCDataChannel/readyState#closing) or [`closed`](/en-US/docs/Web/API/RTCDataChannel/readyState#closed) without ever being `open` are not counted in this number.

## Value

A positive integer that indicates the number of unique {{domxref("RTCDataChannel")}} objects that have left the [`open`](/en-US/docs/Web/API/RTCDataChannel/readyState#open) state during their lifetime.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
