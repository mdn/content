---
title: "RTCError: RTCError() constructor"
short-title: RTCError()
slug: Web/API/RTCError/RTCError
page-type: web-api-constructor
browser-compat: api.RTCError.RTCError
---

{{APIRef("WebRTC")}}

The **`RTCError()`** constructor creates and returns a new {{domxref("RTCError")}} object instance.

## Syntax

```js-nolint
new RTCError(options)
new RTCError(options, message)
```

### Parameters

- `options`
  - : An object providing the details of the specific error in an `RTCErrorEvent`.
    The object has the following properties:
    - `errorDetail`
      - : A string specifying the WebRTC-specific error code identifying the type of error that occurred.
        This will be one of:
        - `data-channel-failure`
          - : The connection's {{domxref("RTCDataChannel")}} has failed.
        - `dtls-failure`
          - : The negotiation of the {{Glossary("DTLS")}} connection failed, or the connection was terminated with a fatal error.
            The error's {{domxref("DOMException.message", "message")}} contains details about the nature of the error.
            - If a fatal error is _received_, set [`receivedAlert`](#receivedalert) to the value of the received DTLS alert.
            - If a fatal error was _sent_, set [`sentAlert`](#sentalert) to the alert's value.
        - `fingerprint-failure`
          - : The remote certificate for the {{domxref("RTCDtlsTransport")}} didn't match any of the fingerprints listed in the {{Glossary("SDP")}} message.
            If the remote peer can't match the local certificate against the provided fingerprints, this error doesn't occur, though this situation may result instead in a `dtls-failure` error.
        - `hardware-encoder-error`
          - : The hardware encoder doesn't support the given configuration parameters.
        - `hardware-encoder-not-available`
          - : The hardware encoder resources required to accomplish the requested operation aren't available.
        - `sctp-failure`
          - : The {{Glossary("SCTP")}} negotiation has failed, or the connection has terminated with a fatal error.
            The SCTP cause code should be set in [`sctpCauseCode`](#sctpcausecode).
            SCTP error cause codes 1-13 are defined in the SCTP specification: {{RFC(4960, "", "3.3.10")}}.
        - `sdp-syntax-error`
          - : The SDP syntax is invalid.
            The SDP message line number at which the error was detected should be set in [`sdpLineNumber`](#sdplinenumber).

    - `receivedAlert` {{optional_inline}}
      - : A positive integer value indicating a fatal {{Glossary("DTLS")}} error that was received from the network.
        Only set if the `errorDetail` string is `dtls-failure`.

    - `sctpCauseCode` {{optional_inline}}
      - : An integer specifying the {{Glossary("SCTP")}} cause code that indicates the cause of the failed SCTP negotiation.
        This should only be set if `errorDetail` is `sctp-failure`.

    - `sdpLineNumber` {{optional_inline}}
      - : An integer identifying the {{Glossary("SDP")}} message line number at which a syntax error occurred.
        Only set if `errorDetail` is `sdp-syntax-error`.
    - `sentAlert` {{optional_inline}}
      - : A positive integer indicating a fatal DTLS error that was sent out by this device.
        Only set if `errorDetail` is `dtls-failure`.

- `message` {{optional_inline}}
  - : A string for the error message.
    Defaults to the empty string (`""`).

### Return value

A newly-created {{domxref("RTCError")}} object instance.

## Usage notes

This constructor does not do complete validation of the specified `candidateInfo` object or string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
