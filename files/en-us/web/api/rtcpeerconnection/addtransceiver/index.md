---
title: RTCPeerConnection.addTransceiver()
slug: Web/API/RTCPeerConnection/addTransceiver
page-type: web-api-instance-method
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
addTransceiver(trackOrKind)
addTransceiver(trackOrKind, init)
```

### Parameters

- `trackOrKind`
  - : A {{domxref("MediaStreamTrack")}} to associate with the transceiver, or a
    string which is used as the {{domxref("MediaStreamTrack.kind",
    "kind")}} of the receiver's {{domxref("RTCRtpReceiver.track", "track")}}, and by
    extension of the {{domxref("RTCRtpReceiver")}} itself.
- `init` {{optional_inline}}
  - : An object for specifying any options when creating the new transceiver.
    Possible values are:
    - `direction` {{optional_inline}}
      - : The new transceiver's preferred directionality. This value is used to initialize the new {{domxref("RTCRtpTransceiver")}} object's {{domxref("RTCRtpTransceiver.direction")}} property.
    - `sendEncodings` {{optional_inline}}
      - : A list of encodings to allow when sending RTP media from the {{domxref("RTCRtpSender")}}. Each entry is of type {{domxref("RTCRtpEncodingParameters")}}.
    - `streams` {{optional_inline}}
      - : A list of {{domxref("MediaStream")}} objects to add to the transceiver's {{domxref("RTCRtpReceiver")}}; when the remote peer's {{domxref("RTCPeerConnection")}}'s {{domxref("RTCPeerConnection.track_event", "track")}} event occurs, these are the streams that will be specified by that event.

### Return value

The {{domxref("RTCRtpTransceiver")}} object which will be used to exchange the media data.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `trackOrKind` was not either `"audio"` or `"video"`.

- {{jsxref("RangeError")}}
  - : Thrown if any of the `sendEncodings` encodings have a {{domxref("RTCRtpEncodingParameters.maxFramerate", "maxFramerate")}} value less than 0.0.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("RTCPeerConnection.addTrack()")}} also creates transceivers
- {{domxref("RTCRtpReceiver")}} and {{domxref("RTCRtpSender")}}
