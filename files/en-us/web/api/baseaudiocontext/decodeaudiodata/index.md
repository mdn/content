---
title: "BaseAudioContext: decodeAudioData() method"
short-title: decodeAudioData()
slug: Web/API/BaseAudioContext/decodeAudioData
page-type: web-api-instance-method
browser-compat: api.BaseAudioContext.decodeAudioData
---

{{ APIRef("Web Audio API") }}

The `decodeAudioData()` method of the {{ domxref("BaseAudioContext") }}
Interface is used to asynchronously decode audio file data contained in an
{{jsxref("ArrayBuffer")}} that is loaded from {{domxref("Window/fetch", "fetch()")}},
{{domxref("XMLHttpRequest")}}, or {{domxref("FileReader")}}. The decoded
{{domxref("AudioBuffer")}} is resampled to the {{domxref("AudioContext")}}'s sampling
rate, then passed to a callback or promise.

This is the preferred method of creating an audio source for Web Audio API from an
audio track. This method only works on complete file data, not fragments of audio file
data.

This function implements two alternative ways to asynchronously return the audio data or error messages: it returns a {{jsxref("Promise")}} that fulfills with the audio data, and also accepts callback arguments to handle success or failure. The primary method of interfacing with this function is via its Promise return value, and the callback parameters are provided for legacy reasons.

## Syntax

```js-nolint
// Promise-based syntax returns a Promise:
decodeAudioData(arrayBuffer)

// Callback syntax has no return value:
decodeAudioData(arrayBuffer, successCallback)
decodeAudioData(arrayBuffer, successCallback, errorCallback)
```

### Parameters

- `arrayBuffer`
  - : An ArrayBuffer containing the audio data to be decoded, usually grabbed from
    {{domxref("Window/fetch", "fetch()")}}, {{domxref("XMLHttpRequest")}} or {{domxref("FileReader")}}.
- `successCallback` {{optional_inline}}
  - : A callback function to be invoked when the decoding successfully finishes. The
    single argument to this callback is an {{domxref("AudioBuffer")}} representing the
    _decodedData_ (the decoded PCM audio data). Usually you'll want to put the
    decoded data into an {{domxref("AudioBufferSourceNode")}}, from which it can be played
    and manipulated how you want.
- `errorCallback` {{optional_inline}}
  - : An optional error callback, to be invoked if an error occurs when the audio data is
    being decoded.

### Return value

A {{jsxref("Promise") }} object that fulfills with the _decodedData_. If you are using the
XHR syntax you will ignore this return value and use a callback function instead.

## Examples

In this section we will first cover the promise-based syntax and then the callback syntax.

### Promise-based syntax

In this example `loadAudio()` uses {{domxref("Window/fetch", "fetch()")}} to retrieve an audio file and decodes it into an {{domxref("AudioBuffer")}}. It then caches the `audioBuffer` in the global `buffer` variable for later playback.

> [!NOTE]
> You can [run the full example live](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/), or [view the source](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

```js
let audioCtx;
let buffer;
let source;

async function loadAudio() {
  try {
    // Load an audio file
    const response = await fetch("viper.mp3");
    // Decode it
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}
```

### Callback syntax

In this example `loadAudio()` uses {{domxref("Window/fetch", "fetch()")}} to retrieve an audio
file and decodes it into an {{domxref("AudioBuffer")}} using the callback-based version of `decodeAudioData()`. In the callback, it plays the decoded buffer.

> [!NOTE]
> You can [run the full example live](https://mdn.github.io/webaudio-examples/decode-audio-data/callback/), or [view the source](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/callback).

```js
let audioCtx;
let source;

function playBuffer(buffer) {
  source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.loop = true;
  source.start();
}

async function loadAudio() {
  try {
    // Load an audio file
    const response = await fetch("viper.mp3");
    // Decode it
    audioCtx.decodeAudioData(await response.arrayBuffer(), playBuffer);
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
