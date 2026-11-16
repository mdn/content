---
title: Audio Session API
slug: Web/API/Audio_Session_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.AudioSession
---

{{DefaultAPISidebar("Audio Session API")}}{{SeeCompatTable}}

The **Audio Session API** provides a mechanism for web applications to control how their audio interacts with other audio playing on a device.

## Concepts and usage

People increasingly consume media through the web: it is now a primary channel for accessing audio and video content. However, media on the web often lacks seamless integration with underlying platforms. The Audio Session API addresses this gap by allowing developers to specify how the audio produced by their web applications interacts with audio from other applications on the device — for example, playing along with other audio, ducking it (reducing its volume), or pausing it so their audio can play on its own.

A web page can perform audio processing in various ways using APIs such as {{domxref("HTMLMediaElement")}} and the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API). An **audio session** represents the aggregated audio produced by a web page, enabling it to express the general nature of its audio output.

### Audio session types

The API supports several audio session types, which specify the type of audio an application is producing:

- `"auto"` — The default. The user agent automatically chooses the best type based on the audio APIs being used.
- `"playback"` — For media playback such as music or video. This type should not mix with other audio playback.
- `"transient"` — For short sounds like notifications. This type usually plays on top of other audio.
- `"transient-solo"` — For audio that should play exclusively, pausing all other audio (such as voice prompts).
- `"ambient"` — For audio that can mix with other audio sources.
- `"play-and-record"` — For applications that both play and record audio, such as video conferencing.

#### `auto` type selection

When `type` is set to `"auto"`, the user agent selects a type based on the audio APIs and elements in the page that are outputting audio.

Each audio-producing feature has its own default type:

- an {{domxref("AudioContext")}} defaults to `"ambient"`
- an {{domxref("HTMLMediaElement")}} (such as `<audio>` or `<video>`) defaults to `"playback"`
- a microphone {{domxref("MediaStreamTrack")}} obtained via {{domxref("MediaDevices.getUserMedia()", "getUserMedia()")}} defaults to `"play-and-record"`

If several of these are active on the page at once, the automatically-selected type is the highest-priority one present, using the order `"play-and-record"`, `"playback"`, `"transient-solo"`, `"transient"`.
The type falls back to `"ambient"` if none of them are active.
For example, a page that is both recording a microphone track and playing a `<video>` resolves to `"play-and-record"`.

Note that `"transient"` and `"transient-solo"` have no default source of their own, so these types must be set explicitly.

### Audio session states

An audio session also has a state, reflecting whether it is currently producing audio, idle, or temporarily suspended by the platform:

- `"active"` — The audio session is playing sound, recording audio, or both (and is not interrupted).
- `"interrupted"` — The session was active but has been temporarily suspended by the platform, for example because of an incoming phone call or another application taking exclusive control of audio.
- `"inactive"` — The audio session is not playing or recording audio, and is not currently interrupted. This is the default state.

The session is active while any element or other mechanism in the page is producing or capturing audio, and becomes inactive once all audio sources and sinks have stopped.

The {{domxref("AudioSession.statechange_event", "statechange")}} event fires whenever the state changes, letting a page react to interruptions — for example, by pausing playback that the platform doesn't already pause automatically.

## Interfaces

- {{domxref("AudioSession")}} {{Experimental_Inline}}
  - : The main interface for controlling audio session behavior, including setting the audio session type and tracking its state.

### Extensions to other interfaces

- {{domxref("Navigator.audioSession")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("AudioSession")}} object for the current document.

## Examples

### Setting up a video conferencing audio session

In a video conferencing application, both playback and recording are required simultaneously; this is something the Audio Session API can help with.

First, we check that the interface is supported, and if so we set the audio session type to `"play-and-record"`.
This informs the platform that this page requires microphone access alongside audio output, which in turn may then adjust system volume routing (for example, using the earpiece instead of the speaker on mobile devices) and prevent audio from other applications from interrupting the call.

```js
if ("audioSession" in navigator) {
  navigator.audioSession.type = "play-and-record";
}
```

Next, we set up the media streams for the video call as usual. The platform will now handle the audio produced by these streams according to the `"play-and-record"` session type.

```js
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

The following code listens for the {{domxref("AudioSession.statechange_event", "statechange")}} event.
If the session state is `"interrupted"` by the platform, for example due to an incoming phone call, the handler pauses unmuted local and remote video while the interruption lasts (the platform itself will pause and restart any elements that have an audible output).

```js
// Pause local playback and recording while the platform interrupts the call
navigator.audioSession.addEventListener("statechange", () => {
  const interrupted = navigator.audioSession.state === "interrupted";

  // remoteVideo is the audio/video from the remote end.
  // We pause it on interruption if it was muted (and hence not paused automatically)
  if (remoteVideo.muted) {
    if (interrupted) {
      remoteVideo.pause();
    } else {
      remoteVideo.play();
    }
  }

  // localVideo is the preview for the local user.
  // This is typically muted by default,
  // so the page must pause and resume it explicitly.
  if (interrupted) {
    localVideo.pause();
  } else {
    localVideo.play();
  }
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
