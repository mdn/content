---
title: "RTCError: sentAlert property"
short-title: sentAlert
slug: Web/API/RTCError/sentAlert
page-type: web-api-instance-property
browser-compat: api.RTCError.sentAlert
---

{{APIRef("WebRTC")}}

The read-only **`sentAlert`** property in an
{{domxref("RTCError")}} object specifies the {{Glossary("DTLS")}} alert number occurred
while sending data to the remote peer, if the error represents an outbound DTLS error.

## Value

An unsigned integer value providing the DTLS alert number corresponding to the DTLS
error which was sent to the remote peer, as represented by this `RTCError`
object. This property is `null` if {{domxref("RTCError.errorDetail", "errorDetail")}}
isn't `dtls-failure`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
