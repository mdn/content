---
title: DynamicsCompressorNode
slug: Web/API/DynamicsCompressorNode
tags:
  - API
  - Audio
  - DynamicsCompressorNode
  - Interface
  - Media
  - Reference
  - Web Audio API
browser-compat: api.DynamicsCompressorNode
---
{{ APIRef("Web Audio API") }}

The `DynamicsCompressorNode` interface provides a compression effect, which lowers the volume of the loudest parts of the signal in order to help prevent clipping and distortion that can occur when multiple sounds are played and multiplexed together at once. This is often used in musical production and game audio. `DynamicsCompressorNode` is an {{domxref("AudioNode")}} that has exactly one input and one output.

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
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("DynamicsCompressorNode.DynamicsCompressorNode", "DynamicsCompressorNode()")}}
  - : Creates a new instance of an `DynamicsCompressorNode` object.

## Properties

_Inherits properties from its parent, {{domxref("AudioNode")}}_.

- {{domxref("DynamicsCompressorNode.threshold")}} {{readonlyInline}}
  - : Is a [k-rate](/en-US/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} representing the decibel value above which the compression will start taking effect.
- {{domxref("DynamicsCompressorNode.knee")}} {{readonlyInline}}
  - : Is a [k-rate](/en-US/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} containing a decibel value representing the range above the threshold where the curve smoothly transitions to the compressed portion.
- {{domxref("DynamicsCompressorNode.ratio")}} {{readonlyInline}}
  - : Is a [k-rate](/en-US/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} representing the amount of change, in dB, needed in the input for a 1 dB change in the output.
- {{domxref("DynamicsCompressorNode.reduction")}} {{readonlyInline}}
  - : Is a `float` representing the amount of gain reduction currently applied by the compressor to the signal.
- {{domxref("DynamicsCompressorNode.attack")}} {{readonlyInline}}
  - : Is a [k-rate](/en-US/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} representing the amount of time, in seconds, required to reduce the gain by 10 dB.
- {{domxref("DynamicsCompressorNode.release")}} {{readonlyInline}}
  - : Is a [k-rate](/en-US/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} representing the amount of time, in seconds, required to increase the gain by 10 dB.

## Methods

_No specific methods; inherits methods from its parent, {{domxref("AudioNode")}}_.

## Example

See [`BaseAudioContext.createDynamicsCompressor()`](/en-US/docs/Web/API/BaseAudioContext/createDynamicsCompressor#example) example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
