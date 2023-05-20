---
title: RTCRtpEncodingParameters
slug: Web/API/RTCRtpEncodingParameters
page-type: web-api-interface
browser-compat: api.RTCRtpEncodingParameters
---

{{APIRef("WebRTC")}}

An instance of the [WebRTC](/en-US/docs/Web/API/WebRTC_API) API's **`RTCRtpEncodingParameters`** dictionary describes a single configuration of a {{Glossary("codec")}} for an {{domxref("RTCRtpSender")}}.

This dictionary is used to describe the configuration of an RTP sender's `encodings` when calling {{domxref("RTCRtpSender.getParameters()")}} or {{domxref("RTCRtpSender.setParameters()")}}.

## Instance properties

- {{domxref("RTCRtpEncodingParameters.active", "active")}}
  - : If `true`, the described encoding is currently actively being used. That is, for RTP senders, the encoding is currently being used to send data, while for receivers, the encoding is being used to decode received data. The default value is `true`.
- {{domxref("RTCRtpEncodingParameters.dtx", "dtx")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Only used for an {{domxref("RTCRtpSender")}} whose {{domxref("MediaStreamTrack.kind", "kind")}} is `audio`, this property indicates whether or not to use discontinuous transmission (a feature by which a phone is turned off or the microphone muted automatically in the absence of voice activity). The value is taken either `enabled` or `disabled`.
- {{domxref("RTCRtpEncodingParameters.maxBitrate", "maxBitrate")}}
  - : An unsigned long integer indicating the maximum number of bits per second to allow for this encoding. Other parameters may further constrain the bit rate, such as the value of `maxFramerate` or transport or physical network limitations.
- {{domxref("RTCRtpEncodingParameters.maxFramerate", "maxFramerate")}}
  - : A value specifying the maximum number of frames per second to allow for this encoding.
- `priority`
  - : A string indicating the priority of the {{domxref("RTCRtpSender")}}, which may determine how the user agent allocates bandwidth between senders.
    Allowed values are `very-low`, `low` (default), `medium`, `high`.
- {{domxref("RTCRtpEncodingParameters.rid", "rid")}}
  - : A string which, if set, specifies an _RTP stream ID_ (_RID_) to be sent using the RID header extension. This parameter cannot be modified using {{domxref("RTCRtpSender.setParameters", "setParameters()")}}. Its value can only be set when the transceiver is first created.
- {{domxref("RTCRtpEncodingParameters.scaleResolutionDownBy", "scaleResolutionDownBy")}}
  - : Only used for senders whose track's {{domxref("MediaStreamTrack.kind", "kind")}} is `video`, this is a double-precision floating-point value specifying a factor by which to scale down the video during encoding. The default value, 1.0, means that the sent video's size will be the same as the original. A value of 2.0 scales the video frames down by a factor of 2 in each dimension, resulting in a video 1/4 the size of the original. The value must not be less than 1.0 (you can't use this to scale the video up).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpDecodingParameters")}} is used to describe the configuration of an RTP receiver's encodings.
- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("RTCRtpSender")}}, {{domxref("RTCRtpReceiver")}}, and {{domxref("RTCRtpTransceiver")}}
