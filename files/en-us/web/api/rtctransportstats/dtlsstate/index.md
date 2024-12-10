---
title: "RTCTransportStats: dtlsState property"
short-title: dtlsState
slug: Web/API/RTCTransportStats/dtlsState
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_transport.dtlsState
---

{{APIRef("WebRTC")}}

The **`dtlsState`** property of the {{domxref("RTCTransportStats")}} dictionary is a string that indicates the current state of the underlying {{domxref("RTCDtlsTransport")}}.

## Value

This has the same values as the corresponding {{domxref("RTCDtlsTransport.state")}} property:

- `new`
  - : The initial state when DTLS has not started negotiating yet.
- `connecting`
  - : DTLS is in the process of negotiating a secure connection and verifying the remote fingerprint.
- `connected`
  - : DTLS has completed negotiation of a secure connection and verified the remote fingerprint.
- `closed`
  - : The transport has been closed intentionally as the result of receipt of a `close_notify` alert, or calling {{DOMxRef("RTCPeerConnection.close()")}}.
- `failed`
  - : The transport has failed as the result of an error (such as receipt of an error alert or failure to validate the remote fingerprint).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
