---
title: RTCRtpCodecCapability
slug: Web/API/RTCRtpCodecCapability
page-type: web-api-interface
tags:
  - API
  - Capability
  - Codecs
  - Dictionary
  - Media
  - Negotiation
  - RTCRtpCodecCapability
  - RTP
  - Reference
  - WebRTC
  - WebRTC API
  - WebRTC Device API
browser-compat: api.RTCRtpCodecCapability
---
{{DefaultAPISidebar("WebRTC")}}

The [WebRTC API's](/en-US/docs/Web/API/WebRTC_API) **`RTCRtpCodecCapability`** dictionary provides information describing the capabilities of a single [media codec](/en-US/docs/Web/Media/Formats/WebRTC_codecs).

## Properties

- {{domxref("RTCRtpCodecCapability.channels", "channels")}} {{optional_inline}}
  - : An unsigned integer value indicating the maximum number of channels supported by the codec; for example, a codec that supports only mono sound would have a value of 1; stereo codecs would have a 2, etc.
- {{domxref("RTCRtpCodecCapability.clockRate", "clockRate")}}
  - : An unsigned long integer specifying the codec's clock rate in Hertz (Hz). The IANA maintains a [list of codecs and their parameters](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), including their clock rates.
- {{domxref("RTCRtpCodecCapability.mimeType", "mimeType")}}
  - : A string indicating the codec's MIME media type and subtype. See [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs) for details about potential codecs that might be referenced here.
- {{domxref("RTCRtpCodecCapability.sdpFmtpLine", "sdpFmtpLine")}} {{optional_inline}}
  - : A string giving the format specific parameters field from the `a=fmtp` line in the SDP which corresponds to the codec, if such a line exists. If there is no parameters field, this property is left out.

## Description

`RTCRtpCodecCapabilities` describes the basic parameters for a single codec supported by the user's device. An array of objects of this type is returned in the {{domxref("RTCRtpCapabilities.codecs", "codecs")}} property of the {{domxref("RTCRtpCapabilities")}} object returned in response to a call to either of the static functions {{domxref("RTCRtpSender.getCapabilities()")}} or {{domxref("RTCRtpReceiver.getCapabilities()")}}.

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
