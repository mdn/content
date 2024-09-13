---
title: "VideoEncoder: VideoEncoder() constructor"
short-title: VideoEncoder()
slug: Web/API/VideoEncoder/VideoEncoder
page-type: web-api-constructor
browser-compat: api.VideoEncoder.VideoEncoder
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

The **`VideoEncoder()`** constructor creates a new {{domxref("VideoEncoder")}} object with the provided `options.output` callback assigned as the output callback, the provided `options.error` callback as the error callback, and sets the {{domxref("VideoEncoder.state")}} to `"unconfigured"`.

## Syntax

```js-nolint
new VideoEncoder(options)
```

### Parameters

- `options`
  - : An object containing two required callbacks.
    - `output`
      - : A callback which takes an {{domxref("EncodedVideoChunk")}} object as the first argument, and an optional metadata object as the second. The metadata object has three members:
        - `decoderConfig` {{Optional_Inline}}
          - : An object containing:
            - `codec`
              - : A string containing a [valid codec string](https://www.w3.org/TR/webcodecs-codec-registry/#video-codec-registry).
            - `description` {{Optional_Inline}}
              - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} containing a sequence of codec-specific bytes, commonly known as "extradata".
            - `codedWidth` {{Optional_Inline}}
              - : An integer representing the width of the {{domxref("VideoFrame")}} in pixels, potentially including non-visible padding, and prior to considering potential ratio adjustments.
            - `codedHeight` {{Optional_Inline}}
              - : An integer representing the height of the {{domxref("VideoFrame")}} in pixels, potentially including non-visible padding, and prior to considering potential ratio adjustments.
            - `displayAspectWidth` {{Optional_Inline}}
              - : An integer representing the horizontal dimension of the {{domxref("VideoFrame")}}'s {{glossary("aspect ratio")}} when displayed.
            - `displayAspectHeight` {{Optional_Inline}}
              - : An integer representing the vertical dimension of the {{domxref("VideoFrame")}}'s aspect ratio when displayed.
            - `colorSpace` {{Optional_Inline}}
              - : An object you pass to the {{domxref("VideoColorSpace")}} constructor as the `init` argument, configuring the {{domxref("VideoFrame.colorSpace")}} for {{domxref("VideoFrame","VideoFrames")}} associated with this `decoderConfig` object. If `colorSpace` exists, the provided values will override any in-band values from the bitstream.
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
          - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}}
            that contains the {{domxref("EncodedVideoChunk")}}'s extra alpha channel data.
    - `error`
      - : A callback which takes an {{jsxref("Error")}} object as its only argument.

## Examples

In the following example a `VideoEncoder` is created with the two required callback functions, one to deal with the encoded frame and the other to handle errors.

```js
const videoEncoder = new VideoEncoder({
  output(chunk, metadata) {
    console.log(chunk.timestamp);
    console.log(chunk.byteLength);
    console.log(JSON.stringify(metadata));
  },
  error(error) {
    console.log(error);
  },
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
