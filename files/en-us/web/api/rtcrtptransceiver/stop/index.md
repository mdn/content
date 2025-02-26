---
title: "RTCRtpTransceiver: stop() method"
short-title: stop()
slug: Web/API/RTCRtpTransceiver/stop
page-type: web-api-instance-method
browser-compat: api.RTCRtpTransceiver.stop
---

{{APIRef("WebRTC")}}

The **`stop()`** method in the {{domxref("RTCRtpTransceiver")}} interface permanently stops the transceiver by stopping both the associated {{domxref("RTCRtpSender")}} and
{{domxref("RTCRtpReceiver")}}.

## Syntax

```js-nolint
stop()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `RTCPeerConnection`, of which the transceiver is a member, is closed.

## Description

When you call `stop()` on a transceiver, the sender immediately stops sending media and each of its RTP streams are closed using the {{Glossary("RTCP")}} `"BYE"` message.
The receiver then stops receiving media; the receiver's {{domxref("RTCRtpReceiver.track", "track")}} is stopped, and the transceiver's {{domxref("RTCRtpTransceiver.direction", "direction")}} is changed to `stopped`.
Renegotiation is triggered by sending a {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} event to the transceiver's {{domxref("RTCPeerConnection")}}, so that the connection can adapt to the change.

The method does nothing if the transceiver is already stopped.
You can check whether it has stopped by comparing {{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} to `"stopped"`.

> [!NOTE]
> Earlier versions of the specification used the deprecated {{domxref("RTCRtpTransceiver.stopped", "stopped")}} {{deprecated_inline}} property to indicate if the transceiver has stopped.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("MediaStreamTrack")}}
