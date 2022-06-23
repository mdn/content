---
title: RTCDtlsTransport.state
slug: Web/API/RTCDtlsTransport/state
page-type: web-api-instance-property
tags:
  - API
  - Property
  - RTCDtlsTransport
  - Read-only
  - Reference
  - WebRTC
  - state
browser-compat: api.RTCDtlsTransport.state
---
{{APIRef("WebRTC")}}

The **`state`** read-only property of the
{{DOMxRef("RTCDtlsTransport")}} interface provides information which describes a
Datagram Transport Layer Security (**{{Glossary("DTLS")}}**) transport state.

## Value

A string. Its value is one of the following:

- `new`
  - : The initial state when DTLS has not started negotiating yet.
- `connecting`
  - : DTLS is in the process of negotiating a secure connection and verifying the remote fingerprint.
- `connected`
  - : DTLS has completed negotiation of a secure connection and verified the remote fingerprint.
- `closed`
  - : The transport has been closed intentionally as the result of receipt of a
    `close_notify` alert, or calling {{DOMxRef("RTCPeerConnection.close()")}}.
- `failed`
  - : The transport has failed as the result of an error (such as receipt of an error
    alert or failure to validate the remote fingerprint).

## Examples

See [`RTCDtlsTransport`](/en-US/docs/Web/API/RTCDtlsTransport#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{DOMxRef("RTCDtlsTransport")}}
