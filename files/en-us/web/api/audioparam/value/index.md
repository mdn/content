---
title: "AudioParam: value property"
short-title: value
slug: Web/API/AudioParam/value
page-type: web-api-instance-property
browser-compat: api.AudioParam.value
---

{{APIRef("Web Audio API")}}

The [Web Audio API's](/en-US/docs/Web/API/Web_Audio_API)
{{domxref("AudioParam")}} interface property **`value`** gets
or sets the value of this {{domxref("AudioParam")}} at the current time. Initially, the value is set to {{domxref("AudioParam.defaultValue")}}.

Setting `value` has the same effect as
calling {{domxref("AudioParam.setValueAtTime")}} with the time returned by the
`AudioContext`'s {{domxref("BaseAudioContext/currentTime", "currentTime")}}
property.

## Value

A floating-point {{jsxref("Number")}} indicating the parameter's value as of the
current time. This value will be between the values specified by the
{{domxref("AudioParam.minValue", "minValue")}} and {{domxref("AudioParam.maxValue",
  "maxValue")}} properties.

## Usage notes

### Value precision and variation

The data type used internally to store `value` is a single-precision
(32-bit) floating point number, while JavaScript uses 64-bit double-precision floating
point numbers. As a result, the value you read from the `value` property may
not always exactly equal what you set it to.

Consider this example:

```js
const source = new AudioBufferSourceNode(/* … */);
const rate = 5.3;
source.playbackRate.value = rate;
console.log(source.playbackRate.value === rate);
```

The log output will be `false`, because the playback rate parameter,
`rate`, was converted to the 32-bit floating-point number closest to 5.3,
which yields 5.300000190734863. One solution is to use the {{jsxref("Math.fround()")}}
method, which returns the single-precision value equivalent to the 64-bit JavaScript
value specified—when setting `value`, like this:

```js
const source = new AudioBufferSourceNode(/* … */);
const rate = Math.fround(5.3);
source.playbackRate.value = rate;
console.log(source.playbackRate.value === rate);
```

In this case, the log output will be `true`.

### Value of a property which is changing over time

The `value` of an `AudioParam` can either be fixed or can vary
over time. This is reflected by the `value` getter, which returns the value
of the parameter as of the audio rendering engine's most recent **render
quantum**, or moment at which audio buffers are processed and updated. In
addition to processing audio buffers, each render quantum updates the `value`
of each `AudioParam` as needed given the current time and any established
time-based parameter value changes.

Upon first creating the parameter, its value is set to its default value, given by
{{domxref("AudioParam.defaultValue")}}. This is the parameter's value at a time of 0.0
seconds, and will remain the parameter's value until the first render quantum in which
the value is altered.

During each render quantum, the browser does the following things related to managing
the value of a parameter:

- If the `value` setter has been used, the parameter's value is changed to
  the value given.
- If the current time equals or exceeds the time specified by a previous call to
  {{domxref("AudioParam.setValueAtTime", "setValueAtTime()")}}, the `value`
  is changed to the value passed into `setValueAtTime()`.
- If any graduated or ramped value changing methods have been called and the current
  time is within the time range over which the graduated change should occur, the value
  is updated based on the appropriate algorithm. These ramped or graduated
  value-changing methods include {{domxref("AudioParam.linearRampToValueAtTime",
    "linearRampToValueAtTime()")}}, {{domxref("AudioParam.setTargetAtTime",
    "setTargetAtTime()")}}, and {{domxref("AudioParam.setValueCurveAtTime",
    "setValueCurveAtTime()")}}.

Thus, the `value` of a parameter is maintained to accurately reflect the
state of the parameter over time.

## Examples

This example instantly changes the volume of a {{domxref("GainNode")}} to 40%.

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.4;
// which is identical to:
gainNode.gain.setValueAtTime(0.4, audioCtx.currentTime);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

When changing the gain value of a {{domxref("GainNode")}}, Google Chrome prior to
version 64 (January 2018) would perform a smooth interpolation to prevent dezippering.
Starting with version 64, the value is changed instantly to bring it in line with the
Web Audio spec. See [Chrome Platform Status](https://chromestatus.com/feature/5287995770929152) for details.

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
