---
title: "AudioBufferSourceNode: loopStart property"
short-title: loopStart
slug: Web/API/AudioBufferSourceNode/loopStart
page-type: web-api-instance-property
browser-compat: api.AudioBufferSourceNode.loopStart
---

{{ APIRef("Web Audio API") }}

The **`loopStart`** property of the {{
  domxref("AudioBufferSourceNode") }} interface is a floating-point value indicating, in
seconds, where in the {{domxref("AudioBuffer")}} the restart of the play must happen.

The `loopStart` property's default value is `0`.

## Value

A floating-point number indicating the offset, in seconds, into the audio buffer at
which each loop should begin during playback. This value is only used when the
{{domxref("AudioBufferSourceNode.loop", "loop")}} parameter is `true`.

## Examples

In this example, the {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} function is used to
decode an audio track and put it into an {{domxref("AudioBufferSourceNode")}}. Buttons
are provided to play and stop the audio playback, and slider controls are used to change
the `playbackRate`, `loopStart`, and `loopEnd`
properties on the fly.

When the audio is played to the end, it loops, but you can control how long the loops
last by altering `loopStart` and `loopEnd`. For example, if you
set their values to 20 and 25, respectively, the audio will start to loop between 20 and
25 seconds in to the track.

> **Note:** For a full working example, see [this code running live](https://mdn.github.io/webaudio-examples/decode-audio-data/), or [view the source](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data).

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
        songLength = buffer.duration;
        source.buffer = myBuffer;
        source.playbackRate.value = playbackControl.value;
        source.connect(audioCtx.destination);
        source.loop = true;

        loopstartControl.setAttribute("max", Math.floor(songLength));
        loopendControl.setAttribute("max", Math.floor(songLength));
      },

      (e) => console.error(`Error with decoding audio data: ${e.err}`),
    );
  };

  request.send();
}

// …

loopstartControl.oninput = () => {
  source.loopStart = loopstartControl.value;
  loopstartValue.innerHTML = loopstartControl.value;
};

loopendControl.oninput = () => {
  source.loopEnd = loopendControl.value;
  loopendValue.innerHTML = loopendControl.value;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
