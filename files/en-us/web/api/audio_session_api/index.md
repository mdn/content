---
title: Audio Session API
slug: Web/API/Audio_Session_API
page-type: web-api-overview
status:
  - experimental
browser-compat:
  - api.AudioSession
  - api.Navigator.audioSession
---

{{DefaultAPISidebar("Audio Session API")}}{{SeeCompatTable}}

The **Audio Session API** provides a mechanism for web applications to control how their audio interacts with other audio playing on a device.

## Concepts and usage

People increasingly consume media through the web, which has become a primary channel for accessing audio and video content. However, media on the web often lacks seamless integration with underlying platforms. The Audio Session API addresses this gap by enhancing media handling across platforms that support audio session management or audio focus features.

A web page can perform audio processing in various ways, combining different APIs like {{domxref("HTMLMediaElement")}} or {{domxref("AudioContext")}}. An **audio session** represents this aggregated audio processing and allows web pages to express the general nature of the audio processing done by the page.

The Audio Session API allows developers to:

- **Specify the type of audio** their application produces (such as playback, transient sounds, or recording).
- **Control how web audio interacts** with other applications playing audio on the device.

### Audio session types

The API supports several audio session types:

- `"auto"` — The default. The user agent automatically chooses the best type based on the audio APIs being used.
- `"playback"` — For media playback such as music or video. This type should not mix with other playback audio.
- `"transient"` — For short sounds like notifications. This type usually plays on top of other audio.
- `"transient-solo"` — For audio that should play exclusively, pausing all other audio (such as voice prompts).
- `"ambient"` — For audio that can mix with other audio sources.
- `"play-and-record"` — For applications that both play and record audio, such as video conferencing.

## Interfaces

- {{domxref("AudioSession")}} {{Experimental_Inline}}
  - : The main interface for controlling audio session behavior, including setting the audio session type.

### Extensions to other interfaces

The Audio Session API extends the following APIs:

#### Navigator

- {{domxref("Navigator.audioSession")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("AudioSession")}} object for the current document.

## Examples

### Setting up a video conferencing application

```js
// Configure audio session for video conferencing
navigator.audioSession.type = "play-and-record";

// Start playing remote media
remoteVideo.srcObject = remoteMediaStream;
remoteVideo.play();

// Start capturing local media
navigator.mediaDevices
  .getUserMedia({ audio: true, video: true })
  .then((stream) => {
    localVideo.srcObject = stream;
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AudioSession")}}
- {{domxref("Navigator.audioSession")}}
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- {{domxref("HTMLMediaElement")}}
