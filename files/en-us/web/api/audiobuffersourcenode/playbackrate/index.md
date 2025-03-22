---
title: "AudioBufferSourceNode: playbackRate property"
short-title: playbackRate
slug: Web/API/AudioBufferSourceNode/playbackRate
page-type: web-api-instance-property
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

### Setting `playbackRate`

In this example, when the user presses "Play", we load an audio track, decode it, and put it into an {{domxref("AudioBufferSourceNode")}}.

The example then sets the `loop` property to `true`, so the track loops, and plays the track.

The user can set the `playbackRate` property using a [range control](/en-US/docs/Web/HTML/Element/input/range).

> [!NOTE]
> You can [run the full example live](https://mdn.github.io/webaudio-examples/audio-buffer-source-node/playbackrate/) (or [view the source](https://github.com/mdn/webaudio-examples/tree/main/audio-buffer-source-node/playbackrate).)

```js
let audioCtx;
let buffer;
let source;

const play = document.getElementById("play");
const stop = document.getElementById("stop");

const playbackControl = document.getElementById("playback-rate-control");
const playbackValue = document.getElementById("playback-rate-value");

async function loadAudio() {
  try {
    // Load an audio file
    const response = await fetch("rnb-lofi-melody-loop.wav");
    // Decode it
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}

play.addEventListener("click", async () => {
  if (!audioCtx) {
    audioCtx = new AudioContext();
    await loadAudio();
  }
  source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.loop = true;
  source.playbackRate.value = playbackControl.value;
  source.start();
  play.disabled = true;
  stop.disabled = false;
  playbackControl.disabled = false;
});

stop.addEventListener("click", () => {
  source.stop();
  play.disabled = false;
  stop.disabled = true;
  playbackControl.disabled = true;
});

playbackControl.oninput = () => {
  source.playbackRate.value = playbackControl.value;
  playbackValue.textContent = playbackControl.value;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
