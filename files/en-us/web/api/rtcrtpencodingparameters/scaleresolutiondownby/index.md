---
title: "RTCRtpEncodingParameters: scaleResolutionDownBy property"
short-title: scaleResolutionDownBy
slug: Web/API/RTCRtpEncodingParameters/scaleResolutionDownBy
page-type: web-api-instance-property
browser-compat: api.RTCRtpEncodingParameters.scaleResolutionDownBy
---

{{APIRef("WebRTC")}}

The {{domxref("RTCRtpEncodingParameters")}} dictionary's
**`scaleResolutionDownBy`** property can be used to specify a
factor by which to reduce the size of a video track during encoding.

This property is only available for tracks whose {{domxref("MediaStreamTrack.kind",
  "kind")}} is `video`.

## Syntax

```js-nolint
rtpEncodingParameters.scaleResolutionDownBy = scalingFactor

rtpEncodingParameters = {
  scaleResolutionDownBy: scalingFactor
}
```

### Value

A double-precision floating-point number specifying the amount by which to reduce the
size of the video during encoding. The default value, 1.0, means that the video will be
encoded at its original size. A value of 2.0 would reduce the size of the video by a
factor of 2 both horizontally and vertically, resulting in a video 25% the original
size.

A value less than 1.0 would cause the video to get larger rather than smaller, which is
not the intent of this property. Therefore, specifying a value less than 1.0 is not
permitted and will cause a {{jsxref("RangeError")}} exception to be thrown by
{{domxref("RTCPeerConnection.addTransceiver()")}} or
{{domxref("RTCRtpSender.setParameters()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
