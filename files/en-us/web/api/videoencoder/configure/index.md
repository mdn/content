---
title: VideoEncoder.configure()
slug: Web/API/VideoEncoder/configure
tags:
  - API
  - Method
  - Reference
  - configure
  - VideoEncoder
browser-compat: api.VideoEncoder.configure
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`configure()`** method of the {{domxref("VideoEncoder")}} interface enqueues a control message to configure the video encoder for encoding chunks.

## Syntax

```js
VideoEncoder.configure(config)
```

### Parameters

- `config`
  - : A dictionary object containing the following members:
    - `codec`
      - : A {{domxref("DOMString","string")}} containing a [valid codec string](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry).
    - `width`{{Optional_Inline}}
      - : An integer representing the width of each output {{domxref("EncodedVideoChunk")}} in pixels, before any ratio adjustments.
    - `height`{{Optional_Inline}}
      - : An integer representing the height of each output {{domxref("EncodedVideoChunk")}} in pixels, before any ratio adjustments.
    - `displayWidth`{{Optional_Inline}}
      - : An integer representing the intended display width of each output {{domxref("EncodedVideoChunk")}} in pixels when displayed.
    - `displayHeight`{{Optional_Inline}}
      - : An integer representing the vertical dimension of each output {{domxref("EncodedVideoChunk")}} in pixels when displayed.
    - `hardwareAcceleration`
      - : A hint that configures the hardware acceleration method of this codec. One of:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `bitrate`
      - : An integer containing the average bitrate of the encoded video in units of bits per second.
    - `framerate`
      - : An integer containing the expected frame rate in frames per second.
    - `alpha`
      - : A string indicating whether the alpha component of the `VideoFrame` inputs should be kept or discarded prior to encoding. One of:
        - `"discard"` (default)
        - `"keep"`
    - `scalabilityMode`
      - : A {{domxref("DOMString", "string")}} containing an encoding scalability mode identifier as defined in [WebRTC](https://w3c.github.io/webrtc-svc/#scalabilitymodes*).
    - `bitrateMode`
      - : A string containing a bitrate mode. One of:
        - `"constant"`
        - `"variable"` (default)
    - `latencyMode`
      - : A string containing a value that configures the latency behavior of this codec. One of:
        - `"quality"` (default)
        - `"realtime"`


### Return Value

None.

### Exceptions

- `TypeError` {{domxref("DOMException")}}
  - : Thrown if the provided `config` is invalid.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("VideoEncoder.state","state")}} is `"closed"`.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the provided `config` is valid but the user agent cannot provide a codec that can decode this profile.

## Examples

The following example creates a new {{domxref("VideoEncoder")}} and configures it with some of the available options.

```js
const init = {
  output: handleChunk,
  error: (e) => {
    console.log(e.message);
  }
};

let config = {
  codec: 'vp8',
  width: 640,
  height: 480,
  bitrate: 2_000_000, // 2 Mbps
  framerate: 30,
};

let encoder = new VideoEncoder(init);
encoder.configure(config);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

