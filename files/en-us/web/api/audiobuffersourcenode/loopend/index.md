---
title: "AudioBufferSourceNode: loopEnd property"
short-title: loopEnd
slug: Web/API/AudioBufferSourceNode/loopEnd
page-type: web-api-instance-property
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

### Setting `loopEnd`

In this example, when the user presses "Play", we load an audio track, decode it, and put it into an {{domxref("AudioBufferSourceNode")}}.

The example then sets the `loop` property to `true`, so the track loops, and plays the track.

The user can set the `loopStart` and `loopEnd` properties using [range controls](/en-US/docs/Web/HTML/Element/input/range).

> [!NOTE]
> You can [run the full example live](https://mdn.github.io/webaudio-examples/audio-buffer-source-node/loop/) (or [view the source](https://github.com/mdn/webaudio-examples/tree/main/audio-buffer-source-node/loop).)

```js
let audioCtx;
let buffer;
let source;

const play = document.getElementById("play");
const stop = document.getElementById("stop");

const loopstartControl = document.getElementById("loopstart-control");
const loopstartValue = document.getElementById("loopstart-value");

const loopendControl = document.getElementById("loopend-control");
const loopendValue = document.getElementById("loopend-value");

async function loadAudio() {
  try {
    // Load an audio file
    const response = await fetch("rnb-lofi-melody-loop.wav");
    // Decode it
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
    const max = Math.floor(buffer.duration);
    loopstartControl.setAttribute("max", max);
    loopendControl.setAttribute("max", max);
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
  source.loopStart = loopstartControl.value;
  source.loopEnd = loopendControl.value;
  source.start();
  play.disabled = true;
  stop.disabled = false;
  loopstartControl.disabled = false;
  loopendControl.disabled = false;
});

stop.addEventListener("click", () => {
  source.stop();
  play.disabled = false;
  stop.disabled = true;
  loopstartControl.disabled = true;
  loopendControl.disabled = true;
});

loopstartControl.addEventListener("input", () => {
  source.loopStart = loopstartControl.value;
  loopstartValue.textContent = loopstartControl.value;
});

loopendControl.addEventListener("input", () => {
  source.loopEnd = loopendControl.value;
  loopendValue.textContent = loopendControl.value;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
