---
title: "AnalyserNode: fftSize property"
short-title: fftSize
slug: Web/API/AnalyserNode/fftSize
page-type: web-api-instance-property
browser-compat: api.AnalyserNode.fftSize
---

{{APIRef("Web Audio API")}}

The **`fftSize`** property of the {{domxref("AnalyserNode")}} interface is an unsigned long value and represents the window size in samples that is used when performing a [Fast Fourier Transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform) (FFT) to get frequency domain data.

## Value

An unsigned integer, representing the window size of the FFT, given in number of samples. A higher value will result in more details in the frequency domain but fewer details in the amplitude domain.

Must be a power of 2 between 2^5 and 2^15, so one of: `32`, `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192`, `16384`, and `32768`. Defaults to `2048`.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if the value set is not a power of 2, or is outside the allowed range.

## Examples

The following example shows basic usage of an {{domxref("AudioContext")}} to create an `AnalyserNode`, then {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} and {{htmlelement("canvas")}} to collect time domain data repeatedly and draw an "oscilloscope style" output of the current audio input.
For more complete applied examples/information, check out our [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) demo (see [app.js lines 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) for relevant code).

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();

// …

analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// draw an oscilloscope of the current audio source

function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = "rgb(200 200 200)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0 0 0)";

  canvasCtx.beginPath();

  const sliceWidth = (WIDTH * 1.0) / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = (v * HEIGHT) / 2;

    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }

    x += sliceWidth;
  }

  canvasCtx.lineTo(canvas.width, canvas.height / 2);
  canvasCtx.stroke();
}

draw();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
