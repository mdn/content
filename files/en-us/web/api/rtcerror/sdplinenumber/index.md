---
title: RTCError.sdpLineNumber
slug: Web/API/RTCError/sdpLineNumber
tags:
  - API
  - Error
  - Networking
  - Property
  - RTCError
  - Read-only
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - sdpLineNumber
browser-compat: api.RTCError.sdpLineNumber
---
{{APIRef("WebRTC")}}

The {{domxref("RTCError")}} interface's read-only property
**`sdpLineNumber`** specifies the line number within the
{{Glossary("SDP")}} at which a syntax error occurred while parsing it.

## Syntax

```js
let errorLineNumber = rtcError.sdpLineNumber;
```

### Value

An unsigned integer value indicating the line within the SDP at which the syntax error
described by the `RTCError` object occurred. The lines are numbed starting
with line 1.

This property is `null` unless the value of
{{domxref("RTCError.errorDetail", "errorDetail")}} is `sdp-syntax-error`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
