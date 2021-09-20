---
title: RTCRtpTransceiver.currentDirection
slug: Web/API/RTCRtpTransceiver/currentDirection
tags:
  - API
  - Media
  - Property
  - RTCRtpTransceiver
  - RTP
  - Read-only
  - Reference
  - Transceiver
  - WebRTC
  - currentDirection
browser-compat: api.RTCRtpTransceiver.currentDirection
---
{{APIRef("WebRTC")}}

The read-only {{domxref("RTCRtpTransceiver")}} property
**`currentDirection`** is a string which indicates the current
directionality of the transceiver.

Its value is one of the strings defined by
the {{domxref("RTCRtpTransceiverDirection")}} enumeration.

You can examine and set the transceiver's preferred directionality using
{{domxref("RTCRtpTransceiver.direction", "direction")}} property.

## Syntax

```js
var direction = RTCRtpTransceiver.currentDirection
```

### Value

A {{domxref("DOMString")}} whose value is one of the strings which are a member of the
`RTCRtpTransceiverDirection` enumerated type.
{{page("/en-US/docs/Web/API/RTCRtpTransceiverDirection", "Values")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpTransceiver.direction")}}
