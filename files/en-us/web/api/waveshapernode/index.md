---
title: WaveShaperNode
slug: Web/API/WaveShaperNode
page-type: web-api-interface
browser-compat: api.WaveShaperNode
---

{{ APIRef("Web Audio API") }}

The **`WaveShaperNode`** interface represents a non-linear distorter.

It is an {{domxref("AudioNode")}} that uses a curve to apply a wave shaping distortion to the signal. Beside obvious distortion effects, it is often used to add a warm feeling to the signal.

A `WaveShaperNode` always has exactly one input and one output.

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
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code> (not used in the default count mode)</td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("WaveShaperNode.WaveShaperNode", "WaveShaperNode()")}}
  - : Creates a new instance of an `WaveShaperNode` object.

## Instance properties

_Inherits properties from its parent, {{domxref("AudioNode")}}_.

- {{domxref("WaveShaperNode.curve")}}
  - : A {{jsxref("Float32Array")}} of numbers describing the distortion to apply.
- {{domxref("WaveShaperNode.oversample")}}
  - : An enumerated value indicating if oversampling must be used. Oversampling is a technique for creating more samples (up-sampling) before applying the distortion effect to the audio signal.

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("AudioNode")}}_.

## Example

See [`BaseAudioContext.createWaveShaper()`](/en-US/docs/Web/API/BaseAudioContext/createWaveShaper#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
