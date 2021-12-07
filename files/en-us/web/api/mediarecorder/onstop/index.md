---
title: MediaRecorder.onstop
slug: Web/API/MediaRecorder/onstop
tags:
  - API
  - Audio
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Property
  - Reference
  - Video
  - onstop
browser-compat: api.MediaRecorder.onstop
---
{{APIRef("Media Recorder API")}}

The **`MediaRecorder.onstop`** event handler (part of the [MediaRecorder API](/en-US/docs/Web/API/MediaStream_Recording_API)) handles the
`stop` event, allowing you to run code in response to media recording via a
`MediaRecorder` being stopped.

The `stop` event is thrown either as a result of the
{{domxref("MediaRecorder.stop()")}} method being invoked, or when the media stream being
captured ends. In each case, the `stop` event is preceded by a
`dataavailable` event, making the {{domxref("Blob")}} captured up to that
point available for you to use in your application.

## Syntax

```js
MediaRecorder.onstop = function(event) { /* ... */ }
MediaRecorder.addEventListener('stop', function(event) { /* ... */ })
```

## Example

```js
...

  mediaRecorder.onstop = function(e) {
    console.log("data available after MediaRecorder.stop() called.");

    var audio = document.createElement('audio');
    audio.controls = true;
    var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
    var audioURL = window.URL.createObjectURL(blob);
    audio.src = audioURL;
    console.log("recorder stopped");
  }

  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  }

...
```

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
