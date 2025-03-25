---
title: "VideoEncoder: configure() method"
short-title: configure()
slug: Web/API/VideoEncoder/configure
page-type: web-api-instance-method
browser-compat: api.VideoEncoder.configure
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

The **`configure()`** method of the {{domxref("VideoEncoder")}} interface changes the {{domxref("VideoEncoder.state", "state")}} of the encoder to "configured" and asynchronously prepares the encoder to accept {{domxref("VideoEncoder")}}s for encoding with the specified parameters. If the encoder doesn't support the specified parameters or can't be initialized for other reasons an error will be reported via the error callback provided to the {{domxref("VideoEncoder")}} constructor.

If the {{domxref("VideoEncoder")}} has been previously configured, the new configuration will not be applied until all previous tasks have completed.

## Syntax

```js-nolint
configure(config)
```

### Parameters

- `config`
  - : A dictionary object containing the following members:
    - `codec`
      - : A string containing a [valid codec string](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry). See ["codecs" parameter](/en-US/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container) for details on codec string construction.
    - `width` {{optional_inline}}
      - : An integer representing the width of each output {{domxref("EncodedVideoChunk")}} in pixels, before any ratio adjustments.
    - `height` {{optional_inline}}
      - : An integer representing the height of each output {{domxref("EncodedVideoChunk")}} in pixels, before any ratio adjustments.
    - `displayWidth` {{optional_inline}}
      - : An integer representing the intended display width of each output {{domxref("EncodedVideoChunk")}} in pixels when displayed.
    - `displayHeight` {{optional_inline}}
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
      - : A string containing an encoding scalability mode identifier as defined in [WebRTC](https://w3c.github.io/webrtc-svc/#scalabilitymodes*).
    - `bitrateMode` {{optional_inline}}
      - : A string containing a bitrate mode. One of:
        - `"constant"`
          - : The encoder will target constant bitrate.
        - `"variable"` (default)
          - : The encoder will target a variable bitrate, allowing more space to be used for complex signals and less space for less complex signals.
        - `"quantizer"`
          - : The encoder will disregard the `bitrate` option and instead it will use codec-specific quantizer values specified for each frame in the `options` parameter to {{domxref("VideoEncoder.encode()")}}.
    - `latencyMode` {{optional_inline}}
      - : A string containing a value that configures the latency behavior of this codec. One of:
        - `"quality"` (default)
          - : The encoder should optimize for encoding quality.
        - `"realtime"`
          - : The encoder should optimize for low latency and may even drop frames to honor `framerate`.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
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
  },
};

let config = {
  codec: "vp8",
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
