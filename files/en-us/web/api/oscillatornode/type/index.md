---
title: "OscillatorNode: type property"
short-title: type
slug: Web/API/OscillatorNode/type
page-type: web-api-instance-property
browser-compat: api.OscillatorNode.type
---

{{ APIRef("Web Audio API") }}

The **`type`** property of the {{ domxref("OscillatorNode")
    }} interface specifies what shape of [waveform](https://en.wikipedia.org/wiki/Waveform) the
oscillator will output. There are several common waveforms available, as well as an
option to specify a custom waveform shape. The shape of the waveform will affect the
tone that is produced.

## Value

A string specifying the shape of oscillator wave. The different
available values are:

- `sine`
  - : A [sine wave](https://en.wikipedia.org/wiki/Sine_wave). This is the default value.
- `square`
  - : A [square wave](https://en.wikipedia.org/wiki/Square_wave) with a [duty cycle](https://en.wikipedia.org/wiki/Duty_cycle) of 0.5; that is, the signal is "high" for half of each period.
- `sawtooth`
  - : A [sawtooth wave](https://en.wikipedia.org/wiki/Sawtooth_wave).
- `triangle`
  - : A [triangle wave](https://en.wikipedia.org/wiki/Triangle_wave).
- `custom`
  - : A custom waveform. You never set `type` to `custom` manually;
    instead, use the {{domxref("OscillatorNode.setPeriodicWave", "setPeriodicWave()")}}
    method to provide the data representing the waveform. Doing so automatically sets the
    `type` to `custom`.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the value `custom` was specified. To set a custom waveform, just call
    {{domxref("OscillatorNode.setPeriodicWave", "setPeriodicWave()")}}. Doing so
    automatically sets the type for you.

## Examples

The following example shows basic usage of an {{ domxref("AudioContext") }} to create
an oscillator node. For an applied example, check out our [Violent Theremin demo](https://mdn.github.io/webaudio-examples/violent-theremin/) ([see app.js](https://github.com/mdn/webaudio-examples/blob/master/violent-theremin/scripts/app.js) for relevant code).

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
