---
title: AnalyserNode.fftSize
slug: Web/API/AnalyserNode/fftSize
tags:
  - API
  - AnalyserNode
  - Property
  - Reference
  - Web Audio API
  - fftSize
browser-compat: api.AnalyserNode.fftSize
---
{{APIRef("Web Audio API")}}

The **`fftSize`** property of the {{domxref("AnalyserNode")}} interface is an unsigned long value and represents the window size in samples that is used when performing a [Fast Fourier Transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform) (FFT) to get frequency domain data.

## Syntax

```js
var curValue = analyserNode.fftSize;
analyserNode.fftSize = newValue;
```

### Value

An unsigned integer, representing the window size of the FFT, given in number of samples. A higher value will result in more details in the frequency domain but fewer details in the time domain.

Must be a power of 2 between <math><semantics><msup><mn>2</mn><mn>5</mn></msup><annotation encoding="TeX">2^5</annotation></semantics></math> and <math><semantics><msup><mn>2</mn><mn>15</mn></msup><annotation encoding="TeX">2^15</annotation></semantics></math>, so one of: `32`, `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192`, `16384`, and `32768`. Defaults to `2048`.

**Note**: If its value is not a power of 2, or it is outside the specified range, a {{domxref("DOMException")}} with the name `IndexSizeError` is thrown.

## Example

The following example shows basic usage of an {{domxref("AudioContext")}} to create an `AnalyserNode`, then {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} and {{htmlelement("canvas")}} to collect time domain data repeatedly and draw an "oscilloscope style" output of the current audio input. For more complete applied examples/information, check out our [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) demo (see [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205) for relevant code).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount ;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// draw an oscilloscope of the current audio source

function draw() {

      drawVisual = requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray);

      canvasCtx.fillStyle = 'rgb(200, 200, 200)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

      canvasCtx.beginPath();

      var sliceWidth = WIDTH * 1.0 / bufferLength;
      var x = 0;

      for(var i = 0; i < bufferLength; i++) {

        var v = dataArray[i] / 128.0;
        var y = v * HEIGHT/2;

        if(i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();
    };

    draw();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
