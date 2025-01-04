---
title: ConvolverNode
slug: Web/API/ConvolverNode
page-type: web-api-interface
browser-compat: api.ConvolverNode
---

{{APIRef("Web Audio API")}}

The `ConvolverNode` interface is an {{domxref("AudioNode")}} that performs a Linear Convolution on a given {{domxref("AudioBuffer")}}, often used to achieve a reverb effect. A `ConvolverNode` always has exactly one input and one output.

> [!NOTE]
> For more information on the theory behind Linear Convolution, see the [Convolution article on Wikipedia](https://en.wikipedia.org/wiki/Convolution).

{{InheritanceDiagram}}

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

## Instance properties

_Inherits properties from its parent, {{domxref("AudioNode")}}_.

- {{domxref("ConvolverNode.buffer")}}
  - : A mono, stereo, or 4-channel _{{domxref("AudioBuffer")}}_ containing the (possibly multichannel) impulse response used by the `ConvolverNode` to create the reverb effect.
- {{domxref("ConvolverNode.normalize")}}
  - : A boolean that controls whether the impulse response from the buffer will be scaled by an equal-power normalization when the `buffer` attribute is set, or not.

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("AudioNode")}}_.

## ConvolverNode Example

The following example shows basic usage of an AudioContext to create a convolver node.

> [!NOTE]
> You will need to find an impulse response to complete the example below. See this [CodePen](https://codepen.io/DonKarlssonSan/pen/doVKRE) for an applied example.

```js
let audioCtx = new window.AudioContext();

async function createReverb() {
  let convolver = audioCtx.createConvolver();

  // load impulse response from file
  let response = await fetch("path/to/impulse-response.wav");
  let arraybuffer = await response.arrayBuffer();
  convolver.buffer = await audioCtx.decodeAudioData(arraybuffer);

  return convolver;
}

// …

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
