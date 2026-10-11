---
title: "AudioSession: statechange event"
short-title: statechange
slug: Web/API/AudioSession/statechange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.AudioSession.statechange_event
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

A **`statechange`** event fires on an {{domxref("AudioSession")}} when its {{domxref("AudioSession.state", "state")}} property changes.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Description

The `state` value changes in response to the page's own audio activity, becoming `"active"` when any audio source or sink in the page is active and `"inactive"` when all audio sources and sinks are stopped.
It can also change to `"interrupted"` in response to a platform-level event such as an incoming phone call or another application taking exclusive control of audio.

When the state changes to or from `"interrupted"`, the browser automatically pauses or resumes audible media elements, suspends or resumes `AudioContext`s, and mutes or unmutes microphone tracks belonging to the session.

The **`statechange`** event allows you to monitor for state changes and perform any operations that aren't handled automatically.
This includes whether or not to pause muted video, or continue to stream an outgoing {{domxref("MediaStreamTrack")}}.

## Examples

### Handling an interruption in a video call

This example shows how code might handle a `statechange` event during a video call.

`remoteVideo` plays the audio from the other participant, so while it's audible the browser pauses and resumes it automatically.
If the user has muted the other participant, though, `remoteVideo` isn't audible and the browser leaves it alone.

`localVideo` shows the user's own camera preview (which is muted).
This and the outgoing microphone track must be paused, resumed, muted, and unmuted by the page itself if needed.

```js
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

  // Whether an outgoing track is enabled is always up to the page.
  microphoneTrack.enabled = !interrupted;

  // Control the display of a banner
  // ... and so on ...
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AudioSession")}}
- {{domxref("AudioSession.state")}}
- [Audio Session API](/en-US/docs/Web/API/Audio_Session_API)
