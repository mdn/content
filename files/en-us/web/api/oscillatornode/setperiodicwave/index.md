---
title: "OscillatorNode: setPeriodicWave() method"
short-title: setPeriodicWave()
slug: Web/API/OscillatorNode/setPeriodicWave
page-type: web-api-instance-method
browser-compat: api.OscillatorNode.setPeriodicWave
---

{{ APIRef("Web Audio API") }}

The **`setPeriodicWave()`** method of the {{
  domxref("OscillatorNode") }} interface is used to point to a {{domxref("PeriodicWave")}}
defining a periodic waveform that can be used to shape the oscillator's output, when
{{domxref("OscillatorNode.type", "type")}} is `custom`.

## Syntax

```js-nolint
setPeriodicWave(wave)
```

### Parameters

- `wave`
  - : A {{domxref("PeriodicWave")}} object representing the waveform to use as the shape
    of the oscillator's output.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example illustrates simple usage of `createPeriodicWave()`,
recreating a sine wave from a periodic wave.

```js
const real = new Float32Array(2);
const imag = new Float32Array(2);
const ac = new AudioContext();
const osc = ac.createOscillator();

real[0] = 0;
imag[0] = 0;
real[1] = 1;
imag[1] = 0;

const wave = ac.createPeriodicWave(real, imag);

osc.setPeriodicWave(wave);

osc.connect(ac.destination);

osc.start();
osc.stop(2);
```

This works because a sound that contains only a fundamental tone is by definition a
sine wave.

Here, we create a {{domxref("PeriodicWave")}} with two values. The first value is the DC
offset, which is the value at which the oscillator starts. 0 is good here, because we
want to start the curve at the middle of the \[-1.0; 1.0] range.

The second and subsequent values are sine and cosine components. You can think of it as
the result of a Fourier transform, where you get frequency domain values from time
domain value. Here, with `createPeriodicWave()`, you specify the frequencies,
and the browser performs an inverse Fourier transform to get a time domain buffer for
the frequency of the oscillator. Here, we only set one component at full volume (1.0) on
the fundamental tone, so we get a sine wave.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [AudioContext.createPeriodicWave](/en-US/docs/Web/API/BaseAudioContext/createPeriodicWave)
