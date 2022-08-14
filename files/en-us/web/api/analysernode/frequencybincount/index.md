---
title: AnalyserNode.frequencyBinCount
slug: Web/API/AnalyserNode/frequencyBinCount
page-type: web-api-instance-property
tags:
  - API
  - AnalyserNode
  - Property
  - Reference
  - Web Audio API
  - frequencyBinCount
browser-compat: api.AnalyserNode.frequencyBinCount
---
{{APIRef("Web Audio API")}}

The **`frequencyBinCount`** read-only property of the {{domxref("AnalyserNode")}} interface is an unsigned integer half that of the {{domxref("AnalyserNode.fftSize")}}. This generally equates to the number of data values you will have to play with for the visualization.

## Value

An unsigned integer, equal to the number of values that {{domxref("AnalyserNode.getByteFrequencyData()")}} and {{domxref("AnalyserNode.getFloatFrequencyData()")}} copy into the provided `TypedArray`.

For technical reasons related to how the [Fast Fourier transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform) is defined, it is always half the value of {{domxref("AnalyserNode.fftSize")}}. Therefore, it will be one of `16`, `32`, `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192`, and `16384`.

## Examples

The following example shows basic usage of an {{domxref("AudioContext")}} to create an `AnalyserNode`, then {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} and {{htmlelement("canvas")}} to collect frequency data repeatedly and draw a "winamp bargraph style" output of the current audio input. For more complete applied examples/information, check out our [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) demo (see [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205) for relevant code).

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;

// …

analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
const dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = 'rgb(0, 0, 0)';
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  const barWidth = (WIDTH / bufferLength) * 2.5 - 1;
  let barHeight;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
    canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2);

    x += barWidth;
  }
};

draw();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
