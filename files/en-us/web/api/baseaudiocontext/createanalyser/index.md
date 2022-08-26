---
title: BaseAudioContext.createAnalyser()
slug: Web/API/BaseAudioContext/createAnalyser
page-type: web-api-instance-method
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - Method
  - Reference
  - Web Audio API
  - createAnalyser
browser-compat: api.BaseAudioContext.createAnalyser
---
{{APIRef("Web Audio API")}}

The `createAnalyser()` method of the
{{domxref("BaseAudioContext")}} interface creates an {{domxref("AnalyserNode")}}, which
can be used to expose audio time and frequency data and create data visualizations.

> **Note:** The {{domxref("AnalyserNode.AnalyserNode", "AnalyserNode()")}} constructor is the
> recommended way to create an {{domxref("AnalyserNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

> **Note:** For more on using this node, see the
> {{domxref("AnalyserNode")}} page.

## Syntax

```js
createAnalyser()
```

### Parameters

None.

### Return value

An {{domxref("AnalyserNode")}}.

## Examples

The following example shows basic usage of an AudioContext to create an Analyser node,
then use requestAnimationFrame() to collect time domain data repeatedly and draw an
"oscilloscope style" output of the current audio input. For more complete applied
examples/information, check out our [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) demo (see
[app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205) for relevant code).

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
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

      canvasCtx.fillStyle = 'rgb(200, 200, 200)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

      canvasCtx.beginPath();

      const sliceWidth = WIDTH * 1.0 / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {

        const v = dataArray[i] / 128.0;
        const y = v * HEIGHT/2;

        if (i === 0) {
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
