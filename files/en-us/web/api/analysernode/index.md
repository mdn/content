---
title: AnalyserNode
slug: Web/API/AnalyserNode
page-type: web-api-interface
tags:
  - API
  - AnalyserNode
  - Interface
  - Reference
  - Web Audio API
browser-compat: api.AnalyserNode
---
{{APIRef("Web Audio API")}}

The **`AnalyserNode`** interface represents a node able to provide real-time frequency and time-domain analysis information. It is an {{domxref("AudioNode")}} that passes the audio stream unchanged from the input to the output, but allows you to take the generated data, process it, and create audio visualizations.

An `AnalyserNode` has exactly one input and one output. The node works even if the output is not connected.

![Without modifying the audio stream, the node allows to get the frequency and time-domain data associated to it, using a FFT.](fttaudiodata_en.svg)

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>1</code> (but may be left unconnected)</td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("AnalyserNode.AnalyserNode", "AnalyserNode()")}}
  - : Creates a new instance of an `AnalyserNode` object.

## Properties

_Inherits properties from its parent, {{domxref("AudioNode")}}_.

- {{domxref("AnalyserNode.fftSize")}}
  - : An unsigned long value representing the size of the FFT ([Fast Fourier Transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform)) to be used to determine the frequency domain.
- {{domxref("AnalyserNode.frequencyBinCount")}} {{ReadOnlyInline}}
  - : An unsigned long value half that of the FFT size. This generally equates to the number of data values you will have to play with for the visualization.
- {{domxref("AnalyserNode.minDecibels")}}
  - : A double value representing the minimum power value in the scaling range for the FFT analysis data, for conversion to unsigned byte values — basically, this specifies the minimum value for the range of results when using `getByteFrequencyData()`.
- {{domxref("AnalyserNode.maxDecibels")}}
  - : A double value representing the maximum power value in the scaling range for the FFT analysis data, for conversion to unsigned byte values — basically, this specifies the maximum value for the range of results when using `getByteFrequencyData()`.
- {{domxref("AnalyserNode.smoothingTimeConstant")}}
  - : A double value representing the averaging constant with the last analysis frame — basically, it makes the transition between values over time smoother.

## Methods

_Inherits methods from its parent, {{domxref("AudioNode")}}_.

- {{domxref("AnalyserNode.getFloatFrequencyData()")}}
  - : Copies the current frequency data into a {{jsxref("Float32Array")}} array passed into it.
- {{domxref("AnalyserNode.getByteFrequencyData()")}}
  - : Copies the current frequency data into a {{jsxref("Uint8Array")}} (unsigned byte array) passed into it.
- {{domxref("AnalyserNode.getFloatTimeDomainData()")}}
  - : Copies the current waveform, or time-domain, data into a {{jsxref("Float32Array")}} array passed into it.
- {{domxref("AnalyserNode.getByteTimeDomainData()")}}
  - : Copies the current waveform, or time-domain, data into a {{jsxref("Uint8Array")}} (unsigned byte array) passed into it.

## Examples

> **Note:** See the guide [Visualizations with Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API) for more information on creating audio visualizations.

### Basic usage

The following example shows basic usage of an {{domxref("AudioContext")}} to create an `AnalyserNode`, then {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} and {{htmlelement("canvas")}} to collect time domain data repeatedly and draw an "oscilloscope style" output of the current audio input. For more complete applied examples/information, check out our [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) demo (see [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205) for relevant code).

```js
const audioCtx = new(window.AudioContext || window.webkitAudioContext)();

// …

const analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// Connect the source to be analysed
source.connect(analyser);

// Get a canvas defined with ID "oscilloscope"
const canvas = document.getElementById("oscilloscope");
const canvasCtx = canvas.getContext("2d");

// draw an oscilloscope of the current audio source

function draw() {

  requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = "rgb(200, 200, 200)";
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0, 0, 0)";

  canvasCtx.beginPath();

  const sliceWidth = canvas.width * 1.0 / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {

    const v = dataArray[i] / 128.0;
    const y = v * canvas.height / 2;

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
