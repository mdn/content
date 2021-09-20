---
title: AnalyserNode.maxDecibels
slug: Web/API/AnalyserNode/maxDecibels
tags:
  - API
  - AnalyserNode
  - Property
  - Reference
  - Web Audio API
  - maxDecibels
browser-compat: api.AnalyserNode.maxDecibels
---
{{APIRef("Web Audio API")}}

The **`maxDecibels`** property of the {{domxref("AnalyserNode")}} interface is a double value representing the maximum power value in the scaling range for the FFT analysis data, for conversion to unsigned byte values — basically, this specifies the maximum value for the range of results when using `getByteFrequencyData()`.

## Syntax

```js
var curValue = analyserNode.maxDecibels;
analyserNode.maxDecibels = newValue;
```

### Value

A double, representing the maximum [decibel](https://en.wikipedia.org/wiki/Decibel "Decibel on Wikipedia") value for scaling the FFT analysis data, where `0` dB is the loudest possible sound, `-10` dB is a 10th of that, etc. The default value is `-30` dB.

When getting data from `getByteFrequencyData()`, any frequencies with an amplitude of `maxDecibels` or higher will be returned as `255`.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if a value less than or equal to `AnalyserNode.minDecibels` is set.

## Example

The following example shows basic usage of an {{domxref("AudioContext")}} to create an `AnalyserNode`, then {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} and {{htmlelement("canvas")}} to collect frequency data repeatedly and draw a "winamp bargraph style" output of the current audio input. For more complete applied examples/information, check out our [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) demo (see [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205) for relevant code).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;

  ...

analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
var dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = 'rgb(0, 0, 0)';
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  var barWidth = (WIDTH / bufferLength) * 2.5;
  var barHeight;
  var x = 0;

  for(var i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
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
