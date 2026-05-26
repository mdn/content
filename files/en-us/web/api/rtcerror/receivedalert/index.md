---
title: "RTCError: receivedAlert property"
short-title: receivedAlert
slug: Web/API/RTCError/receivedAlert
page-type: web-api-instance-property
browser-compat: api.RTCError.receivedAlert
---

{{APIRef("WebRTC")}}

The **`receivedAlert`** read-only property of the {{domxref("RTCError")}} interface specifies the fatal {{Glossary("DTLS")}} error which resulted in an alert being received from the remote peer.

## Value

A positive integer value.

> [!NOTE]
> This property is `null` if the `RTCError` doesn't represent a DTLS error.
> DTLS errors are indicated by the {{domxref("RTCError.errorDetail", "errorDetail")}} property being set to `dtls-failure`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
