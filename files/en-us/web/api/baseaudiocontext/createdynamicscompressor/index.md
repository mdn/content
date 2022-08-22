---
title: BaseAudioContext.createDynamicsCompressor()
slug: Web/API/BaseAudioContext/createDynamicsCompressor
page-type: web-api-instance-method
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - Method
  - Reference
  - Web Audio API
  - createDynamicsCompressor
browser-compat: api.BaseAudioContext.createDynamicsCompressor
---
{{ APIRef("Web Audio API") }}

The `createDynamicsCompressor()` method of the {{
    domxref("BaseAudioContext") }} Interface is used to create a
{{domxref("DynamicsCompressorNode")}}, which can be used to apply compression to an
audio signal.

Compression lowers the volume of the loudest parts of the signal and raises the volume
of the softest parts. Overall, a louder, richer, and fuller sound can be achieved. It is
especially important in games and musical applications where large numbers of individual
sounds are played simultaneously, where you want to control the overall signal level and
help avoid clipping (distorting) of the audio output.

> **Note:** The {{domxref("DynamicsCompressorNode.DynamicsCompressorNode", "DynamicsCompressorNode()")}}
> constructor is the recommended way to create a {{domxref("DynamicsCompressorNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js
createDynamicsCompressor()
```

### Parameters

None.

### Return value

A {{domxref("DynamicsCompressorNode")}}.

## Examples

The code below demonstrates a simple usage of `createDynamicsCompressor()`
to add compression to an audio track. For a more complete example, have a look at our [basic Compressor example](https://mdn.github.io/webaudio-examples/compressor-example/) ([view the source code](https://github.com/mdn/webaudio-examples/tree/master/compressor-example)).

```js
// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// Create a compressor node
const compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
compressor.knee.setValueAtTime(40, audioCtx.currentTime);
compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
compressor.attack.setValueAtTime(0, audioCtx.currentTime);
compressor.release.setValueAtTime(0.25, audioCtx.currentTime);

// connect the AudioBufferSourceNode to the destination
source.connect(audioCtx.destination);

button.onclick = () => {
  const active = button.getAttribute('data-active');
  if (active === 'false') {
    button.setAttribute('data-active', 'true');
    button.textContent = 'Remove compression';

    source.disconnect(audioCtx.destination);
    source.connect(compressor);
    compressor.connect(audioCtx.destination);
  } else if (active === 'true') {
    button.setAttribute('data-active', 'false');
    button.textContent = 'Add compression';

    source.disconnect(compressor);
    compressor.disconnect(audioCtx.destination);
    source.connect(audioCtx.destination);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
