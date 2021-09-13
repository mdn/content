---
title: BaseAudioContext.createBufferSource()
slug: Web/API/BaseAudioContext/createBufferSource
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - Method
  - Reference
  - Web Audio API
  - createBufferSource
browser-compat: api.BaseAudioContext.createBufferSource
---
{{ APIRef("Web Audio API") }}

The `createBufferSource()` method of the {{ domxref("BaseAudioContext") }}
Interface is used to create a new {{ domxref("AudioBufferSourceNode") }}, which can be
used to play audio data contained within an {{ domxref("AudioBuffer") }} object. {{
    domxref("AudioBuffer") }}s are created using
{{domxref("BaseAudioContext.createBuffer")}} or returned by
{{domxref("BaseAudioContext.decodeAudioData")}} when it successfully decodes an audio
track.

> **Note:** The {{domxref("AudioBufferSourceNode.AudioBufferSourceNode", "AudioBufferSourceNode()")}}
> constructor is the recommended way to create a {{domxref("AudioBufferSourceNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js
var source = baseAudioContext.createBufferSource();
```

### Returns

An {{domxref("AudioBufferSourceNode")}}.

## Example

In this example, we create a two second buffer, fill it with white noise, and then play
it via an {{ domxref("AudioBufferSourceNode") }}. The comments should clearly explain
what is going on.

> **Note:** You can also [run the code live](https://mdn.github.io/webaudio-examples/audio-buffer/),
> or [view
> the source](https://github.com/mdn/webaudio-examples/blob/master/audio-buffer/index.html).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var button = document.querySelector('button');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

// Stereo
var channels = 2;
// Create an empty two second stereo buffer at the
// sample rate of the AudioContext
var frameCount = audioCtx.sampleRate * 2.0;

var myArrayBuffer = audioCtx.createBuffer(channels, frameCount, audioCtx.sampleRate);

button.onclick = function() {
  // Fill the buffer with white noise;
  //just random values between -1.0 and 1.0
  for (var channel = 0; channel < channels; channel++) {
   // This gives us the actual ArrayBuffer that contains the data
   var nowBuffering = myArrayBuffer.getChannelData(channel);
   for (var i = 0; i < frameCount; i++) {
     // Math.random() is in [0; 1.0]
     // audio needs to be in [-1.0; 1.0]
     nowBuffering[i] = Math.random() * 2 - 1;
   }
  }

  // Get an AudioBufferSourceNode.
  // This is the AudioNode to use when we want to play an AudioBuffer
  var source = audioCtx.createBufferSource();
  // set the buffer in the AudioBufferSourceNode
  source.buffer = myArrayBuffer;
  // connect the AudioBufferSourceNode to the
  // destination so we can hear the sound
  source.connect(audioCtx.destination);
  // start the source playing
  source.start();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
