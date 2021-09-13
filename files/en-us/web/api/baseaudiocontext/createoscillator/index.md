---
title: BaseAudioContext.createOscillator()
slug: Web/API/BaseAudioContext/createOscillator
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - Method
  - Reference
  - Web Audio API
  - createOscillator
browser-compat: api.BaseAudioContext.createOscillator
---
{{APIRef("Web Audio API")}}

The `createOscillator()` method of the {{domxref("BaseAudioContext")}}
interface creates an {{domxref("OscillatorNode")}}, a source representing a periodic
waveform. It basically generates a constant tone.

> **Note:** The {{domxref("OscillatorNode.OscillatorNode", "OscillatorNode()")}}
> constructor is the recommended way to create a {{domxref("OscillatorNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js
var oscillatorNode = audioCtx.createOscillator();
```

### Returns

An {{domxref("OscillatorNode")}}.

## Example

The following example shows basic usage of an AudioContext to create an oscillator
node. For applied examples/information, check out our [Violent Theremin demo](https://mdn.github.io/violent-theremin/) ([see
app.js](https://github.com/mdn/violent-theremin/blob/gh-pages/scripts/app.js) for relevant code); also see our {{domxref("OscillatorNode")}} page for
more information.

```js
// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var oscillator = audioCtx.createOscillator();

oscillator.type = 'square';
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
