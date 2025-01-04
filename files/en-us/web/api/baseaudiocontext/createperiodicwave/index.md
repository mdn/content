---
title: "BaseAudioContext: createPeriodicWave() method"
short-title: createPeriodicWave()
slug: Web/API/BaseAudioContext/createPeriodicWave
page-type: web-api-instance-method
browser-compat: api.BaseAudioContext.createPeriodicWave
---

{{ APIRef("Web Audio API") }}

The `createPeriodicWave()` method of the {{ domxref("BaseAudioContext") }} interface is used to create a {{domxref("PeriodicWave")}}. This wave is used to define a periodic waveform that can be used to shape the output of an {{ domxref("OscillatorNode") }}.

## Syntax

```js-nolint
createPeriodicWave(real, imag)
createPeriodicWave(real, imag, constraints)
```

### Parameters

- `real`
  - : An array of cosine terms (traditionally the A terms).
- `imag`
  - : An array of sine terms (traditionally the B terms).

The `real` and `imag` arrays must have the same length, otherwise an error is thrown.

- `constraints` {{optional_inline}}

  - : A dictionary object that specifies whether normalization should be disabled. If not specified, normalization is enabled by default. It takes one property:

    - `disableNormalization`
      - : If set to `true`, normalization is disabled for the periodic wave. The default is `false`.

> [!NOTE]
> If normalized, the resulting wave will have a maximum absolute peak value of 1.

### Return value

A {{domxref("PeriodicWave")}}.

## Examples

The following example illustrates simple usage of `createPeriodicWave()`, to
create a {{domxref("PeriodicWave")}} object containing a simple sine wave.

```js
const real = new Float32Array(2);
const imag = new Float32Array(2);
const ac = new AudioContext();
const osc = ac.createOscillator();

real[0] = 0;
imag[0] = 0;
real[1] = 1;
imag[1] = 0;

const wave = ac.createPeriodicWave(real, imag, { disableNormalization: true });

osc.setPeriodicWave(wave);

osc.connect(ac.destination);

osc.start();
osc.stop(2);
```

This works because a sound that contains only a fundamental tone is by definition a sine wave.

Here, we create a `PeriodicWave` with two values. The first value is the DC offset, which is the value at which the oscillator starts. A value of `0` is good here because it starts the curve at the middle of the `[-1.0; 1.0]` range. The second and subsequent values are sine and cosine components, similar to the result of a Fourier transform, which converts time domain values to frequency domain values. Here, with `createPeriodicWave()`, you specify the frequencies, and the browser performs an inverse Fourier transform to get a time domain buffer for the frequency of the oscillator. In this example, we set only one component at full volume (`1.0`) on the fundamental tone, so we get a sine wave. Bear in mind that the fundamental tone corresponds to the oscillator's frequency (which, by default, is `440 Hz`). Therefore, altering the oscillator's frequency effectively shifts the frequency of this periodic wave along with it.

The coefficients of the Fourier transform should be given in _ascending_ order (i.e. <math><semantics><mrow><mrow><mo>(</mo><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mi>i</mi></msup><mo>,</mo><mrow><mo>(</mo><mrow><mi>c</mi><mo>+</mo><mi>d</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>i</mi></mrow></msup><mo>,</mo><mrow><mo>(</mo><mrow><mi>f</mi><mo>+</mo><mi>g</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mrow><mn>3</mn><mi>i</mi></mrow></msup></mrow><annotation encoding="TeX">\left(a+bi\right)e^{i} , \left(c+di\right)e^{2i} ,\left(f+gi\right)e^{3i} </annotation></semantics></math> etc.) and can be positive or negative. A simple way of manually obtaining such coefficients (though not the best) is to use a graphing calculator.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
