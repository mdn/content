---
title: "BaseAudioContext: createOscillator() method"
short-title: createOscillator()
slug: Web/API/BaseAudioContext/createOscillator
page-type: web-api-instance-method
browser-compat: api.BaseAudioContext.createOscillator
---

{{APIRef("Web Audio API")}}

The `createOscillator()` method of the {{domxref("BaseAudioContext")}}
interface creates an {{domxref("OscillatorNode")}}, a source representing a periodic
waveform. It basically generates a constant tone.

> [!NOTE]
> The {{domxref("OscillatorNode.OscillatorNode", "OscillatorNode()")}}
> constructor is the recommended way to create a {{domxref("OscillatorNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createOscillator()
```

### Parameters

None.

### Return value

An {{domxref("OscillatorNode")}}.

## Examples

The following example shows basic usage of an AudioContext to create an oscillator
node. For applied examples/information, check out our [Violent Theremin demo](https://mdn.github.io/webaudio-examples/violent-theremin/) ([see app.js](https://github.com/mdn/webaudio-examples/blob/main/violent-theremin/scripts/app.js) for relevant code); also see our {{domxref("OscillatorNode")}} page for
more information.

```js
// create web audio api context
const audioCtx = new AudioContext();

// create Oscillator node
const oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(3000, audioCtx.currentTime); // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
