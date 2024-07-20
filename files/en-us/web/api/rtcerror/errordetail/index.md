---
title: "RTCError: errorDetail property"
short-title: errorDetail
slug: Web/API/RTCError/errorDetail
page-type: web-api-instance-property
browser-compat: api.RTCError.errorDetail
---

{{APIRef("WebRTC")}}

The {{domxref("RTCError")}} interface's read-only
**`errorDetail`** property is a string indicating the [WebRTC](/en-US/docs/Web/API/WebRTC_API)-specific error code that occurred.

## Value

A read-only string whose value indicates the type of WebRTC-specific error that
occurred on an {{domxref("RTCPeerConnection")}}. The possible values are:

- `data-channel-failure`
  - : The connection's {{domxref("RTCDataChannel")}} has failed.
- `dtls-failure`
  - : The negotiation of the {{Glossary("DTLS")}} connection failed, or the connection was
    terminated with a fatal error. The error's {{domxref("DOMException.message", "message")}}
    contains details about the nature of the error. If a fatal error is _received_,
    the error object's {{domxref("RTCError.receivedAlert", "receivedAlert")}} property is
    set to the value of the DTLSL alert received. If, on the other hand, a fatal error was
    _sent_, the {{domxref("RTCError.sentAlert", "sentAlert")}} is set to the
    alert's value.
- `fingerprint-failure`
  - : The remote certificate for the {{domxref("RTCDtlsTransport")}} didn't match any of
    the fingerprints listed in the SDP. If the remote peer can't match the local
    certificate against the provided fingerprints, this error doesn't occur, though this
    situation may result instead in a `dtls-failure` error.
- `hardware-encoder-error`
  - : The hardware encoder doesn't support the given configuration parameters.
- `hardware-encoder-not-available`
  - : The hardware encoder resources required to accomplish the requested operation aren't
    available.
- `sctp-failure`
  - : The {{Glossary("SCTP")}} negotiation has failed, or the connection has terminated
    with a fatal error. The SCTP cause code can be found in the `RTCError`
    object's {{domxref("RTCError.sctpCauseCode", "sctpCauseCode")}}. SCTP error cause
    codes 1-13 are defined in the SCTP specification: {{RFC(4960, "", "3.3.10")}}.
- `sdp-syntax-error`
  - : The SDP syntax is invalid. The error's {{domxref("RTCError.sdpLineNumber", "sdpLineNumber")}}
    property indicates the line number within the SDP at which the
    error was detected.

## Examples

tbd

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
