---
title: AudioBufferSourceNode.loopEnd
slug: Web/API/AudioBufferSourceNode/loopEnd
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - AudioBufferSourceNode
  - Media
  - Property
  - Reference
  - Web Audio API
  - loopEnd
  - sound
browser-compat: api.AudioBufferSourceNode.loopEnd
---
{{ APIRef("Web Audio API") }}

The `loopEnd` property of the {{ domxref("AudioBufferSourceNode") }}
interface specifies is a floating point number specifying, in seconds, at what offset
into playing the {{domxref("AudioBuffer")}} playback should loop back to the time
indicated by the {{domxref("AudioBufferSourceNode.loopStart", "loopStart")}} property.
This is only used if the {{domxref("AudioBufferSourceNode.loop", "loop")}} property is
`true`.

## Value

A floating-point number indicating the offset, in seconds, into the audio buffer at
which each loop will loop return to the beginning of the loop (that is, the current play
time gets reset to {{domxref("AudioBufferSourceNode.loopStart")}}). This property is
only used if the {{domxref("AudioBufferSourceNode.loop", "loop")}} property is
`true`.

The default value is 0.

## Examples

In this example, the {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} function is used to
decode an audio track and put it into an {{domxref("AudioBufferSourceNode")}}. Buttons
are provided to play and stop the audio playback, and slider controls are used to change
the `playbackRate`, `loopStart` and `loopEnd`
properties on the fly.

When the audio is played to the end, it loops, but you can control how long the loops
last by altering `loopStart` and `loopEnd`. For example, if you
set their values to 20 and 25, respectively, then begin playback, the sound will play
normally until it reaches the 25 second mark. Then the current play position will loop
back to the 20 second mark and continue playing until the 25 second mark, ad infinitum
(or at least until {{domxref("AudioScheduledSourceNode/stop", "stop()")}} is called).

> **Note:** For a full working example, see [this code running live](https://mdn.github.io/webaudio-examples/decode-audio-data/), or [view the source](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data).

```js
function getData() {
  source = audioCtx.createBufferSource();
  request = new XMLHttpRequest();

  request.open('GET', 'viper.ogg', true);

  request.responseType = 'arraybuffer';

  request.onload = () => {
    const audioData = request.response;

    audioCtx.decodeAudioData(audioData, (buffer) => {
        myBuffer = buffer;
        songLength = buffer.duration;
        source.buffer = myBuffer;
        source.playbackRate.value = playbackControl.value;
        source.connect(audioCtx.destination);
        source.loop = true;

        loopstartControl.setAttribute('max', Math.floor(songLength));
        loopendControl.setAttribute('max', Math.floor(songLength));
      },

      (e) => console.error(`Error with decoding audio data: ${e.err}`));

  }

  request.send();
}

// …

loopstartControl.oninput = () => {
  source.loopStart = loopstartControl.value;
  loopstartValue.innerHTML = loopstartControl.value;
}

loopendControl.oninput = () => {
  source.loopEnd = loopendControl.value;
  loopendValue.innerHTML = loopendControl.value;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
