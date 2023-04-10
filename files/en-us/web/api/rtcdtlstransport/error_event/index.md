---
title: "RTCDtlsTransport: error event"
short-title: error
slug: Web/API/RTCDtlsTransport/error_event
page-type: web-api-event
browser-compat: api.RTCDtlsTransport.error_event
---

{{APIRef("WebRTC")}}

An {{domxref("RTCDtlsTransport")}} receives an `error` event when a transport-level error occurs on the {{domxref("RTCPeerConnection")}}.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Event type

An {{domxref("RTCErrorEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("RTCErrorEvent")}}

## Event properties

_In addition to the standard properties available on the {{domxref("Event")}} interface, `RTCErrorEvent` also includes the following:_

- {{domxref("RTCErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : An {{domxref("RTCError")}} object specifying the error which occurred; this object includes the type of error that occurred, information about where the error occurred (such as which line number in the {{Glossary("SDP")}} or what {{Glossary("SCTP")}} cause code was at issue).

## Description

Transport-level errors will have one of the following values for the specified error's {{domxref("RTCError")}} property {{domxref("RTCError.errorDetail", "errorDetail")}}:

- `dtls-failure`
  - : The negotiation of the {{Glossary("DTLS")}} connection failed, or the connection was terminated with a fatal error. The error's {{domxref("DOMException.message", "message")}} contains details about the nature of the error. If a fatal error is _received_, the error object's {{domxref("RTCError.receivedAlert", "receivedAlert")}} property is set to the value of the DTLSL alert received. If, on the other hand, a fatal error was _sent_, the {{domxref("RTCError.sentAlert", "sentAlert")}} is set to the alert's value.
- `fingerprint-failure`
  - : The remote certificate for the {{domxref("RTCDtlsTransport")}} didn't match any of the fingerprints listed in the SDP. If the remote peer can't match the local certificate against the provided fingerprints, this error doesn't occur, though this situation may result instead in a `dtls-failure` error.

## Examples

In this example, the {{domxref("RTCDtlsTransport.onerror", "onerror")}} event handler property is used to set the handler for the `error` event.

```js
transport.onerror = (ev) => {
  const err = ev.error;

  // …
};
```

> **Note:** Since `RTCError` is not one of the legacy errors, the value of {{domxref("DOMException.code", "code")}} is always 0.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
