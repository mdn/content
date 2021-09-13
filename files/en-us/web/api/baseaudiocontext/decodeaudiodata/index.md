---
title: BaseAudioContext.decodeAudioData()
slug: Web/API/BaseAudioContext/decodeAudioData
tags:
  - API
  - Audio
  - AudioContext
  - BaseAudioContext
  - Method
  - Reference
  - Web Audio API
  - decodeAudioData
browser-compat: api.BaseAudioContext.decodeAudioData
---
{{ APIRef("Web Audio API") }}

The `decodeAudioData()` method of the {{ domxref("BaseAudioContext") }}
Interface is used to asynchronously decode audio file data contained in an
{{jsxref("ArrayBuffer")}}. In this case the `ArrayBuffer` is loaded from
{{domxref("XMLHttpRequest")}} and {{domxref("FileReader")}}. The decoded
{{domxref("AudioBuffer")}} is resampled to the {{domxref("AudioContext")}}'s sampling
rate, then passed to a callback or promise.

This is the preferred method of creating an audio source for Web Audio API from an
audio track. This method only works on complete file data, not fragments of audio file
data.

## Syntax

Older callback syntax:

```js
baseAudioContext.decodeAudioData(ArrayBuffer, successCallback, errorCallback);
```

Newer promise-based syntax:

```js
Promise<decodedData> baseAudioContext.decodeAudioData(ArrayBuffer);
```

### Parameters

- _ArrayBuffer_
  - : An ArrayBuffer containing the audio data to be decoded, usually grabbed from
    {{domxref("XMLHttpRequest")}}, {{domxref("fetch()")}} or
    {{domxref("FileReader")}}.
- _successCallback_
  - : A callback function to be invoked when the decoding successfully finishes. The
    single argument to this callback is an {{domxref("AudioBuffer")}} representing the
    _decodedData_ (the decoded PCM audio data). Usually you'll want to put the
    decoded data into an {{domxref("AudioBufferSourceNode")}}, from which it can be played
    and manipulated how you want.
- _errorCallback_
  - : An optional error callback, to be invoked if an error occurs when the audio data is
    being decoded.

### Return value

Void, or a {{jsxref("Promise") }} object that fulfills with the
_decodedData_.

## Example

In this section we will first cover the older callback-based system and then the newer
promise-based syntax.

### Older callback syntax

In this example, the `getData()` function uses XHR to load an audio track,
setting the `responseType` of the request to `arraybuffer` so that
it returns an array buffer as its `response` that we then store in the
`audioData` variable . We then pass this buffer into a
`decodeAudioData()` function; the success callback takes the successfully
decoded PCM data, puts it into an {{ domxref("AudioBufferSourceNode") }} created using
{{domxref("BaseAudioContext/createBufferSource", "AudioContext.createBufferSource()")}}, connects the source to the
{{domxref("BaseAudioContext/destination", "AudioContext.destination")}} and sets it to loop.

The buttons in the example run `getData()` to load the track and start it
playing, and stop it playing, respectively. When the `stop()` method is
called on the source, the source is cleared out.

> **Note:** You can [run the example
> live](https://mdn.github.io/webaudio-examples/decode-audio-data/) (or [view
> the source](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data).)

```js
// define variables

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var source;

var pre = document.querySelector('pre');
var myScript = document.querySelector('script');
var play = document.querySelector('.play');
var stop = document.querySelector('.stop');

// use XHR to load an audio track, and
// decodeAudioData to decode it and stick it in a buffer.
// Then we put the buffer into the source

function getData() {
  source = audioCtx.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', 'viper.ogg', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
        source.buffer = buffer;

        source.connect(audioCtx.destination);
        source.loop = true;
      },

      function(e){ console.log("Error with decoding audio data" + e.err); });

  }

  request.send();
}

// wire up buttons to stop and play audio

play.onclick = function() {
  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');
}

stop.onclick = function() {
  source.stop(0);
  play.removeAttribute('disabled');
}

// dump script to pre element

pre.innerHTML = myScript.innerHTML;
```

### New promise-based syntax

```js
ctx.decodeAudioData(audioData).then(function(decodedData) {
 // use the decoded data here
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
