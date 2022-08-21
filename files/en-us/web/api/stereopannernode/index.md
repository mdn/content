---
title: StereoPannerNode
slug: Web/API/StereoPannerNode
page-type: web-api-interface
tags:
  - API
  - Audio
  - Interface
  - Reference
  - StereoPannerNode
  - Web Audio API
browser-compat: api.StereoPannerNode
---
{{APIRef("Web Audio API")}}

The `StereoPannerNode` interface of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) represents a simple stereo panner node that can be used to pan an audio stream left or right. It is an {{domxref("AudioNode")}} audio-processing module that positions an incoming audio stream in a stereo image using a low-cost equal-power [panning algorithm](https://webaudio.github.io/web-audio-api/#panning-algorithm).

The {{domxref("StereoPannerNode.pan", "pan")}} property takes a unitless value between `-1` (full left pan) and `1` (full right pan). This interface was introduced as a much simpler way to apply a simple panning effect than having to use a full {{domxref("PannerNode")}}.

![](stereopannernode.png)

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
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("StereoPannerNode.StereoPannerNode", "StereoPannerNode()")}}
  - : Creates a new instance of a `StereoPannerNode` object.

## Properties

_Inherits properties from its parent, {{domxref("AudioNode")}}_.

- {{domxref("StereoPannerNode.pan")}} {{ReadOnlyInline}}
  - : An [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representing the amount of panning to apply.

## Methods

_No specific method; inherits methods from its parent, {{domxref("AudioNode")}}_.

## Example

See [`BaseAudioContext.createStereoPanner()`](/en-US/docs/Web/API/BaseAudioContext/createStereoPanner#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
