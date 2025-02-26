---
title: "AudioBufferSourceNode: loop property"
short-title: loop
slug: Web/API/AudioBufferSourceNode/loop
page-type: web-api-instance-property
browser-compat: api.AudioBufferSourceNode.loop
---

{{ APIRef("Web Audio API") }}

The `loop` property of the {{ domxref("AudioBufferSourceNode") }}
interface is a Boolean indicating if the audio asset must be replayed when the end of
the {{domxref("AudioBuffer")}} is reached.

The `loop` property's default value is `false`.

## Value

A Boolean which is `true` if looping is enabled; otherwise, the value is
`false`.

When looping is enabled, the sound begins playing at the time specified as the start
point when {{domxref("AudioBufferSourceNode.start", "start()")}} is called. When the
time specified by the {{domxref("AudioBufferSourceNode.loopEnd", "loopEnd")}} property
is reached, playback continues at the time specified by
{{domxref("AudioBufferSourceNode.loopStart", "loopStart")}}

## Examples

### Setting `loop`

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

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioBufferSourceNode")}}
