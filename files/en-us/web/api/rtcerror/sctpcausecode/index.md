---
title: RTCError.sctpCauseCode
slug: Web/API/RTCError/sctpCauseCode
tags:
  - API
  - Error
  - Networking
  - Property
  - RTCError
  - Read-only
  - Reference
  - SCTP
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - sctpCauseCode
browser-compat: api.RTCError.sctpCauseCode
---
{{APIRef("WebRTC")}}

The read-only **`sctpCauseCode`** property in an
{{domxref("RTCError")}} object provides the {{Glossary("SCTP")}} cause code explaining
why the SCTP negotiation failed, if the `RTCError` represents an SCTP error.

## Syntax

```js
let sctpCause = rtcError.sctpCauseCode;
```

### Value

An unsigned long integer value specifying SCTP cause code explaining why the error
occurred. This property is `null` if the error isn't an SCTP error, with its
{{domxref("RTCError.errorDetail", "errorDetail")}} property set to
`sctp-failure`.

The standard SCTP error cause codes, numbered 1-13, are defined in the SCTP
specification: {{RFC(4960, "", "3.3.10")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
