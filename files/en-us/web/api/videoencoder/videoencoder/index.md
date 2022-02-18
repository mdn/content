---
title: VideoEncoder.VideoEncoder()
slug: Web/API/VideoEncoder/VideoEncoder
tags:
  - API
  - Constructor
  - Reference
  - VideoEncoder
browser-compat: api.VideoEncoder.VideoEncoder
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`VideoEncoder()`** constructor creates a new {{domxref("VideoEncoder")}} object with the provided `init.output` callback assigned as the output callback, the provided `init.error` callback as the error callback, and the {{domxref("VideoEncoder.state")}} set to `"unconfigured"`.

## Syntax

```js
new VideoEncoder(init);
```

### Parameters

- `init`
  - : An object containing two required callbacks.
    - `output`
      - : A callback which takes an {{domxref("EncodedVideoChunk")}} object as the first argument, and an optional metadata object as the second. The metadata object has three members:
        - `decoderconfig` {{Optional_Inline}}
          - : An object containing:
            - `codec`
              - : A {{domxref("DOMString","string")}} containing a [valid codec string](https://www.w3.org/TR/webcodecs-codec-registry/#video-codec-registry).
            - `description` {{Optional_Inline}}
              - : A {{domxref("BufferSource")}} containing a sequence of codec-specific bytes, commonly known as “extradata”.
            - `codedWidth` {{Optional_Inline}}
              - : An integer representing the width of the {{domxref("VideoFrame")}} in pixels, potentially including non-visible padding, and prior to considering potential ratio adjustments.
            - `codedHeight` {{Optional_Inline}}
              - : An integer representing the height of the {{domxref("VideoFrame")}} in pixels, potentially including non-visible padding, and prior to considering potential ratio adjustments.
            - `displayAspectWidth` {{Optional_Inline}}
              - : An integer representing the horizontal dimension of the {{domxref("VideoFrame")}}’s aspect ratio when displayed.
            - `displayAspectHeight` {{Optional_Inline}}
              - : An integer representing the vertical dimension of the {{domxref("VideoFrame")}}’s aspect ratio when displayed.
            - `colorSpace` {{Optional_Inline}}
              - : An object you pass to the {{domxref("VideoColorSpace")}} constructor as the `init` argument, configuring the {{domxref("VideoFrame.colorSpace")}} for {{domxref("VideoFrame","VideoFrames")}} associated with this `decoderconfig` object. If `colorSpace` exists, the provided values will override any in-band values from the bitstream.
            - `hardwareAcceleration` {{Optional_Inline}}
              - : A string that configures hardware acceleration for this codec. Defaults to `"no-preference"`. Options are:
                - `"no-preference"`
                - `"prefer-hardware"`
                - `"prefer-software"`
            - `optimizeForLatency` {{Optional_Inline}}
              - : A boolean representing whether the selected decoder should be configured to minimize the number of {{domxref("EncodedVideoChunk","EncodedVideoChunks")}} that have to be decoded before a {{domxref("VideoFrame")}} is output.
        - `svc` {{Optional_Inline}}
          - : An optional object with only one member: `temporalLayerId`, which is a number that identifies the [temporal layer](https://w3c.github.io/webcodecs/#temporal-layer) for the associated {{domxref("EncodedVideoChunk")}}.
        - `alphaSideData` {{Optional_Inline}}
          - : A {{domxref("BufferSource")}} that contains the {{domxref("EncodedVideoChunk")}}'s extra alpha channel data.
    - `error`
      - : A callback which takes an {{jsxref("Error")}} object as its only argument.

## Examples

In the following example a `VideoEncoder` is created with the two required callback functions, one to deal with the encoded frame and the other to handle errors.

```js
const videoEncoder = new VideoEncoder({
  output: processVideo,
  error: onEncoderError,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
