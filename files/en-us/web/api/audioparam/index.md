---
title: AudioParam
slug: Web/API/AudioParam
page-type: web-api-interface
tags:
  - API
  - Audio
  - AudioParam
  - Interface
  - Parameter
  - Reference
  - Web Audio API
  - sound
browser-compat: api.AudioParam
---
{{APIRef("Web Audio API")}}

The Web Audio API's `AudioParam` interface represents an audio-related parameter, usually a parameter of an {{domxref("AudioNode")}} (such as {{ domxref("GainNode.gain") }}).

An `AudioParam` can be set to a specific value or a change in value, and can be scheduled to happen at a specific time and following a specific pattern.

Each `AudioParam` has a list of events, initially empty, that define when and how values change. When this list is not empty, changes using the `AudioParam.value` attributes are ignored. This list of events allows us to schedule changes that have to happen at very precise times, using arbitrary timeline-based automation curves. The time used is the one defined in {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}.

## AudioParam types

There are two `AudioParam` kinds: _a-rate_ and _k-rate_ parameters. Each {{domxref("AudioNode")}} defines which of its parameters are _a-rate_ or _k-rate_ in the spec.

### a-rate

An _a-rate_ `AudioParam` takes the current audio parameter value for each [sample frame](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers.3a_frames.2c_samples_and_channels) of the audio signal.

### k-rate

A _k-rate_ `AudioParam` uses the same initial audio parameter value for the whole block processed; that is, 128 sample frames. In other words, the same value applies to every frame in the audio as it's processed by the node.

## Properties

- {{domxref("AudioParam.defaultValue")}} {{ReadOnlyInline}}
  - : Represents the initial value of the attribute as defined by the specific {{domxref("AudioNode")}} creating the `AudioParam`.
- {{domxref("AudioParam.maxValue")}} {{ReadOnlyInline}}
  - : Represents the maximum possible value for the parameter's nominal (effective) range.
- {{domxref("AudioParam.minValue")}} {{ReadOnlyInline}}
  - : Represents the minimum possible value for the parameter's nominal (effective) range.
- {{domxref("AudioParam.value")}}
  - : Represents the parameter's current value as of the current time; initially set to the value of {{domxref("AudioParam.defaultValue", "defaultValue")}}.

## Methods

- {{domxref("AudioParam.setValueAtTime()")}}
  - : Schedules an instant change to the value of the `AudioParam` at a precise time, as measured against {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}. The new value is given by the `value` parameter.
- {{domxref("AudioParam.linearRampToValueAtTime()")}}
  - : Schedules a gradual linear change in the value of the `AudioParam`. The change starts at the time specified for the _previous_ event, follows a linear ramp to the new value given in the `value` parameter, and reaches the new value at the time given in the `endTime` parameter.
- {{domxref("AudioParam.exponentialRampToValueAtTime()")}}
  - : Schedules a gradual exponential change in the value of the `AudioParam`. The change starts at the time specified for the _previous_ event, follows an exponential ramp to the new value given in the `value` parameter, and reaches the new value at the time given in the `endTime` parameter.
- {{domxref("AudioParam.setTargetAtTime()")}}
  - : Schedules the start of a change to the value of the `AudioParam`. The change starts at the time specified in `startTime` and exponentially moves towards the value given by the `target` parameter. The exponential decay rate is defined by the `timeConstant` parameter, which is a time measured in seconds.
- {{domxref("AudioParam.setValueCurveAtTime()")}}
  - : Schedules the values of the `AudioParam` to follow a set of values, defined by an array of floating-point numbers scaled to fit into the given interval, starting at a given start time and spanning a given duration of time.
- {{domxref("AudioParam.cancelScheduledValues()")}}
  - : Cancels all scheduled future changes to the `AudioParam`.
- {{domxref("AudioParam.cancelAndHoldAtTime()")}}
  - : Cancels all scheduled future changes to the `AudioParam` but holds its value at a given time until further changes are made using other methods.

## Examples

First, a basic example showing a {{domxref("GainNode")}} having its `gain` value set. `gain` is an example of an _a-rate_ `AudioParam`, as the value can potentially be set differently for each sample frame of the audio.

```js
const audioCtx = new AudioContext();

const gainNode = audioCtx.createGain();
gainNode.gain.value = 0;
```

Next, an example showing a {{ domxref("DynamicsCompressorNode") }} having some param values manipulated. These are examples of _k-rate_ `AudioParam` types, as the values are set for the entire audio block at once.

```js
const compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
compressor.knee.setValueAtTime(40, audioCtx.currentTime);
compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
compressor.attack.setValueAtTime(0, audioCtx.currentTime);
compressor.release.setValueAtTime(0.25, audioCtx.currentTime);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
