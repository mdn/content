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

In this example, the {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} function is used to
decode an audio track and put it into an {{domxref("AudioBufferSourceNode")}}. Buttons
are provided to play and stop the audio playback, and a slider control is used to change
the `playbackRate` property value on the fly. When the audio is played, it
loops.

> **Note:** You can [run the full example live](https://mdn.github.io/webaudio-examples/decode-audio-data/) (or [view the source](https://github.com/mdn/webaudio-examples/blob/master/decode-audio-data/index.html).)

```js
function getData() {
  source = audioCtx.createBufferSource();
  request = new XMLHttpRequest();

  request.open("GET", "viper.ogg", true);

  request.responseType = "arraybuffer";

  request.onload = () => {
    const audioData = request.response;

    audioCtx.decodeAudioData(
      audioData,
      (buffer) => {
        myBuffer = buffer;
        source.buffer = myBuffer;
        source.playbackRate.value = playbackControl.value;
        source.connect(audioCtx.destination);
        source.loop = true;
      },

      (e) => console.error(`Error with decoding audio data: ${e.err}`),
    );
  };

  request.send();
}

// wire up buttons to stop and play audio, and range slider control

play.onclick = () => {
  getData();
  source.start(0);
  play.setAttribute("disabled", "disabled");
  playbackControl.removeAttribute("disabled");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioBufferSourceNode")}}
