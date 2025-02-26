---
title: "OscillatorNode: detune property"
short-title: detune
slug: Web/API/OscillatorNode/detune
page-type: web-api-instance-property
browser-compat: api.OscillatorNode.detune
---

{{ APIRef("Web Audio API") }}

The `detune` property of the {{ domxref("OscillatorNode") }} interface is an [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representing detuning of oscillation in [cents](https://en.wikipedia.org/wiki/Cent_%28music%29).

> [!NOTE]
> Though the `AudioParam` returned is read-only, the value it represents is not.

## Value

An [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}.

## Examples

The following example shows basic usage of an {{ domxref("AudioContext") }} to create an oscillator node. For applied examples/information, check out our [Violent Theremin demo](https://mdn.github.io/webaudio-examples/violent-theremin/) ([see app.js](https://github.com/mdn/webaudio-examples/blob/main/violent-theremin/scripts/app.js) for relevant code).

```js
// create web audio api context
const audioCtx = new AudioContext();

// create Oscillator node
const oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.detune.setValueAtTime(100, audioCtx.currentTime); // value in cents
oscillator.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
