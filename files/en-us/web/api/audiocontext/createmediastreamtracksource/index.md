---
title: AudioContext.createMediaStreamTrackSource()
slug: Web/API/AudioContext/createMediaStreamTrackSource
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - AudioContext
  - MediaStreamTrack
  - MediaStreamTrackAudioSource
  - Method
  - Node
  - Reference
  - Web Audio API
  - createMediaStreamTrackSource
  - sound
  - source
  - track
browser-compat: api.AudioContext.createMediaStreamTrackSource
---
{{ APIRef("Web Audio API") }}

The **`createMediaStreamTrackSource()`** method of the {{
  domxref("AudioContext") }} interface creates and returns a
{{domxref("MediaStreamTrackAudioSourceNode")}} which represents an audio source whose
data comes from the specified {{domxref("MediaStreamTrack")}}.

This differs from {{domxref("AudioContext.createMediaStreamSource",
  "createMediaStreamSource()")}}, which creates a
{{domxref("MediaStreamAudioSourceNode")}} whose audio comes from the audio track in a
specified {{domxref("MediaStream")}} whose {{domxref("MediaStreamTrack.id", "id")}} is
first, lexicographically (alphabetically).

## Syntax

```js
createMediaStreamTrackSource(track)
```

### Parameters

- `track`
  - : The {{domxref("MediaStreamTrack")}} to use as the source of all audio data for the
    new node.

### Return value

A {{domxref("MediaStreamTrackAudioSourceNode")}} object which acts as a source for
audio data found in the specified audio track.

## Examples

In this example, {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} is used to
request access to the user's microphone. Once that access is attained, an audio context
is established and a {{domxref("MediaStreamTrackAudioSourceNode")}} is created using
`createMediaStreamTrackSource()`, taking its audio from the first audio track
in the stream returned by `getUserMedia()`.

Then a {{domxref("BiquadFilterNode")}} is created using
{{domxref("BaseAudioContext/createBiquadFilter", "createBiquadFilter()")}}, and it's
configured as desired to perform a lowshelf filter on the audio coming from the source.
The output from the microphone is then routed into the new biquad filter, and the
filter's output is in turn routed to the audio context's
{{domxref("BaseAudioContext/destination", "destination")}}.

```js
navigator.mediaDevices.getUserMedia ({audio: true, video: false})
.then((stream) => {
  audio.srcObject = stream;
  audio.onloadedmetadata = (e) => {
    audio.play();
    audio.muted = true;
  };

  let audioCtx = new AudioContext();
  let audioTracks = stream.getAudioTracks();
  let source = audioCtx.createMediaStreamTrackSource(audioTracks[0]);

  let biquadFilter = audioCtx.createBiquadFilter();
  biquadFilter.type = "lowshelf";
  biquadFilter.frequency.value = 3000;
  biquadFilter.gain.value = 20;

  source.connect(biquadFilter);
  biquadFilter.connect(audioCtx.destination);
})
.catch((err) => {
  // Handle getUserMedia() error
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Web Audio API
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("MediaStreamTrackAudioSource")}}
