---
title: "RTCCodecStats: payloadType property"
short-title: payloadType
slug: Web/API/RTCCodecStats/payloadType
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_codec.payloadType
---

{{APIRef("WebRTC")}}

The **`payloadType`** property of the {{domxref("RTCCodecStats")}} dictionary is a positive integer in the range from 0 to 127 that describes the format of the {{glossary("RTP")}} payload used in RTP encoding or decoding.

## Value

A positive integer between 0 and 127.

The mappings of values to formats is defined in RFC3550, and more specifically in [Section 6: Payload Type Definitions](https://www.rfc-editor.org/rfc/rfc3551#section-6) of RFC3551.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`RTCRtpCodecParameters.payloadType`](/en-US/docs/Web/API/RTCRtpCodecParameters#payloadtype)
- `payloadType` returned by [`RTCEncodedAudioFrame.getMetadata()`](/en-US/docs/Web/API/RTCEncodedAudioFrame/getMetadata#payloadtype)
- `payloadType` returned by [`RTCEncodedVideoFrame.getMetadata()`](/en-US/docs/Web/API/RTCEncodedVideoFrame/getMetadata#payloadtype)
