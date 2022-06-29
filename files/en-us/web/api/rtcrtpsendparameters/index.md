---
title: RTCRtpSendParameters
slug: Web/API/RTCRtpSendParameters
page-type: web-api-interface
tags:
  - API
  - Audio
  - Codec
  - Dictionary
  - Encoding
  - Media
  - RTCRtpSendParameters
  - RTCRtpSender
  - RTP
  - Reference
  - Settings
  - Video
  - WebRTC
  - WebRTC API
  - parameters
  - sender
browser-compat: api.RTCRtpSendParameters
---
{{APIRef("WebRTC")}}

The WebRTC API's **`RTCRtpSendParameters`** dictionary is used to specify the parameters for an {{domxref("RTCRtpSender")}} when calling its {{domxref("RTCRtpSender.setParameters", "setParameters()")}} method.

## Properties

_In addition to the properties below, `RTCRtpSendParameters` inherits the properties from the {{domxref("RTCRtpParameters")}} interface._

- {{domxref("RTCRtpSendParameters.encodings", "encodings")}}
  - : An array of {{domxref("RTCRtpEncodingParameters")}} objects, each specifying the parameters for a single codec that could be used to encode the track's media.
- {{domxref("RTCRtpSendParameters.transactionId", "transactionId")}}
  - : A string containing a unique ID for the last set of parameters applied; this value is used to ensure that {{domxref("RTCRtpSender.setParameters", "setParameters()")}} can only be called to alter changes made by a specific previous call to {{domxref("RTCRtpSender.getParameters", "getParameters()")}}. Once this parameter is initially set, it cannot be changed.

### Obsolete properties

- {{domxref("RTCRtpSendParameters.degradationPreference", "degradationPreference")}} {{deprecated_inline}}
  - : Specifies the preferred way the WebRTC layer should handle optimizing bandwidth against quality in constrained-bandwidth situations; the possible values are `maintain-framerate`, `maintain-resolution`, or `balanced`. The default value is `balanced`.
- {{domxref("RTCRtpSendParameters,priority", "priority")}} {{deprecated_inline}}
  - : A string that indicates the encoding's priority.  It is one of: `very-low`, `low`, `medium`, or `high`. The default value is `low`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpReceiveParameters")}} and {{domxref("RTCRtpReceiver.getParameters()")}}
