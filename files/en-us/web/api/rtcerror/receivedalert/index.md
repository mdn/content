---
title: RTCError.receivedAlert
slug: Web/API/RTCError/receivedAlert
page-type: web-api-instance-property
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
  - receivedAlert
browser-compat: api.RTCError.receivedAlert
---
{{APIRef("WebRTC")}}

The {{domxref("RTCError")}} read-only property
**`receivedAlert`** specifies the fatal {{Glossary("DTLS")}}
error which resulted in an alert being received from the remote peer.

## Value

An unsigned long integer value specifying the fatal {{Glossary("DTLS")}} error which
resulted in an alert being received from the remote peer.

> **Note:** This property is `null` if the `RTCError` doesn't represent a
> DTLS error (with {{domxref("RTCError.errorDetail", "errorDetail")}} set to
> `dtls-failure`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
