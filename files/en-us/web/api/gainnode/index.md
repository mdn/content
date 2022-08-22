---
title: GainNode
slug: Web/API/GainNode
page-type: web-api-interface
tags:
  - API
  - GainNode
  - Interface
  - Reference
  - Web Audio API
browser-compat: api.GainNode
---
{{ APIRef("Web Audio API") }}

The `GainNode` interface represents a change in volume. It is an {{domxref("AudioNode")}} audio-processing module that causes a given gain to be applied to the input data before its propagation to the output. A `GainNode` always has exactly one input and one output, both with the same number of channels.

The gain is a unitless value, changing with time, that is multiplied to each corresponding sample of all input channels. If modified, the new gain is instantly applied, causing unaesthetic 'clicks' in the resulting audio. To prevent this from happening, never change the value directly but use the exponential interpolation methods on the {{domxref("AudioParam")}} interface.

![The GainNode is increasing the gain of the output.](webaudiogainnode.png)

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

- {{domxref("GainNode.GainNode", "GainNode()")}}
  - : Creates and returns a new `GainNode` object. As an alternative, you can use the {{domxref("BaseAudioContext.createGain()")}} factory method; see [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Properties

_Inherits properties from its parent, {{domxref("AudioNode")}}_.

- {{domxref("GainNode.gain")}} {{ReadOnlyInline}}
  - : An [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representing the amount of gain to apply. You have to set {{domxref("AudioParam.value")}} or use the methods of `AudioParam` to change the effect of gain.

## Methods

_No specific method; inherits methods from its parent, {{domxref("AudioNode")}}_.

## Example

See [`BaseAudioContext.createGain()`](/en-US/docs/Web/API/BaseAudioContext/createGain#example) for example code showing how to use an `AudioContext` to create a `GainNode`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
