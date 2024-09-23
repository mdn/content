---
title: "BaseAudioContext: createGain() method"
short-title: createGain()
slug: Web/API/BaseAudioContext/createGain
page-type: web-api-instance-method
browser-compat: api.BaseAudioContext.createGain
---

{{ APIRef("Web Audio API") }}

The `createGain()` method of the {{ domxref("BaseAudioContext") }}
interface creates a {{ domxref("GainNode") }}, which can be used to control the
overall gain (or volume) of the audio graph.

> [!NOTE]
> The {{domxref("GainNode.GainNode", "GainNode()")}}
> constructor is the recommended way to create a {{domxref("GainNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createGain()
```

### Parameters

None.

### Return value

A {{domxref("GainNode")}} which takes as input one or more audio sources and outputs
audio whose volume has been adjusted in gain (volume) to a level specified by the node's
{{domxref("GainNode.gain")}} [a-rate](/en-US/docs/Web/API/AudioParam#a-rate)
parameter.

## Examples

The following example shows basic usage of an {{domxref("AudioContext")}} to create a
`GainNode`, which is then used to mute and unmute the audio when a Mute
button is clicked by changing the `gain` property value.

The below snippet wouldn't work as is — for a complete working example, check out our
[Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) demo ([view source](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js).)

```html
<div>
  <button class="mute">Mute button</button>
</div>
```

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
const mute = document.querySelector(".mute");
let source;

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia(
    // constraints - only audio needed for this app
    {
      audio: true,
    },

    // Success callback
    (stream) => {
      source = audioCtx.createMediaStreamSource(stream);
    },

    // Error callback
    (err) => {
      console.error(`The following gUM error occurred: ${err}`);
    },
  );
} else {
  console.error("getUserMedia not supported on your browser!");
}

source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// …

mute.onclick = () => {
  if (mute.id === "") {
    // 0 means mute. If you still hear something, make sure you haven't
    // connected your source into the output in addition to using the GainNode.
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    mute.id = "activated";
    mute.textContent = "Unmute";
  } else {
    gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
    mute.id = "";
    mute.textContent = "Mute";
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
