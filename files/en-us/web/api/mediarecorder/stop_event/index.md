---
title: 'MediaRecorder: stop event'
slug: Web/API/MediaRecorder/stop_event
tags:
  - API
  - Audio
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Event
  - Reference
  - Video
  - stop
browser-compat: api.MediaRecorder.stop_event
---
{{APIRef("Media Recorder API")}}

The `stop` event is fired when
{{domxref("MediaRecorder.stop()")}} is called, or when the media stream being
captured ends. In each case, the `stop` event is preceded by a
`dataavailable` event, making the {{domxref("Blob")}} captured up to that
point available for you to use in your application.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('stop', event => { });

onstop = event => { };
```

## Event type

A generic {{domxref("Event")}}.

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
