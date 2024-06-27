---
title: "RTCCodecStats: clockRate property"
short-title: clockRate
slug: Web/API/RTCCodecStats/clockRate
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_codec.clockRate
---

{{APIRef("WebRTC")}}

The **`clockRate`** property of the {{domxref("RTCCodecStats")}} dictionary is a positive number containing the media sampling rate in hertz (Hz).

## Values

A positive number indicating the media sampling rate.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `codecs.clockRate` option in parameter passed to [`RTCRtpTransceiver.setCodecPreferences()`](/en-US/docs/Web/API/RTCRtpTransceiver/setCodecPreferences#clockrate) and [`RTCRtpSender.setParameters()`](/en-US/docs/Web/API/RTCRtpSender/setParameters#clockrate).
- `codecs.clockRate` in object returned by [`RTCRtpSender.getParameters()`](/en-US/docs/Web/API/RTCRtpSender/getParameters#clockrate) and [`RTCRtpReceiver.getParameters()`](/en-US/docs/Web/API/RTCRtpReceiver/getParameters#clockrate).
