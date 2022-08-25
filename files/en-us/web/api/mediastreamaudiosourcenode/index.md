---
title: MediaStreamAudioSourceNode
slug: Web/API/MediaStreamAudioSourceNode
page-type: web-api-interface
tags:
  - API
  - Audio
  - AudioNode
  - Interface
  - Media
  - MediaStream
  - MediaStreamAudioSourceNode
  - MediaStreamTrack
  - Reference
  - Web
  - Web Audio API
  - WebRTC
  - getusermedia
  - sound
  - stream
  - track
browser-compat: api.MediaStreamAudioSourceNode
---
{{APIRef("Web Audio API")}}

The **`MediaStreamAudioSourceNode`** interface is a type of {{domxref("AudioNode")}} which operates as an audio source whose media is received from a {{domxref("MediaStream")}} obtained using the WebRTC or Media Capture and Streams APIs.

This media could be from a microphone (through {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}) or from a remote peer on a WebRTC call (using the {{domxref("RTCPeerConnection")}}'s audio tracks).

A `MediaStreamAudioSourceNode` has no inputs and exactly one output, and is created using the {{domxref("AudioContext.createMediaStreamSource()")}} method.

The `MediaStreamAudioSourceNode` takes the audio from the _first_ {{domxref("MediaStreamTrack")}} whose {{domxref("MediaStreamTrack.kind", "kind")}} attribute's value is `audio`. See [Track ordering](#track_ordering) for more information about the order of tracks.

The number of channels output by the node matches the number of tracks found in the selected audio track.

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
        2 (but note that {{domxref("AudioNode.channelCount")}} is only used for up-mixing and down-mixing {{domxref("AudioNode")}} inputs, and {{domxref("MediaStreamAudioSourceNode")}} doesn't have any input)
      </td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode", "new MediaStreamAudioSourceNode()")}}
  - : Creates a new `MediaStreamAudioSourceNode` object instance with the specified options.

## Properties

_In addition to the following properties, `MediaStreamAudioSourceNode` inherits the properties of its parent, {{domxref("AudioNode")}}._

- {{domxref("MediaStreamAudioSourceNode.mediaStream", "mediaStream")}} {{ReadOnlyInline}}
  - : The {{domxref("MediaStream")}} used when constructing this `MediaStreamAudioSourceNode`.

## Methods

_Inherits methods from its parent, {{domxref("AudioNode")}}_.

## Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the stream specified by the `mediaStream` parameter does not contain any audio tracks.

## Usage notes

### Track ordering

For the purposes of the `MediaStreamTrackAudioSourceNode` interface, the order of the audio tracks on the stream is determined by taking the tracks whose {{domxref("MediaStreamTrack.kind", "kind")}} is `audio`, then sorting the tracks by their {{domxref("MediaStreamTrack.id", "id")}} property's values, in Unicode code point order (essentially, in alphabetical or lexicographical order, for IDs which are simple alphanumeric strings).

The **first** track, then, is the track whose `id` comes first when the tracks' IDs are all sorted by Unicode code point.

However, it's important to note that the rule establishing this ordering was added long after this interface was first introduced into the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API). As such, you can't easily rely on the order matching between any two browsers or browser versions.

The {{domxref("MediaStreamTrackAudioSourceNode")}} interface is similar to `MediaStreamAudioSourceNode`, but avoids this problem by letting you specify which track you want to use.

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
- {{domxref("MediaStreamTrackAudioSourceNode")}}
