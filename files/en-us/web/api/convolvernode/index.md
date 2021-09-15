---
title: ConvolverNode
slug: Web/API/ConvolverNode
tags:
  - API
  - ConvolverNode
  - Interface
  - Reference
  - Web Audio API
browser-compat: api.ConvolverNode
---
{{APIRef("Web Audio API")}}

The `ConvolverNode` interface is an {{domxref("AudioNode")}} that performs a Linear Convolution on a given {{domxref("AudioBuffer")}}, often used to achieve a reverb effect. A `ConvolverNode` always has exactly one input and one output.

> **Note:** For more information on the theory behind Linear Convolution, see the [Convolution article on Wikipedia](https://en.wikipedia.org/wiki/Convolution).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"clamped-max"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>1</code>, <code>2</code>, or <code>4</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("ConvolverNode.ConvolverNode()", "ConvolverNode()")}}
  - : Creates a new `ConvolverNode` object instance.

## Properties

_Inherits properties from its parent, {{domxref("AudioNode")}}_.

- {{domxref("ConvolverNode.buffer")}}
  - : A mono, stereo, or 4-channel _{{domxref("AudioBuffer")}}_ containing the (possibly multichannel) impulse response used by the `ConvolverNode` to create the reverb effect.
- {{domxref("ConvolverNode.normalize")}}
  - : A boolean that controls whether the impulse response from the buffer will be scaled by an equal-power normalization when the `buffer` attribute is set, or not.

## Methods

_No specific method; inherits methods from its parent, {{domxref("AudioNode")}}_.

## ConvolverNode Example

The following example shows basic usage of an AudioContext to create a convolver node.

> **Note:** You will need to find an impulse response to complete the example below. See this [Codepen](https://codepen.io/DonKarlssonSan/pen/doVKRE) for an applied example.

```js
let audioCtx = new window.AudioContext();

async function createReverb() {
    let convolver = audioCtx.createConvolver();

    // load impulse response from file
    let response     = await fetch("path/to/impulse-response.wav");
    let arraybuffer  = await response.arrayBuffer();
    convolver.buffer = await audioCtx.decodeAudioData(arraybuffer);

    return convolver;
}

...

let reverb = await createReverb();

// someOtherAudioNode -> reverb -> destination
someOtherAudioNode.connect(reverb);
reverb.connect(audioCtx.destination);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
