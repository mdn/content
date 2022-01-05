---
title: MediaRecorder.onpause
slug: Web/API/MediaRecorder/onpause
tags:
  - API
  - Audio
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Property
  - Reference
  - Video
  - onpause
browser-compat: api.MediaRecorder.onpause
---
{{APIRef("Media Recorder API")}}

The **`MediaRecorder.onpause`** event handler (part of the [MediaRecorder API](/en-US/docs/Web/API/MediaStream_Recording_API)) handles the
`pause` event, allowing you to run code in response to the media recording
being paused.

The `pause` event is thrown as a result of the
{{domxref("MediaRecorder.pause()")}} method being invoked.

## Syntax

```js
MediaRecorder.onpause = function(event) { /* ... */ }
MediaRecorder.addEventListener('pause', function(event) { /* ... */ })
```

## Example

```js
...

  pause.onclick = function() {
    if(mediaRecorder.state === "recording") {
      mediaRecorder.pause();
      // recording paused
    } else if(mediaRecorder.state === "paused") {
      mediaRecorder.resume();
      // resume recording
    }
  }

  mediaRecorder.onpause = function() {
    // do something in response to
    // recording being paused
  }

  mediaRecorder.onresume = function() {
    // do something in response to
    // recording being resumed
  }

...
```

## Properties

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  the MediaRecorder API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on Github](https://github.com/mdn/web-dictaphone/).)
- [simpl.info MediaStream Recording
  demo](http://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.getUserMedia")}}
