---
title: AnalyserNode.getByteFrequencyData()
slug: Web/API/AnalyserNode/getByteFrequencyData
page-type: web-api-instance-method
tags:
  - API
  - AnalyserNode
  - Method
  - Reference
  - Web Audio API
browser-compat: api.AnalyserNode.getByteFrequencyData
---
{{ APIRef("Web Audio API") }}

The **`getByteFrequencyData()`** method of the {{ domxref("AnalyserNode") }} interface copies the current frequency data into a {{jsxref("Uint8Array")}} (unsigned byte array) passed into it.

The frequency data is composed of integers on a scale from 0 to 255.

Each item in the array represents the decibel value for a specific frequency. The frequencies are spread linearly from 0 to 1/2 of the sample rate. For example, for `48000` sample rate, the last item of the array will represent the decibel value for `24000` Hz.

If the array has fewer elements than the {{domxref("AnalyserNode.frequencyBinCount")}}, excess elements are dropped. If it has more elements than needed, excess elements are ignored.

## Syntax

```js
getByteFrequencyData(array)
```

### Parameters

- `array`
  - : The {{jsxref("Uint8Array")}} that the frequency domain data will be copied to. For any sample which is silent, the value is `-Infinity`.
    If the array has fewer elements than the {{domxref("AnalyserNode.frequencyBinCount")}}, excess elements are dropped. If it has more elements than needed, excess elements are ignored.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example shows basic usage of an {{domxref("AudioContext")}} to create an `AnalyserNode`, then {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} and {{htmlelement("canvas")}} to collect frequency data repeatedly and draw a "winamp bargraph style" output of the current audio input. For more examples/information, check out our [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) demo (see [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205) for relevant code).

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();

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

  const barWidth = (WIDTH / bufferLength) * 2.5;
  let barHeight;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
    canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2);

    x += barWidth + 1;
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
