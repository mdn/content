---
title: MediaStreamTrackAudioSourceNode
slug: Web/API/MediaStreamTrackAudioSourceNode
page-type: web-api-interface
browser-compat: api.MediaStreamTrackAudioSourceNode
---
{{APIRef("Web Audio API")}}

The **`MediaStreamTrackAudioSourceNode`** interface is a type of {{domxref("AudioNode")}} which represents a source of audio data taken from a specific {{domxref("MediaStreamTrack")}} obtained through the [WebRTC](/en-US/docs/Web/API/WebRTC_API) or [Media Capture and Streams](/en-US/docs/Web/API/Media_Streams_API) APIs.

The audio itself might be input from a microphone or other audio sampling device, or might be received through a {{domxref("RTCPeerConnection")}}, among other possible options.

A `MediaStreamTrackAudioSourceNode` has no inputs and exactly one output, and is created using the {{domxref("AudioContext.createMediaStreamTrackSource()")}} method. This interface is similar to {{domxref("MediaStreamAudioSourceNode")}}, except it lets you specifically state the track to use, rather than assuming the first audio track on a stream.

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
        defined by the first audio {{domxref("MediaStreamTrack")}}
        passed to the
        {{domxref("AudioContext.createMediaStreamTrackSource()")}}
        method that created it.
      </td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("MediaStreamTrackAudioSourceNode.MediaStreamTrackAudioSourceNode", "new MediaStreamTrackAudioSourceNode()")}}
  - : Creates a new `MediaStreamTrackAudioSourceNode` object instance with the specified options.

## Properties

_The `MediaStreamTrackAudioSourceNode` interface has no properties of its own; however, it inherits the properties of its parent, {{domxref("AudioNode")}}._

## Methods

_Inherits methods from its parent, {{domxref("AudioNode")}}_.

## Example

See [`AudioContext.createMediaStreamSource()`](/en-US/docs/Web/API/AudioContext/createMediaStreamSource#example) for example code that uses this object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Media Capture and Streams API (Media Streams)](/en-US/docs/Web/API/Media_Streams_API)
- {{domxref("MediaStreamAudioSourceNode")}}
