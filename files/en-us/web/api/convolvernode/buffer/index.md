---
title: "ConvolverNode: buffer property"
short-title: buffer
slug: Web/API/ConvolverNode/buffer
page-type: web-api-instance-property
browser-compat: api.ConvolverNode.buffer
---

{{ APIRef("Web Audio API") }}

The **`buffer`** property of the {{ domxref("ConvolverNode") }} interface represents a mono, stereo, or 4-channel {{domxref("AudioBuffer")}} containing the (possibly multichannel) impulse response used by the `ConvolverNode` to create the reverb effect.

This is normally a simple recording of as-close-to-an-impulse as can be found in the space you want to model. For example, if you want to model the reverb in your bathroom, you might set up a microphone near the door to record the sound of a balloon pop or synthesized impulse from the sink. That audio recording could then be used as the buffer.

This audio buffer must have the same sample-rate as the `AudioContext` or an exception will be thrown. At the time when this attribute is set, the buffer and the state of the attribute will be used to configure the `ConvolverNode` with this impulse response having the given normalization. The initial value of this attribute is `null`.

## Value

An {{domxref("AudioBuffer")}}.

## Examples

### Assigning an audio buffer

The following example creates a convolver node and assigns it an {{domxref("AudioBuffer")}}.

For more complete applied examples/information, check out our [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) demo (see [app.js](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js) for the code that is excerpted below).

```js
const audioCtx = new AudioContext();
// …

const convolver = audioCtx.createConvolver();
// …

// Grab audio track via fetch() for convolver node
try {
  const response = await fetch(
    "https://mdn.github.io/voice-change-o-matic/audio/concert-crowd.ogg",
  );
  const arrayBuffer = await response.arrayBuffer();
  const decodedAudio = await audioCtx.decodeAudioData(arrayBuffer);
  convolver.buffer = decodedAudio;
} catch (error) {
  console.error(
    `Unable to fetch the audio file: ${name} Error: ${err.message}`,
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
