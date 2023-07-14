---
title: "PannerNode: rolloffFactor property"
short-title: rolloffFactor
slug: Web/API/PannerNode/rolloffFactor
page-type: web-api-instance-property
browser-compat: api.PannerNode.rolloffFactor
---

{{ APIRef("Web Audio API") }}

The `rolloffFactor` property of the {{ domxref("PannerNode") }} interface is a double value describing how quickly the volume is reduced as the source moves away from the listener. This value is used by all distance models. The `rolloffFactor` property's default value is `1`.

## Value

A number whose range depends on the {{ domxref("PannerNode.distanceModel", "distanceModel") }} of the panner as follows (negative values are not allowed):

- "`linear`"
  - : The range is 0 to 1.
- "`inverse`"
  - : The range is 0 to `Infinity`.
- "`exponential`"
  - : The range is 0 to `Infinity`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the property has been given a value that is outside the accepted range.

## Examples

This example demonstrates how different {{ domxref("PannerNode.rolloffFactor", "rolloffFactor") }} values affect how the volume of the test tone decreases with increasing distance from the listener:

```js
const context = new AudioContext();
// all our test tones will last this many seconds
const NOTE_LENGTH = 4;
// this is how far we'll move the sound
const Z_DISTANCE = 20;

// this function creates a graph for the test tone with a given rolloffFactor
// and schedules it to move away from the listener along the Z (depth-wise) axis
// at the given start time, resulting in a decrease in volume (decay)
const scheduleTestTone = (rolloffFactor, startTime) => {
  const osc = new OscillatorNode(context);

  const panner = new PannerNode(context);
  panner.rolloffFactor = rolloffFactor;

  // set the initial Z position, then schedule the ramp
  panner.positionZ.setValueAtTime(0, startTime);
  panner.positionZ.linearRampToValueAtTime(Z_DISTANCE, startTime + NOTE_LENGTH);

  osc.connect(panner).connect(context.destination);

  osc.start(startTime);
  osc.stop(startTime + NOTE_LENGTH);
};

// this tone should decay fairly quickly
scheduleTestTone(1, context.currentTime);
// this tone should decay slower than the previous one
scheduleTestTone(0.5, context.currentTime + NOTE_LENGTH);
// this tone should decay only slightly
scheduleTestTone(0.1, context.currentTime + NOTE_LENGTH * 2);
```

After running this code, the resulting waveforms should look something like this:

![A waveform visualization of three oscillator tones produced in Web Audio. Each oscillator moves away from the listener at the same speed, but with different rolloffFactors affecting the resulting volume decay.](screen_shot_2018-10-11_at_23.22.37.png)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio spatialization basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
