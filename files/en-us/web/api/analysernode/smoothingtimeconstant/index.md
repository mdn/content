---
title: "AnalyserNode: smoothingTimeConstant property"
short-title: smoothingTimeConstant
slug: Web/API/AnalyserNode/smoothingTimeConstant
page-type: web-api-instance-property
browser-compat: api.AnalyserNode.smoothingTimeConstant
---

{{ APIRef("Web Audio API") }}

The **`smoothingTimeConstant`** property of the {{ domxref("AnalyserNode") }} interface is a double value representing the averaging constant with the last analysis frame. It's basically an average between the current buffer and the last buffer the `AnalyserNode` processed, and results in a much smoother set of value changes over time.

## Value

A double within the range `0` to `1` (`0` meaning no time averaging). The default value is `0.8`.

If 0 is set, there is no averaging done, whereas a value of 1 means "overlap the previous and current buffer quite a lot while computing the value", which essentially smooths the changes across {{domxref("AnalyserNode.getFloatFrequencyData")}}/{{domxref("AnalyserNode.getByteFrequencyData")}} calls.

In technical terms, we apply a [Blackman window](https://webaudio.github.io/web-audio-api/#blackman-window) and smooth the values over time. The default value is good enough for most cases.

> **Note:** If a value outside the range 0–1 is set, an `INDEX_SIZE_ERR` exception is thrown.

## Examples

The following example shows basic usage of an {{domxref("AudioContext")}} to create an `AnalyserNode`, then {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} and {{htmlelement("canvas")}} to collect frequency data repeatedly and draw a "winamp bar graph style" output of the current audio input.
For more complete applied examples/information, check out our [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) demo (see [app.js lines 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) for relevant code).

If you are curious about the effect the `smoothingTimeConstant()` has, try cloning the above example and setting `analyser.smoothingTimeConstant = 0;` instead. You'll notice that the value changes are much more jarring.

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;
analyser.smoothingTimeConstant = 0.85;

// …

analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
const dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = "rgb(0, 0, 0)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  const barWidth = (WIDTH / bufferLength) * 2.5;
  let barHeight;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
    canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);

    x += barWidth + 1;
  }
}

draw();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
