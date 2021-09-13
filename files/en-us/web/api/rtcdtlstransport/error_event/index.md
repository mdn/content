---
title: 'RTCDtlsTransport: error event'
slug: Web/API/RTCDtlsTransport/error_event
tags:
  - API
  - Connection
  - DTLS
  - Error
  - Networking
  - RTCDtlsTransport
  - Reference
  - Transport
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - events
  - Event
browser-compat: api.RTCDtlsTransport.error_event
---
{{APIRef("WebRTC")}}

An {{domxref("RTCDtlsTransport")}} receives an `error` event when a transport-level error occurs on the {{domxref("RTCPeerConnection")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{DOMxRef("RTCErrorEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{DOMxRef("RTCDtlsTransport.onerror", "onerror")}}
      </td>
    </tr>
  </tbody>
</table>

The {{domxref("RTCErrorEvent")}} object provides details about the error that occurred; see that article for details.

## Description

Transport-level errors will have one of the following values for the specified error's {{domxref("RTCError")}} property {{domxref("RTCError.errorDetail", "errorDetail")}}:

- `dtls-failure`
  - : The negotiation of the {{Glossary("DTLS")}} connection failed, or the connection was terminated with a fatal error. The error's {{domxref("DOMException.message", "message")}} contains details about the nature of the error. If a fatal error is _received_, the error object's {{domxref("RTCError.receivedAlert", "receivedAlert")}} property is set to the value of the DTLSL alert received. If, on the other hand, a fatal error was _sent_, the {{domxref("RTCError.sentAlert", "sentAlert")}} is set to the alert's value.
- `fingerprint-failure`
  - : The remote certificate for the {{domxref("RTCDtlsTransport")}} didn't match any of the fingerprints listed in the SDP. If the remote peer can't match the local certificate against the provided fingerprints, this error doesn't occur, though this situation may result instead in a `dtls-failure` error.

## Examples

In this example, the {{domxref("RTCDtlsTransport.onerror", "onerror")}} event handler property is used to set the handler for the `error` event.

```js
transport.onerror = ev => {
  const err = ev.error;

  /* ... */
}
```

> **Note:** Since `RTCError` is not one of the legacy errors, the value of {{domxref("DOMException.code", "code")}} is always 0.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
