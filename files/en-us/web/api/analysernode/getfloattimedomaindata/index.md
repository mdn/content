---
title: AnalyserNode.getFloatTimeDomainData()
slug: Web/API/AnalyserNode/getFloatTimeDomainData
tags:
  - API
  - AnalyserNode
  - Method
  - Reference
  - Web Audio API
browser-compat: api.AnalyserNode.getFloatTimeDomainData
---
{{ APIRef("Web Audio API") }}

The **`getFloatTimeDomainData()`** method of the {{ domxref("AnalyserNode") }} Interface copies the current waveform, or time-domain, data into a {{jsxref("Float32Array")}} array passed into it.

## Syntax

```js
var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();
var dataArray = new Float32Array(analyser.fftSize); // Float32Array needs to be the same length as the fftSize
analyser.getFloatTimeDomainData(dataArray); // fill the Float32Array with data returned from getFloatTimeDomainData()
```

### Parameters

- `array`
  - : The {{jsxref("Float32Array")}} that the time domain data will be copied to.
    If the array has fewer elements than the {{domxref("AnalyserNode.frequencyBinCount")}}, excess elements are dropped. If it has more elements than needed, excess elements are ignored.

### Return value

None.

## Example

The following example shows basic usage of an {{domxref("AudioContext")}} to create an `AnalyserNode`, then {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} and {{htmlelement("canvas")}} to collect time domain data repeatedly and draw an "oscilloscope style" output of the current audio input. For more complete applied examples/information, check out our [Voice-change-O-matic-float-data](https://mdn.github.io/voice-change-o-matic-float-data/) demo (see the [source code](https://github.com/mdn/voice-change-o-matic-float-data) too).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 1024;
var bufferLength = analyser.fftSize;
console.log(bufferLength);
var dataArray = new Float32Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {
  drawVisual = requestAnimationFrame(draw);
  analyser.getFloatTimeDomainData(dataArray);

  canvasCtx.fillStyle = 'rgb(200, 200, 200)';
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
  canvasCtx.beginPath();

  var sliceWidth = WIDTH * 1.0 / bufferLength;
  var x = 0;

  for(var i = 0; i < bufferLength; i++) {
    var v = dataArray[i] * 200.0;
    var y = HEIGHT/2 + v;

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
