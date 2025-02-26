---
title: "BaseAudioContext: createConvolver() method"
short-title: createConvolver()
slug: Web/API/BaseAudioContext/createConvolver
page-type: web-api-instance-method
browser-compat: api.BaseAudioContext.createConvolver
---

{{ APIRef("Web Audio API") }}

The `createConvolver()` method of the {{ domxref("BaseAudioContext") }}
interface creates a {{ domxref("ConvolverNode") }}, which is commonly used to apply
reverb effects to your audio. See the [spec definition of Convolution](https://webaudio.github.io/web-audio-api/#background-3) for more information.

> [!NOTE]
> The {{domxref("ConvolverNode.ConvolverNode", "ConvolverNode()")}}
> constructor is the recommended way to create a {{domxref("ConvolverNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createConvolver()
```

### Parameters

None.

### Return value

A {{domxref("ConvolverNode")}}.

## Examples

### Creating a convolver node

The following example shows how to use an AudioContext to create a convolver node.
You create an {{domxref("AudioBuffer")}} containing a sound sample to be used
as an ambience to shape the convolution (called the _impulse response_) and
apply that to the convolver. The example below uses a short sample of a concert hall
crowd, so the reverb effect applied is really deep and echoey.

For more complete applied examples/information, check out our [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) demo (see [app.js](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js) for the code that is excerpted below).

```js
const audioCtx = new AudioContext();
// ...

const convolver = audioCtx.createConvolver();
// ...

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
