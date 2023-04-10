---
title: "AudioContext: AudioContext() constructor"
short-title: AudioContext()
slug: Web/API/AudioContext/AudioContext
page-type: web-api-constructor
browser-compat: api.AudioContext.AudioContext
---

{{APIRef("Web Audio API")}}

The **`AudioContext()`** constructor
creates a new {{domxref("AudioContext")}} object which represents an audio-processing
graph, built from audio modules linked together, each represented by an
{{domxref("AudioNode")}}.

## Syntax

```js-nolint
new AudioContext()
new AudioContext(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object used to configure the context. The available properties are:
    - `latencyHint` {{optional_inline}}
      - : The type of playback that the context will be used for, as a predefined string (`"balanced"`, `"interactive"` or `"playback"`)
        or a double-precision floating-point value indicating the preferred maximum latency of the context in seconds.
        The user agent may or may not choose to meet this request;
        check the value of {{domxref("AudioContext.baseLatency")}} to determine the true latency after creating the context.
        - `"balanced"`: The browser balances audio output latency and power consumption when selecting a latency value.
        - `"interactive"` (default value): The audio is involved in interactive elements,
          such as responding to user actions or needing to coincide with visual cues such as a video or game action.
          The browser selects the lowest possible latency that doesn't cause glitches in the audio. This is likely to require increased power consumption.
        - `"playback"`: The browser selects a latency that will maximize playback time by minimizing power consumption at the expense of latency.
          Useful for non-interactive playback, such as playing music.
    - `sampleRate` {{optional_inline}}
      - : Indicates the sample rate to use for the new context. The value must be a floating-point value indicating the sample rate,
        in samples per second, for which to configure the new context;
        additionally, the value must be one which is supported by {{domxref("AudioBuffer.sampleRate")}}.
        The value will typically be between 8,000 Hz and 96,000 Hz; the default will vary depending on the output device, but the sample rate 44,100 Hz is the most common.
        If the `sampleRate` property is not included in the options, or the options are not specified when creating the audio context,
        the new context's output device's preferred sample rate is used by default.
    - `sinkId` {{optional_inline}} {{Experimental_Inline}}
      - : Specifies the sink ID of the audio output device to use for the `AudioContext`. This can take one of the following value types:
        - A string representing the sink ID, retrieved for example via the `deviceId` property of the {{domxref("MediaDeviceInfo")}} objects returned by {{domxref("MediaDevices.enumerateDevices()")}}.
        - An object representing different options for a sink ID. Currently, this takes a single property, `type`, with a value of `none`. Setting this parameter causes the audio to be processed without being played through any audio output device.

### Return value

A new {{domxref("AudioContext")}} instance.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the specified `sampleRate` isn't supported by the context.

## Usage notes

The specification doesn't go into a lot of detail about things like how many audio
contexts a user agent should support, or minimum or maximum latency requirements (if
any), so these details can vary from browser to browser. Be sure to check the values if
they matter to you.

In particular, the specification doesn't indicate a maximum or minimum number of audio
contexts that must be able to be open at the same time, so this is left up to the
browser implementations to decide.

### Google Chrome

#### Per-tab audio context limitation in Chrome

Prior to version 66 Google Chrome only supported up to six audio contexts _per
tab_ at a time.

#### Non-standard exceptions in Chrome

If the value of the `latencyHint` property isn't valid,
Chrome throws a {{jsxref("TypeError")}} exception with the message
"The provided value '...' is not a valid enum value of type
AudioContextLatencyCategory".

## Example

This example creates a new {{domxref("AudioContext")}} for interactive audio
(optimizing for latency), with a sample rate of 44.1kHz and a specific audio output.

```js
const audioCtx = new AudioContext({
  latencyHint: "interactive",
  sampleRate: 44100,
  sinkId: "bb04fea9a8318c96de0bd...", // truncated for brevity
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OfflineAudioContext.OfflineAudioContext()", "new OfflineAudioContext()")}} constructor
