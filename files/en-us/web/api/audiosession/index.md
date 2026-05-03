---
title: AudioSession
slug: Web/API/AudioSession
page-type: web-api-interface
status:
  - experimental
browser-compat: api.AudioSession
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

The **`AudioSession`** interface of the [Audio Session API](/en-US/docs/Web/API/Audio_Session_API) lets a web page declare the purpose of the audio it is producing — for example music playback, a video call, or a short notification. The platform uses that declaration to decide what should happen to audio from other apps and browser tabs — whether to pause it, duck it (lower its volume), or let it play alongside.

An audio session is the spec's term for the per-page object that holds this declaration; see the [Audio Session API](/en-US/docs/Web/API/Audio_Session_API) overview for the underlying model.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("AudioSession.type")}} {{Experimental_Inline}}
  - : A string representing the type of the audio session. Possible values include `"auto"`, `"playback"`, `"transient"`, `"transient-solo"`, `"ambient"`, and `"play-and-record"`.

## Examples

### Setting the audio session type for a video conferencing app

The following example sets the audio session type to `"play-and-record"` for a video conferencing application. On supporting platforms, this signals that the page needs simultaneous playback and recording, which may cause the system to route audio through the correct output (for example, earpiece instead of speaker on mobile devices) and prevent other applications' audio from interrupting the call.

```js
navigator.audioSession.type = "play-and-record";

// Start playing remote media
remoteVideo.srcObject = remoteMediaStream;
remoteVideo.play();

// Start capturing local media
const stream = await navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true,
});
localVideo.srcObject = stream;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Navigator.audioSession")}}
- [Audio Session API](/en-US/docs/Web/API/Audio_Session_API)
