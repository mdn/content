---
title: "RTCError: sdpLineNumber property"
short-title: sdpLineNumber
slug: Web/API/RTCError/sdpLineNumber
page-type: web-api-instance-property
browser-compat: api.RTCError.sdpLineNumber
---

{{APIRef("WebRTC")}}

The {{domxref("RTCError")}} interface's read-only property
**`sdpLineNumber`** specifies the line number within the
{{Glossary("SDP")}} at which a syntax error occurred while parsing it.

## Value

An unsigned integer value indicating the line within the SDP at which the syntax error
described by the `RTCError` object occurred. The lines are numbed starting
with line 1.

This property is `null` unless the value of
{{domxref("RTCError.errorDetail", "errorDetail")}} is `sdp-syntax-error`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
