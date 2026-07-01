---
title: "RTCCodecStats: channels property"
short-title: channels
slug: Web/API/RTCCodecStats/channels
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_codec.channels
---

{{APIRef("WebRTC")}}

The **`channels`** property of the {{domxref("RTCCodecStats")}} dictionary is a positive number containing the number of channels supported by the codec.

For audio codecs, a value of 1 specifies monaural sound while 2 indicates stereo.

## Values

A positive number indicating the number of channels.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `codecs.channels` option in parameter passed to [`RTCRtpTransceiver.setCodecPreferences()`](/en-US/docs/Web/API/RTCRtpTransceiver/setCodecPreferences#channels) and [`RTCRtpSender.setParameters()`](/en-US/docs/Web/API/RTCRtpSender/setParameters#channels).
- `codecs.channels` in object returned by [`RTCRtpSender.getParameters()`](/en-US/docs/Web/API/RTCRtpSender/getParameters#channels) and [`RTCRtpReceiver.getParameters()`](/en-US/docs/Web/API/RTCRtpReceiver/getParameters#channels).
