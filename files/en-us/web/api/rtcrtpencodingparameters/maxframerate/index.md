---
title: RTCRtpEncodingParameters.maxFramerate
slug: Web/API/RTCRtpEncodingParameters/maxFramerate
page-type: web-api-instance-property
tags:
  - API
  - BPS
  - Bandwidth
  - Bit Rate
  - Codec
  - Encoding
  - Property
  - RTCRtpEncodingParameters
  - Reference
  - Settings
  - WebRTC
  - WebRTC API
  - maxFramerate
  - parameters
browser-compat: api.RTCRtpEncodingParameters.maxFramerate
---
{{APIRef("WebRTC")}}

The **`maxFramerate`** property of the {{domxref("RTCRtpEncodingParameters")}} dictionary specifies the maximum framerate that can be used to send the encoding, in frames per second.

The user agent is free to allocate bandwidth between the encodings, as long as the `maxFramerate` value is not exceeded.

The frame rate is a positive real number ({{domxref("RTCPeerConnection.addTransceiver()")}} and {{domxref("RTCRtpSender.setParameters()")}} will throw a {{jsxref("RangeError")}} exception if the value is less than 0.0).
Setting the maximum frame rate to zero using {{domxref("RTCRtpSender.setParameters()")}} has the effect of freezing the video on the next frame.

## Value

A positive real number indicating the maximum frame rate for the specified encoding, in frames per second.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpEncodingParameters.maxBitrate")}}
