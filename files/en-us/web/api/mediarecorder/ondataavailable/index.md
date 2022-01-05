---
title: MediaRecorder.ondataavailable
slug: Web/API/MediaRecorder/ondataavailable
tags:
  - API
  - Audio
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - MediaStream Recording API
  - Property
  - Reference
  - Video
  - ondataavailable
browser-compat: api.MediaRecorder.ondataavailable
---
{{APIRef("MediaStream Recording")}}

The **`MediaRecorder.ondataavailable`** event handler (part of
the [MediaStream Recording
API](/en-US/docs/Web/API/MediaStream_Recording_API)) handles the {{event("dataavailable")}} event, letting you run code in
response to {{domxref("Blob")}} data being made available for use.

The `dataavailable` event is fired when the MediaRecorder delivers media
data to your application for its use. The data is provided in a {{domxref("Blob")}}
object that contains the data. This occurs in four situations:

- When the media stream ends, any media data not already delivered to your
  `ondataavailable` handler is passed in a single {{domxref("Blob")}}.
- When {{domxref("MediaRecorder.stop()")}} is called, all media data which has been
  captured since recording began or the last time a `dataavailable` event
  occurred is delivered in a {{domxref("Blob")}}; after this, capturing ends.
- When {{domxref("MediaRecorder.requestData()")}} is called, all media data which has
  been captured since recording began or the last time a `dataavailable`
  event occurred is delivered; then a new `Blob` is created and media capture
  continues into that blob.
- If a `timeslice` property was passed into the
  {{domxref("MediaRecorder.start()")}} method that started media capture, a
  `dataavailable` event is fired every `timeslice` milliseconds.
  That means that each blob will have a specific time duration (except the last blob,
  which might be shorter, since it would be whatever is left over since the last event).
  So if the method call looked like this — `recorder.start(1000);` — the
  `dataavailable` event would fire after each second of media capture, and
  our event handler would be called every second with a blob of media data that's one
  second long. You can use `timeslice` alongside
  {{domxref("MediaRecorder.stop()")}} and {{domxref("MediaRecorder.requestData()")}} to
  produce multiple same-length blobs plus other shorter blobs as well.

> **Note:** The {{domxref("Blob")}} containing the media data is available in the
> {{event("dataavailable")}} event's `data` property.

## Syntax

```js
mediaRecorder.ondataavailable = functionRef;
```

## Example

```js
...
  var chunks = [];

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

- [Using the MediaStream
  Recording API](/en-US/docs/Web/API/MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on Github](https://github.com/mdn/web-dictaphone/).)
- [simpl.info MediaStream Recording
  demo](http://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.getUserMedia")}}
