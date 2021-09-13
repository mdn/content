---
title: RTCError.sentAlert
slug: Web/API/RTCError/sentAlert
tags:
  - API
  - DTLS
  - Error
  - Networking
  - Property
  - RTCError
  - Read-only
  - Reference
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - sentAlert
browser-compat: api.RTCError.sentAlert
---
{{APIRef("WebRTC")}}

The read-only **`sentAlert`** property in an
{{domxref("RTCError")}} object specifies the {{Glossary("DTLS")}} alert number occurred
while sending data to the remote peer, if the error represents an outbound DTLS error.

## Syntax

```js
let sentAlert = rtcError.sentAlert;
```

### Value

An unsigned integer value providing the DTLS alert number corresponding to the DTLS
error which was sent to the remote peer, as represented by this `RTCError`
object. This property is `null` if {{domxref("RTCError.errorDetail",
  "errorDetail")}} isn't `dtls-failure`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
