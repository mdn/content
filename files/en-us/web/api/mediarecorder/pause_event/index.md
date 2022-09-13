---
title: "MediaRecorder: pause event"
slug: Web/API/MediaRecorder/pause_event
page-type: web-api-event
tags:
  - API
  - Audio
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Event
  - Reference
  - Video
  - pause
browser-compat: api.MediaRecorder.pause_event
---

{{APIRef("Media Recorder API")}}

The `pause` event is thrown as a result of the
{{domxref("MediaRecorder.pause()")}} method being invoked.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("pause", (event) => {});

onpause = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Example

```js
pause.onclick = () => {
  if (mediaRecorder.state === "recording") {
    mediaRecorder.pause();
    // recording paused
  } else if (mediaRecorder.state === "paused") {
    mediaRecorder.resume();
    // resume recording
  }
}

mediaRecorder.onpause = () => {
  // do something in response to
  // recording being paused
}

mediaRecorder.onresume = () => {
  // do something in response to
  // recording being resumed
}
```

## Properties

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaRecorder API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.getUserMedia")}}
