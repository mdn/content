---
title: "BaseAudioContext: createBiquadFilter() method"
short-title: createBiquadFilter()
slug: Web/API/BaseAudioContext/createBiquadFilter
page-type: web-api-instance-method
browser-compat: api.BaseAudioContext.createBiquadFilter
---

{{ APIRef("Web Audio API") }}

The `createBiquadFilter()` method of the {{ domxref("BaseAudioContext") }}
interface creates a {{ domxref("BiquadFilterNode") }}, which represents a second order
filter configurable as several different common filter types.

> **Note:** The {{domxref("BiquadFilterNode.BiquadFilterNode", "BiquadFilterNode()")}} constructor is the
> recommended way to create a {{domxref("BiquadFilterNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createBiquadFilter()
```

### Parameters

None.

### Return value

A {{domxref("BiquadFilterNode")}}.

## Examples

The following example shows basic usage of an AudioContext to create a Biquad filter node.
For more complete applied examples/information, check out our [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) demo (see [app.js lines 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) for relevant code).

```js
const audioCtx = new AudioContext();

//set up the different audio nodes we will use for the app
const analyser = audioCtx.createAnalyser();
const distortion = audioCtx.createWaveShaper();
const gainNode = audioCtx.createGain();
const biquadFilter = audioCtx.createBiquadFilter();
const convolver = audioCtx.createConvolver();

// connect the nodes together

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);

// Manipulate the Biquad filter

biquadFilter.type = "lowshelf";
biquadFilter.frequency.setValueAtTime(1000, audioCtx.currentTime);
biquadFilter.gain.setValueAtTime(25, audioCtx.currentTime);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
