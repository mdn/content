---
title: AudioBufferSourceNode.playbackRate
slug: Web/API/AudioBufferSourceNode/playbackRate
page-type: web-api-instance-property
tags:
  - API
  - AudioBufferSourceNode
  - Property
  - Reference
  - Web Audio API
  - playbackRate
browser-compat: api.AudioBufferSourceNode.playbackRate
---
{{ APIRef("Web Audio API") }}

The **`playbackRate`** property of
the {{ domxref("AudioBufferSourceNode") }} interface Is a [k-rate](/en-US/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} that
defines the speed at which the audio asset will be played.

A value of 1.0 indicates it should play at the same speed as its sampling rate,
values less than 1.0 cause the sound to play more slowly, while values greater than
1.0 result in audio playing faster than normal. The default value is `1.0`.
When set to another value, the `AudioBufferSourceNode` resamples the audio
before sending it to the output.

## Value

An {{domxref("AudioParam")}} whose {{domxref("AudioParam.value", "value")}} is a
floating-point value indicating the playback rate of the audio as a decimal proportion
of the original sampling rate.

Consider a sound buffer containing audio sampled at 44.1 kHz (44,100 samples per
second). Let's see what a few values of `playbackRate` do:

- A `playbackRate` of 1.0 plays the audio at full speed, or 44,100 Hz.
- A `playbackRate` of 0.5 plays the audio at half speed, or 22,050 Hz.
- A `playbackRate` of 2.0 doubles the audio's playback rate to 88,200 Hz.

## Examples

In this example, the {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} function is used to
decode an audio track, and put it into an {{domxref("AudioBufferSourceNode")}}. Buttons
are provided to play and stop the audio playback, and a slider control is used to change
the `playbackRate` property value on the fly.

> **Note:** You can [run the example live](https://mdn.github.io/webaudio-examples/decode-audio-data/) (or [view the source](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data)). Play the song and alter the playback rate for some fun results.

```html
<input class="playback-rate-control" type="range" min="0.25" max="3" step="0.05" value="1">
<span class="playback-rate-value">1.0</span>
```

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
        source.buffer = myBuffer;
        source.playbackRate.value = playbackControl.value;
        source.connect(audioCtx.destination);
        source.loop = true;
      },

      (e) => console.error(`Error with decoding audio data: ${e.err}`));

  }

  request.send();
}

// wire up buttons to stop and play audio, and range slider control

play.onclick = () => {
  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');
  playbackControl.removeAttribute('disabled');
}

stop.onclick = () => {
  source.stop(0);
  play.removeAttribute('disabled');
  playbackControl.setAttribute('disabled', 'disabled');
}

playbackControl.oninput = () => {
  source.playbackRate.value = playbackControl.value;
  playbackValue.innerHTML = playbackControl.value;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
