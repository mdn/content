---
title: "RTCTransportStats: dtlsRole property"
short-title: dtlsRole
slug: Web/API/RTCTransportStats/dtlsRole
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_transport.dtlsRole
---

{{APIRef("WebRTC")}}

The **`dtlsRole`** property of the {{domxref("RTCTransportStats")}} dictionary is a string that indicates the role of the associated {{domxref("RTCPeerConnection")}} in the DTLS negotiation.

Specifically, whether it acted like a server and listened for connections, or like a client and initiated the connection, or that negotiation has not yet started.

## Value

A string indicating the DTLS role.
This will be one of:

- `client`
  - : The peer initiated the DTLS handshake.
- `server`
  - : The peer waited for the DTLS handshake.
- `unknown`
  - : DTLS negotiation has not started.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
