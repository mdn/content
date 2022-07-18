---
title: RTCRtpCodecParameters
slug: Web/API/RTCRtpCodecParameters
page-type: web-api-interface
tags:
  - API
  - Codec Configuration
  - Codec Parameters
  - Codec Preferences
  - Dictionary
  - Interface
  - Media
  - RTCRtpCodecParameters
  - RTCRtpReceiver
  - RTCRtpSender
  - RTCRtpTransceiver
  - RTP
  - Reference
  - SDP
  - WebRTC
  - setCodecPreferences
---
{{APIRef("WebRTC")}}

The {{domxref("RTCRtpCodecParameters")}} dictionary, part of the WebRTC API, is used to describe the configuration parameters for a single media {{Glossary("codec")}}.

In addition to being the type of the {{domxref("RTCRtpParameters.codecs")}} property, it's used when calling {{domxref("RTCRtpTransceiver.setCodecPreferences()")}} to configure a transceiver's codecs before beginning the offer/answer process to establish a WebRTC peer connection.

Most of the fields in this property take values which are defined and maintained by the Internet Assigned Numbers Authority (IANA). References to relevant IANA documents are provided in the [see also](#see_also) section at the end of this article.

## Properties

- {{domxref("RTCRtpCodecParameters.payloadType", "payloadType")}} {{optional_inline}}
  - : The [RTP payload type](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1) used to identify this codec.
- {{domxref("RTCRtpCodecParameters.mimeType", "mimeType")}} {{optional_inline}}
  - : The codec's MIME media type and subtype specified as a string of the form `"type/subtype"`. IANA maintains a [registry of valid MIME types](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
- {{domxref("RTCRtpCodecParameters.clockRate", "clockRate")}} {{optional_inline}}
  - : An unsigned long integer value specifying the codec's clock rate in hertz (Hz). The clock rate is the rate at which the codec's RTP timestamp advances. Most codecs have specific values or ranges of values they permit; see the [IANA payload format media type registry](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2) for details.
- {{domxref("RTCRtpCodecParameters.channels", "channels")}} {{optional_inline}}
  - : An unsigned short integer indicating the number of channels the codec should support. For example, for audio codecs, a value of 1 specifies monaural sound while 2 indicates stereo.
- {{domxref("RTCRtpCodecParameters.sdpFmtpLine", "sdpFmtpLine")}} {{optional_inline}}
  - : A string containing the format-specific parameters field from the `"a=fmtp"` line in the codec's {{Glossary("SDP")}}, if one is present; see [section 5.8 of the IETF specification for JSEP](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-jsep-24#section-5.8).

    > **Note:** On an {{domxref("RTCRtpReceiver")}}, the format-specific parameters come from the SDP sent by the remote peer, while for {{domxref("RTCRtpSender")}}, they're provided by the local description.

## See also

- [Real-Time Transport Protocol (RTP) Parameters](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml)
  - : The IANA document providing registries of permitted values for the RTP parameters used by this dictionary.
