---
title: RTCPeerConnection.addTransceiver()
slug: Web/API/RTCPeerConnection/addTransceiver
tags:
  - API
  - Audio
  - Media
  - RTCPeerConnection
  - RTCRtpTransceiver
  - RTP
  - Reference
  - Transceivers
  - Video
  - addTransceiver
  - Method
browser-compat: api.RTCPeerConnection.addTransceiver
---
{{APIRef("WebRTC")}}

The {{domxref("RTCPeerConnection")}} method
**`addTransceiver()`** creates a new
{{domxref("RTCRtpTransceiver")}} and adds it to the set of transceivers associated
with the `RTCPeerConnection`. Each transceiver represents a
bidirectional stream, with both an {{domxref("RTCRtpSender")}} and an
{{domxref("RTCRtpReceiver")}} associated with it.

## Syntax

```js
rtpTransceiver = RTCPeerConnection.addTransceiver(trackOrKind, init);
```

### Parameters

- `trackOrKind`
  - : A {{domxref("MediaStreamTrack")}} to associate with the transceiver, or a
    {{domxref("DOMString")}} which is used as the {{domxref("MediaStreamTrack.kind",
    "kind")}} of the receiver's {{domxref("RTCRtpReceiver.track", "track")}}, and by
    extension of the {{domxref("RTCRtpReceiver")}} itself.
- `init` {{optional_inline}}
  - : An object that conforms to the {{domxref("RTCRtpTransceiverInit")}} dictionary which
    provides any options that you may wish to specify when creating the new transceiver.
    Possible values are:
    {{page("/en-US/docs/Web/API/RTCRtpTransceiverInit", "Properties")}}

### Exceptions

- `TypeError`
  - : A string was specified as `trackOrKind` which is not valid. The string
    must be either `"audio"` or `"video"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to the Real-time
  Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("RTCPeerConnection.addTrack()")}} also creates transceivers
- {{domxref("RTCRtpReceiver")}} and {{domxref("RTCRtpSender")}}
