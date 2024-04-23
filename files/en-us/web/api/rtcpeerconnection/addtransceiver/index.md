---
title: "RTCPeerConnection: addTransceiver() method"
short-title: addTransceiver()
slug: Web/API/RTCPeerConnection/addTransceiver
page-type: web-api-instance-method
browser-compat: api.RTCPeerConnection.addTransceiver
---

{{APIRef("WebRTC")}}

The **`addTransceiver()`** method of the {{domxref("RTCPeerConnection")}} interface creates a new {{domxref("RTCRtpTransceiver")}} and adds it to the set of transceivers associated with the `RTCPeerConnection`.
Each transceiver represents a bidirectional stream, with both an {{domxref("RTCRtpSender")}} and an {{domxref("RTCRtpReceiver")}} associated with it.

## Syntax

```js-nolint
addTransceiver(trackOrKind)
addTransceiver(trackOrKind, init)
```

### Parameters

- `trackOrKind`
  - : A {{domxref("MediaStreamTrack")}} to associate with the transceiver, or a string which is used as the {{domxref("MediaStreamTrack.kind", "kind")}} of the receiver's {{domxref("RTCRtpReceiver.track", "track")}}, and by extension of the {{domxref("RTCRtpReceiver")}} itself.
- `init` {{optional_inline}}
  - : An object for specifying any options when creating the new transceiver.
    Possible values are:
    - `direction` {{optional_inline}}
      - : The new transceiver's preferred directionality. This value is used to initialize the new {{domxref("RTCRtpTransceiver")}} object's {{domxref("RTCRtpTransceiver.direction")}} property.
    - `sendEncodings` {{optional_inline}}
      - : An array of encodings to allow when sending RTP media from the {{domxref("RTCRtpSender")}}.
        This is the same as the [`parameter.encodings`](/en-US/docs/Web/API/RTCRtpSender/setParameters#encodings) array passed to {{domxref("RTCRtpSender.setParameters()")}}.
    - `streams` {{optional_inline}}
      - : A list of {{domxref("MediaStream")}} objects to add to the transceiver's {{domxref("RTCRtpReceiver")}}; when the remote peer's {{domxref("RTCPeerConnection")}}'s {{domxref("RTCPeerConnection.track_event", "track")}} event occurs, these are the streams that will be specified by that event.

### Return value

The {{domxref("RTCRtpTransceiver")}} object which will be used to exchange the media data.

### Exceptions

- {{jsxref("TypeError")}}

  - : Thrown if `trackOrKind` was not either `"audio"` or `"video"`.

    If the `sendEncodings` argument is used, this error may also be thrown if there is a badly formatted `rid` member, some but not all encodings contain a `rid` member, or different encodings have the same `rid` value.

- {{jsxref("RangeError")}}

  - : Thrown if any of the `sendEncodings` encodings have a `maxFramerate` value less than 0.0, or a `scaleResolutionDownBy` value of less than 1.0.

- `InvalidStateError` {{domxref("DOMException")}}

  - : Thrown if the method is called when the associated connection is closed.

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if the `sendEncodings` argument is used, and contains a read-only parameter other than `rid`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("RTCPeerConnection.addTrack()")}} also creates transceivers
- {{domxref("RTCRtpReceiver")}} and {{domxref("RTCRtpSender")}}
