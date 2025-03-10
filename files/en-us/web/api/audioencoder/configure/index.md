---
title: "AudioEncoder: configure() method"
short-title: configure()
slug: Web/API/AudioEncoder/configure
page-type: web-api-instance-method
browser-compat: api.AudioEncoder.configure
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`configure()`** method of the {{domxref("AudioEncoder")}} interface enqueues a control message to configure the audio encoder for encoding chunks.

## Syntax

```js-nolint
configure(config)
```

### Parameters

- `config`

  - : A dictionary object containing the following members:

    - `codec`
      - : A string containing a [valid codec string](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry). See ["codecs" parameter](/en-US/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container) for details on codec string construction.
    - `sampleRate`
      - : An integer representing the number of frame samples per second.
    - `numberOfChannels`
      - : An integer representing the number of audio channels.
    - `bitrate` {{optional_inline}}
      - : An integer representing the bitrate.
    - `bitrateMode` {{optional_inline}}

      - : An enumerated value that defines the bitrate mode the encoder should use. Possible values are:

        - `"constant"`
          - : Forces an audio encoder to maintain the same bitrate, regardless of the audio content. This can be useful when a predictable bandwidth consumption is preferable.
        - `"variable"` (default)

          - : Allows an audio encoder to increase or lower its bitrate according to the content of the audio it is encoding, in order to preserve bandwidth/binary-size, while still maintaining a target quality. For example, an encoder might lower its bitrate when encoding silence, and revert to a full bitrate when encoding speech.

        Specific codec encoder implementations may use slightly different terminology (for example, CBR vs VBR for Opus), but they should all map to the general concept of "constant" versus "variable" bitrate.

    - `opus` {{optional_inline}}
      - : Specifies codec configuration options specific to the Opus codec. Its value is an `OpusEncoderConfig` object, the possible properties of which are as follows:
        - `application` {{optional_inline}}
          - : An enumerated value that specifies the encoder's intended application type. Possible values are:
            - `audio` (default)
              - : Process the signal faithfully to the original input.
            - `lowdelay`
              - : When processing the signal, configure the minimum possible encoding delay by disabling certain modes of operation.
            - `voip`
              - : Process signal for improved speech intelligibility.
        - `complexity` {{optional_inline}}
          - : A number that defines the encoder's computational complexity, based on the aspects described in section [RFC6716, 2.1.5. — Complexity](https://www.rfc-editor.org/rfc/rfc6716#section-2.1.5). The valid range is 0 to 10, with 10 representing the highest complexity. If no value is specified, the default value is platform-specific, with the specification recommending 5 for mobile platforms, and 9 for all other platforms.
        - `format` {{optional_inline}}
          - : An enumerated value that specifies the format in which the encoder should output {{domxref("EncodedAudioChunk")}}s. Possible values are:
            - `opus` (default)
              - : Output `EncodedAudioChunk`s in Opus format. In this case, no metadata are necessary to decode the encoded audio stream.
            - `ogg`
              - : Output `EncodedAudioChunk`s in Ogg format. In this case, no metadata are necessary to decode the encoded audio stream. In this case, the metadata of the encoded audio stream are provided in the decoder configuration — via the [`description`](/en-US/docs/Web/API/AudioDecoder/configure#description) property of the config object passed into {{domxref("AudioDecoder.configure()")}}.
        - `frameDuration` {{optional_inline}}
          - : A number that defines the frame duration, in microseconds, of `EncodedAudioChunk`s outputted by the encoder. If not specified, `frameDuration` defaults to `20000`.
        - `packetlossperc` {{optional_inline}}
          - : A number that defines the encoder's expected packet loss percentage. The valid range is 0 to 100. If not specified, `packetlossperc` defaults to `0`.
        - `signal` {{optional_inline}}
          - : An enumerated value that specifies the default value for the type of audio signal being encoded. Possible values are:
            - `auto` (default)
              - : The audio signal is not specified to be of a particular type.
            - `music`
              - : The audio signal is music.
            - `voice`
              - : The audio signal is voice or speech.
        - `usedtx` {{optional_inline}}
          - : A boolean value that specifies whether the encoder uses Discontinuous Transmission (DTX), which reduces the bitrate during silence or background noise. When DTX is enabled, only one frame is encoded every 400 milliseconds. If not specified, `usedtx` defaults to `false`.
        - `useinbandfec` {{optional_inline}}
          - : A boolean value that specifies whether the encoder provides Opus in-band Forward Error Correction (FEC). This results in packets that are determined to contain perceptually important speech information — such as onsets or transients — to be re-encoded at a lower bitrate and added to a subsequent packet. If not specified, `useinbandfec` defaults to `false`.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the provided `config` is invalid.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("AudioEncoder.state","state")}} is `"closed"`.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the provided `config` is valid but the user agent cannot provide a codec that can decode this profile.

## Examples

### Basic configuration example

The following example creates a new {{domxref("AudioEncoder")}} and configures it with some of the available options.

```js
const init = {
  output: handleOutput,
  error: (e) => {
    console.log(e.message);
  },
};

let config = {
  codec: "mp3",
  sampleRate: 44100,
  numberOfChannels: 2,
  bitrate: 128_000, // 128 kbps
  bitrateMode: "constant",
};

let encoder = new AudioEncoder(init);
encoder.configure(config);
```

### Opus-specific configuration example

The following example creates a new {{domxref("AudioEncoder")}} and configures it with Opus-specific options.

```js
const init = {
  output: handleOutput,
  error: (e) => {
    console.log(e.message);
  },
};

let opusConfig = {
  application: "voip",
  complexity: 9,
  signal: "voice",
  usedtx: true,
};

let config = {
  codec: "opus",
  sampleRate: 44100,
  numberOfChannels: 2,
  bitrate: 128_000,
  opus: opusConfig,
};

let encoder = new AudioEncoder(init);
encoder.configure(config);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
