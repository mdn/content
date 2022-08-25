---
title: MediaElementAudioSourceNode
slug: Web/API/MediaElementAudioSourceNode
page-type: web-api-interface
tags:
  - API
  - Audio
  - AudioNode
  - Interface
  - MediaElementAudioSourceNode
  - Reference
  - Web Audio API
browser-compat: api.MediaElementAudioSourceNode
---
{{APIRef("Web Audio API")}}

The `MediaElementAudioSourceNode` interface represents an audio source consisting of an HTML {{ htmlelement("audio") }} or {{ htmlelement("video") }} element. It is an {{domxref("AudioNode")}} that acts as an audio source.

A `MediaElementAudioSourceNode` has no inputs and exactly one output, and is created using the {{domxref("AudioContext.createMediaElementSource()")}} method. The number of channels in the output equals the number of channels of the audio referenced by the {{domxref("HTMLMediaElement")}} used in the creation of the node, or is 1 if the {{domxref("HTMLMediaElement")}} has no audio.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td>
        2 (but note that {{domxref("AudioNode.channelCount")}} is only used for up-mixing and down-mixing {{domxref("AudioNode")}} inputs, and {{domxref("MediaElementAudioSourceNode")}} doesn't have any input)
      </td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("MediaElementAudioSourceNode.MediaElementAudioSourceNode", "MediaElementAudioSourceNode()")}}
  - : Creates a new `MediaElementAudioSourceNode` object instance.

## Properties

_Inherits properties from its parent, {{domxref("AudioNode")}}_.

- {{domxref("MediaElementAudioSourceNode.mediaElement", "mediaElement")}} {{ReadOnlyInline}}
  - : The {{domxref("HTMLMediaElement")}} used when constructing this `MediaStreamAudioSourceNode`.

## Methods

_Inherits methods from its parent, {{domxref("AudioNode")}}_.

## Example

See [`AudioContext.createMediaElementSource()`](/en-US/docs/Web/API/AudioContext/createMediaElementSource#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
