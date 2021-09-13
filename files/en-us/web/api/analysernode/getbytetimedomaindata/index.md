---
title: AnalyserNode.getByteTimeDomainData()
slug: Web/API/AnalyserNode/getByteTimeDomainData
tags:
  - API
  - AnalyserNode
  - Method
  - Reference
  - Web Audio API
browser-compat: api.AnalyserNode.getByteTimeDomainData
---
{{ APIRef("Mountain View APIRef Project") }}

The **`getByteTimeDomainData()`** method of the {{ domxref("AnalyserNode") }} Interface copies the current waveform, or time-domain, data into a {{jsxref("Uint8Array")}} (unsigned byte array) passed into it.

If the array has fewer elements than the {{domxref("AnalyserNode.fftSize")}}, excess elements are dropped. If it has more elements than needed, excess elements are ignored.

## Syntax

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
const dataArray = new Uint8Array(analyser.fftSize); // Uint8Array should be the same length as the fftSize
analyser.getByteTimeDomainData(dataArray); // fill the Uint8Array with data returned from getByteTimeDomainData()
```

### Parameters

- `array`
  - : The {{jsxref("Uint8Array")}} that the time domain data will be copied to.
    If the array has fewer elements than the {{domxref("AnalyserNode.fftSize")}}, excess elements are dropped. If it has more elements than needed, excess elements are ignored.

### Return value

**`void`** | None

## Example

The following example shows basic usage of an {{domxref("AudioContext")}} to create an `AnalyserNode`, then {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} and {{htmlelement("canvas")}} to collect time domain data repeatedly and draw an "oscilloscope style" output of the current audio input. For more complete applied examples/information, check out our [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) demo (see [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205) for relevant code).

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 2048;
const bufferLength = analyser.fftSize;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// draw an oscilloscope of the current audio source
function draw() {
  drawVisual = requestAnimationFrame(draw);
  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = 'rgb(200, 200, 200)';
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

  const sliceWidth = WIDTH * 1.0 / bufferLength;
  let x = 0;

  canvasCtx.beginPath();
  for(var i = 0; i < bufferLength; i++) {
    const v = dataArray[i]/128.0;
    const y = v * HEIGHT/2;

    if(i === 0)
      canvasCtx.moveTo(x, y);
    else
      canvasCtx.lineTo(x, y);

    x += sliceWidth;
  }

  canvasCtx.lineTo(WIDTH, HEIGHT/2);
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
