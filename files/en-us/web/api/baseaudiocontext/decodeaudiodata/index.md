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
{{jsxref("ArrayBuffer")}} that is loaded from {{domxref("fetch()")}},
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
    {{domxref("fetch()")}}, {{domxref("XMLHttpRequest")}} or {{domxref("FileReader")}}.
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

In this example `fetchData()` uses {{domxref("fetch()")}} to retrieve an audio
file asynchronously and decodes it into an {{domxref("AudioBuffer")}}. It then caches the
`audioBuffer` in the global `buffer` variable for later playback.

> **Note:** This example is based on a fully functioning web page that you can [run live](https://mdn.github.io/webaudio-examples/decode-audio-promise/). The complete source code is [here](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-promise).

```js
const audioCtx = new AudioContext();
let buffer;

fetchAudio("viper").then((buf) => {
  // executes when buffer has been decoded
  buffer = buf;
});

// fetchAudio() returns a Promise
// it uses fetch() to load an audio file
// it uses decodeAudioData to decode it into an AudioBuffer
// decoded AudioBuffer is buf argument for Promise.then((buf) => {})
// play.onclick() creates a single-use AudioBufferSourceNode
async function fetchAudio(name) {
  try {
    let rsvp = await fetch(`${name}.mp3`);
    return context.decodeAudioData(await rsvp.arrayBuffer()); // returns a Promise, buffer is arg for .then((arg) => {})
  } catch (err) {
    console.log(
      `Unable to fetch the audio file: ${name} Error: ${err.message}`,
    );
  }
}
```

### Callback syntax

In this example `getAudio()` uses XHR to load an audio track.
It sets the `responseType` of the request to `arraybuffer` so that
it returns an array buffer as its `response`. It caches the the array buffer
in the local `audioData` variable in the XHR `onload` event handler, then
passes it to `decodeAudioData()`. The success callback caches the decoded
{{domxref("AudioBuffer")}} in the global `buffer` variable for later playback.

> **Note:** You can [run the example live](https://mdn.github.io/webaudio-examples/decode-audio-data/) and access the [source code](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data).

```js
const audioCtx = new AudioContext();
let buffer;

getAudio("viper");

// getAudio() has no return value
// it uses XHR to load an audio file
// it uses decodeAudioData to decode it into an AudioBuffer
// decoded AudioBuffer is buf argument to callback function
// play.onclick() creates a single-use AudioBufferSourceNode
function getAudio(name) {
  request = new XMLHttpRequest();
  request.open("GET", `${name}.mp3`, true);
  request.responseType = "arraybuffer";
  request.onload = () => {
    let audioData = request.response;
    audioCtx.decodeAudioData(
      audioData,
      (buf) => {
        // executes when buffer has been decoded
        buffer = buf;
      },
      (err) => {
        console.error(
          `Unable to get the audio file: ${name} Error: ${err.message}`,
        );
      },
    );
  };
  request.send();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
