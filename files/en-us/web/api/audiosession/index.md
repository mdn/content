---
title: AudioSession
slug: Web/API/AudioSession
page-type: web-api-interface
status:
  - experimental
browser-compat: api.AudioSession
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

The **`AudioSession`** interface of the [Audio Session API](/en-US/docs/Web/API/Audio_Session_API) provides methods for controlling how audio from a web application interacts with other audio playing on a device.

An audio session represents aggregated audio processing from a web page. It allows web pages to express the general nature of the audio processing done by the page, such as playback, recording, or transient sounds like notifications. The platform can then use this information to determine how web-based audio should interact with other applications on the device, for example whether web audio should pause or duck other audio.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("AudioSession.type")}} {{Experimental_Inline}}
  - : A string representing the type of the audio session. Possible values include `"auto"`, `"playback"`, `"transient"`, `"transient-solo"`, `"ambient"`, and `"play-and-record"`.

## Examples

### Setting the audio session type for a video conferencing app

The following example sets the audio session type to `"play-and-record"`, which is appropriate for applications that both play and record audio, such as video conferencing applications:

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
