---
title: RTCRtpTransceiver.stop()
slug: Web/API/RTCRtpTransceiver/stop
page-type: web-api-instance-method
tags:
  - API
  - Media
  - Method
  - RTCRtpTransceiver
  - RTP
  - Reference
  - Stopping a Transceiver
  - WebRTC
  - stop
browser-compat: api.RTCRtpTransceiver.stop
---
{{APIRef("WebRTC")}}

The **`stop()`** method in the
{{domxref("RTCRtpTransceiver")}} interface permanently stops the transceiver by
stopping both the associated {{domxref("RTCRtpSender")}} and
{{domxref("RTCRtpReceiver")}}.

> **Note:** Until recently, the {{domxref("RTCRtpTransceiver.stopped",
    "stopped")}} property was provided to return `true` if the connection is
> stopped. That property has been deprecated and will be removed at some point. Instead,
> check the value of {{domxref("RTCRtpTransceiver.currentDirection",
    "currentDirection")}}. If it's `stopped`, the transceiver has been stopped.

This method does nothing if the transceiver is already stopped.

## Syntax

```js
stop()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `RTCPeerConnection`, of which the transceiver is a member, is closed.

## Usage notes

When you call `stop()` on a transceiver, the sender immediately stops
sending media and each of its RTP streams are closed using the {{Glossary("RTCP")}}
`"BYE"` message. The receiver then stops receiving media; the receiver's
{{domxref("RTCRtpReceiver.track", "track")}} is stopped, and the transceiver's
{{domxref("RTCRtpTransceiver.direction", "direction")}} is changed to
`stopped`, and renegotiation is triggered by sending a
`negotiationneeded` event to the `RTCPeerConnection`.

The negotiation process causes {{domxref("RTCRtpTransceiver.currentDirection",
  "currentNegotiation")}} to be set to `stopped`, finally indicating that the
transceiver has been fully stopped.

> **Note:** Stopping the transceiver causes a
> {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} event to be sent to the transceiver's
> {{domxref("RTCPeerConnection")}}, so the connection can adapt to the change.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("MediaStreamTrack")}}
