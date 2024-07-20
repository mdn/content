---
title: "RTCCodecStats: sdpFmtpLine property"
short-title: sdpFmtpLine
slug: Web/API/RTCCodecStats/sdpFmtpLine
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_codec.sdpFmtpLine
---

{{APIRef("WebRTC")}}

The **`sdpFmtpLine`** property of the {{domxref("RTCCodecStats")}} dictionary is a string containing the format-specific parameters of the codec.

These are the values in the `"a=fmtp"` line in the codec's {{Glossary("SDP")}} (if present) after the payload type number (see [section 5.8 of the IETF specification for JSEP](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-jsep-24#section-5.8)).

## Values

A string containing the format-specific parameters of the codec.

## Description

The `"a=fmtp"` line in the codec's {{Glossary("SDP")}} line has the following format, where the payload type (see {{domxref("RTCCodecStats.payloadType")}}) and parameters depend on the codec:

```plain
a=fmtp:<payload_type_number> param1=value1; ...; paramN=valueN
```

For example, the following line would indicate that the "opus" codec, which has a `payloadType` 99, has the format-specific parameters `maxplaybackrate` and `stereo`:

```plain
a=fmtp:99 maxplaybackrate=16000; stereo=1;
```

For this codec, the value in `sdpFmtpLine` would be `maxplaybackrate=16000; stereo=1;`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `codecs.sdpFmtpLine` option in parameter passed to [`RTCRtpTransceiver.setCodecPreferences()`](/en-US/docs/Web/API/RTCRtpTransceiver/setCodecPreferences#sdpfmtpline) and [`RTCRtpSender.setParameters()`](/en-US/docs/Web/API/RTCRtpSender/setParameters#sdpfmtpline).
- `codecs.sdpFmtpLine` in object returned by [`RTCRtpSender.getParameters()`](/en-US/docs/Web/API/RTCRtpSender/getParameters#sdpfmtpline) and [`RTCRtpReceiver.getParameters()`](/en-US/docs/Web/API/RTCRtpReceiver/getParameters#sdpfmtpline).
