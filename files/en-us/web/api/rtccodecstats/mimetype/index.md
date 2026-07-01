---
title: "RTCCodecStats: mimeType property"
short-title: mimeType
slug: Web/API/RTCCodecStats/mimeType
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_codec.mimeType
---

{{APIRef("WebRTC")}}

The **`mimeType`** property of the {{domxref("RTCCodecStats")}} dictionary is a string containing the codec's {{glossary("MIME type")}} and subtype.

This is of the form `"type/subtype"`, such as "video/VP8" or "audio/opus", as defined in the [IANA registry of valid MIME types](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).

## Values

A string indicating the code MIME type/subtype.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `codecs.mimeType` option in parameter passed to [`RTCRtpTransceiver.setCodecPreferences()`](/en-US/docs/Web/API/RTCRtpTransceiver/setCodecPreferences#mimetype) and [`RTCRtpSender.setParameters()`](/en-US/docs/Web/API/RTCRtpSender/setParameters#mimetype).
- `codecs.mimeType` in object returned by [`RTCRtpSender.getParameters()`](/en-US/docs/Web/API/RTCRtpSender/getParameters#mimetype) and [`RTCRtpReceiver.getParameters()`](/en-US/docs/Web/API/RTCRtpReceiver/getParameters#mimetype).
