---
title: "OscillatorNode: frequency property"
short-title: frequency
slug: Web/API/OscillatorNode/frequency
page-type: web-api-instance-property
browser-compat: api.OscillatorNode.frequency
---

{{ APIRef("Web Audio API") }}

The **`frequency`** property of the {{ domxref("OscillatorNode") }} interface is an [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representing the frequency of oscillation in hertz.

> **Note:** though the `AudioParam` returned is read-only, the value it represents is not.

## Value

An [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}.

## Examples

The following example shows basic usage of an {{ domxref("AudioContext") }} to create an oscillator node. For an applied example, check out our [Violent Theremin demo](https://mdn.github.io/webaudio-examples/violent-theremin/) ([see app.js](https://github.com/mdn/webaudio-examples/blob/master/violent-theremin/scripts/app.js) for relevant code).

```js
// create web audio api context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
const oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
