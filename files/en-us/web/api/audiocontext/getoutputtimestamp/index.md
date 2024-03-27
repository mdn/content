---
title: "AudioContext: getOutputTimestamp() method"
short-title: getOutputTimestamp()
slug: Web/API/AudioContext/getOutputTimestamp
page-type: web-api-instance-method
browser-compat: api.AudioContext.getOutputTimestamp
---

{{APIRef("Web Audio API")}}

The
**`getOutputTimestamp()`** method of the
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

```js-nolint
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

You can see full code of this [example at output-timestamp](https://github.com/mdn/webaudio-examples/blob/main/output-timestamp/index.html) ([see it live also](https://mdn.github.io/webaudio-examples/output-timestamp/)).

```js
// Press the play button
playBtn.addEventListener("click", () => {
  // We can create the audioCtx as there has been some user action
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  source = new AudioBufferSourceNode(audioCtx);
  getData();
  source.start(0);
  playBtn.disabled = true;
  stopBtn.disabled = false;
  rAF = requestAnimationFrame(outputTimestamps);
});

// Press the stop button
stopBtn.addEventListener("click", () => {
  source.stop(0);
  playBtn.disabled = false;
  stopBtn.disabled = true;
  cancelAnimationFrame(rAF);
});

// Helper function to output timestamps
function outputTimestamps() {
  const ts = audioCtx.getOutputTimestamp();
  output.textContent = `Context time: ${ts.contextTime} | Performance time: ${ts.performanceTime}`;
  rAF = requestAnimationFrame(outputTimestamps); // Reregister itself
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
