---
title: RTCRtpTransceiverInit
slug: Web/API/RTCRtpTransceiverInit
tags:
  - API
  - Dictionary
  - Interface
  - Media
  - RTCRtpTransceiver
  - RTCRtpTransceiverInit
  - Reference
  - Transceiver
  - WebRTC
browser-compat: api.RTCRtpTransceiverInit
---
{{APIRef("WebRTC")}}

The **`RTCRtpTransceiverInit`** dictionary is used when calling the WebRTC function {{domxref("RTCPeerConnection.addTransceiver()")}} to provide configuration options for the new transceiver.

## Properties

- `direction` {{optional_inline}}
  - : The new transceiver's preferred directionality. This value is used to initialize the new {{domxref("RTCRtpTransceiver")}} object's {{domxref("RTCRtpTransceiver.direction")}} property.
- `sendEncodings` {{optional_inline}}
  - : A list of encodings to allow when sending RTP media from the {{domxref("RTCRtpSender")}}. Each entry is of type {{domxref("RTCRtpEncodingParameters")}}.
- `streams` {{optional_inline}}
  - : A list of {{domxref("MediaStream")}} objects to add to the transceiver's{{domxref("RTCRtpReceiver")}}; when the remote peer's {{domxref("RTCPeerConnection")}}'s {{event("track")}} event occurs, these are the streams that will be specified by that event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("RTCPeerConnection.addTransceiver()")}}
- {{domxref("RTCRtpTransceiver")}}
- {{domxref("RTCRtpReceiver")}} and {{domxref("RTCRtpSender")}}
