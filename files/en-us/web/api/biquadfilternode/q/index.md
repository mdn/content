---
title: "BiquadFilterNode: Q property"
short-title: Q
slug: Web/API/BiquadFilterNode/Q
page-type: web-api-instance-property
browser-compat: api.BiquadFilterNode.Q
---

{{ APIRef("Web Audio API") }}

The `Q` property of the {{ domxref("BiquadFilterNode") }} interface is an [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, a double representing a [Q factor](https://en.wikipedia.org/wiki/Q_factor), or _quality factor_.

## Value

An {{domxref("AudioParam")}}. Its {{domxref("AudioParam/defaultValue", "defaultValue")}} is `1`, and its {{domxref("AudioParam/minValue", "minValue")}} and {{domxref("AudioParam/maxValue", "maxValue")}} are ±(2<sup>128</sup> - 2<sup>104</sup>), or approximately ±3.403e38. This is the range of single-precision floating-point numbers.

Its actual value range depends on the filter's {{domxref("BiquadFilterNode/type", "type")}}:

- For `lowpass` and `highpass`, the `Q` value is interpreted to be in dB. For these filters the value range is [-Q, Q]
  where Q is the largest value for which 10<sup>Q/20</sup> does not overflow the bound above. This is approximately 770.63678.
- For `bandpass`, `notch`, `allpass`, and `peaking`, the `Q` value is related to the bandwidth of the filter and should be positive, but there's no stricter maximum than the above.
- It is not used for `lowshelf` and `highshelf` filters.

> [!NOTE]
> Though the `AudioParam` returned is read-only, the value it represents is not.

## Examples

The following example shows basic usage of an AudioContext to create a Biquad filter node.
For more complete applied examples/information, check out our [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) demo (see [app.js lines 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) for relevant code).

```js
const audioCtx = new AudioContext();

// Set up the different audio nodes we will use for the app
const analyser = audioCtx.createAnalyser();
const distortion = audioCtx.createWaveShaper();
const gainNode = audioCtx.createGain();
const biquadFilter = audioCtx.createBiquadFilter();
const convolver = audioCtx.createConvolver();

// Connect the nodes together

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);

// Manipulate the Biquad filter

biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 25;

biquadFilter.type = "peaking";
biquadFilter.frequency.value = 1000;
biquadFilter.Q.value = 100;
biquadFilter.gain.value = 25;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
