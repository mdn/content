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

## Syntax

```js-nolint
// Promise-based syntax:
promise = decodeAudioData(arrayBuffer)

// Callback syntax:
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

If a callback is used, ({{jsxref("undefined")}}), else a {{jsxref("Promise") }} object that 
fulfills with the _decodedData_.

## Examples

In this section we will first cover the promise-based syntax and then the callback syntax.

### Promise-based syntax

In this example the fetchData() function uses {{domxref("fetch()")}} to retrieve an audio
file asynchronously. It then caches the buffer for later playback.

> **Note:** This example is based on a fully functioning web page that you can [run live](https://mdn.github.io/webaudio-examples/decode-audio-promise/). The complete source code is [here](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-promise).

```js
let buffer, context, source;
context = new AudioContext();
fetchAudio("viper").then((buf) => {
  // buf is the audio buffer returned by fetchAudio()
});

// fetch() an audio track, decode it, and stash it in buffer
async function fetchAudio(name) {
  try {
    let rsvp = await fetch(`${name}.mp3`);
    buffer   = await context.decodeAudioData(await rsvp.arrayBuffer());
    return buffer; // returns a Promise, buffer is arg for .then((arg) => {})
  }
  catch(err) {
    console.log(`Unable to fetch the audio file: ${name}\n\
                 error: ${err.message}`);
  }
}
```

### Callback syntax

In this example, the `getData()` function uses XHR to load an audio track,
setting the `responseType` of the request to `arraybuffer` so that
it returns an array buffer as its `response` that we then store in the
`audioData` variable. We then pass this buffer into a
`decodeAudioData()` function; the success callback takes the successfully
decoded PCM data, puts it into an {{ domxref("AudioBufferSourceNode") }} created using
{{domxref("BaseAudioContext/createBufferSource", "AudioContext.createBufferSource()")}}, connects the source to the
{{domxref("BaseAudioContext/destination", "AudioContext.destination")}} and sets it to loop.

The buttons in the example run `getData()` to load the track and start it
playing, and stop it playing, respectively. When the `stop()` method is
called on the source, the source is cleared out.

> **Note:** You can [run the example live](https://mdn.github.io/webaudio-examples/decode-audio-data/) and access the [source code](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data).

```js
// define variables

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let source;

const pre = document.querySelector("pre");
const myScript = document.querySelector("script");
const play = document.querySelector(".play");
const stop = document.querySelector(".stop");

// use XHR to load an audio track, and
// decodeAudioData to decode it and stick it in a buffer.
// Then we put the buffer into the source

function getData() {
  source = audioCtx.createBufferSource();
  const request = new XMLHttpRequest();

  request.open("GET", "viper.ogg", true);

  request.responseType = "arraybuffer";

  request.onload = () => {
    const audioData = request.response;

    audioCtx.decodeAudioData(
      audioData,
      (buffer) => {
        source.buffer = buffer;

        source.connect(audioCtx.destination);
        source.loop = true;
      },

      (err) => console.error(`Error with decoding audio data: ${err.err}`)
    );
  };

  request.send();
}

// wire up buttons to stop and play audio

play.onclick = () => {
  getData();
  source.start(0);
  play.setAttribute("disabled", "disabled");
};

stop.onclick = () => {
  source.stop(0);
  play.removeAttribute("disabled");
};

// dump script to pre element

pre.innerHTML = myScript.innerHTML;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
