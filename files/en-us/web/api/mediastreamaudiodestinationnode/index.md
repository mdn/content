---
title: MediaStreamAudioDestinationNode
slug: Web/API/MediaStreamAudioDestinationNode
page-type: web-api-interface
tags:
  - API
  - Interface
  - MediaStreamAudioDestinationNode
  - Reference
  - Web Audio API
browser-compat: api.MediaStreamAudioDestinationNode
---
{{APIRef("Web Audio API")}}

The `MediaStreamAudioDestinationNode` interface represents an audio destination consisting of a [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}} with a single `AudioMediaStreamTrack`, which can be used in a similar way to a `MediaStream` obtained from {{domxref("MediaDevices.getUserMedia",
      "navigator.mediaDevices.getUserMedia()")}}.

It is an {{domxref("AudioNode")}} that acts as an audio destination, created using the {{domxref("AudioContext.createMediaStreamDestination()")}} method.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("MediaStreamAudioDestinationNode.MediaStreamAudioDestinationNode", "MediaStreamAudioDestinationNode()")}}
  - : Creates a new `MediaStreamAudioDestinationNode` object instance.

## Properties

_Inherits properties from its parent, {{domxref("AudioNode")}}_.

- {{domxref("MediaStreamAudioDestinationNode.stream")}}
  - : A {{domxref("MediaStream")}} containing a single {{domxref("MediaStreamTrack")}} whose {{domxref("MediaStreamTrack.kind", "kind")}} is `audio` and with the same number of channels as the node. You can use this property to get a stream out of the audio graph and feed it into another construct, such as a [Media Recorder](/en-US/docs/Web/API/MediaStream_Recording_API).

## Methods

_Inherits methods from its parent, {{domxref("AudioNode")}}_.

## Example

See [`AudioContext.createMediaStreamDestination()`](/en-US/docs/Web/API/AudioContext/createMediaStreamDestination#examples) for example code that creates a `MediaStreamAudioDestinationNode` and uses it as a source for audio to be recorded.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
