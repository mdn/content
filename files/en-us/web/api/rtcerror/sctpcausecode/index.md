---
title: "RTCError: sctpCauseCode property"
short-title: sctpCauseCode
slug: Web/API/RTCError/sctpCauseCode
page-type: web-api-instance-property
browser-compat: api.RTCError.sctpCauseCode
---

{{APIRef("WebRTC")}}

The **`sctpCauseCode`** read-only property of the {{domxref("RTCError")}} interface provides the {{Glossary("SCTP")}} cause code explaining why the SCTP negotiation failed, if the `RTCError` represents an SCTP error.

## Value

A positive integer specifying the SCTP cause code explaining why the error occurred.
This property must only be set if {{domxref("RTCError.errorDetail", "errorDetail")}} is `sctp-failure`, and is otherwise `null`.

The standard SCTP error cause codes, numbered 1-13, are defined in the SCTP specification: {{RFC(4960, "", "3.3.10")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
