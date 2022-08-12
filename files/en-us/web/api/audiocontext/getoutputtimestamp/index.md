---
title: AudioContext.getOutputTimestamp()
slug: Web/API/AudioContext/getOutputTimestamp
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - AudioContext
  - Method
  - Reference
  - Web Audio API
  - getOutputTimestamp
  - sound
browser-compat: api.AudioContext.getOutputTimestamp
---
{{APIRef("Web Audio API")}}

The
**`getOutputTimestamp()`** property of the
{{domxref("AudioContext")}} interface returns a new `AudioTimestamp` object
containing two audio timestamp values relating to the current audio context.

The two values are as follows:

- `AudioTimestamp.contextTime`: The time of the sample frame currently
  being rendered by the audio output device (i.e., output audio stream position), in the
  same units and origin as the context's {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}.
  Basically, this is the time after the audio context was first created.
- `AudioTimestamp.performanceTime`: An estimation of the moment when the
  sample frame corresponding to the stored `contextTime` value was rendered
  by the audio output device, in the same units and origin as
  {{domxref("performance.now()")}}. This is the time after the document containing the
  audio context was first rendered.

## Syntax

```js
getOutputTimestamp()
```

### Parameters

None.

### Return value

An `AudioTimestamp` object, which has the following properties.

- `contextTime`: A point in the time coordinate system of the
  {{domxref("BaseAudioContext/currentTime","currentTime")}} for the
  `BaseAudioContext`; the time after the audio context was first created.
- `performanceTime`: A point in the time coordinate system of a
  `Performance` interface; the time after the document containing the audio
  context was first rendered

## Examples

In the following code we start to play an audio file after a play button is clicked,
and start off a `requestAnimationFrame` loop running, which constantly
outputs the `contextTime` and `performanceTime`.

You can see full code of this [example at output-timestamp](https://github.com/mdn/webaudio-examples/blob/master/output-timestamp/index.html) ([see it live also](https://mdn.github.io/webaudio-examples/output-timestamp/)).

```js
play.addEventListener('click', () => {
  if (!audioCtx) {
    audioCtx = new window.AudioContext();
  }

  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');

  rAF = requestAnimationFrame(outputTimestamps);
});

stop.addEventListener('click', () => {
  source.stop(0);
  play.removeAttribute('disabled');
  cancelAnimationFrame(rAF);
});

// function to output timestamps

function outputTimestamps() {
  let ts = audioCtx.getOutputTimestamp()
  console.log(`Context time: ${ts.contextTime} | Performance time: ${ts.performanceTime}`);
  rAF = requestAnimationFrame(outputTimestamps);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
