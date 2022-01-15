---
title: MediaRecorder.onstart
slug: Web/API/MediaRecorder/onstart
tags:
  - API
  - Audio
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Property
  - Reference
  - Video
  - onstart
browser-compat: api.MediaRecorder.onstart
---
{{APIRef("Media Recorder API")}}

The **`MediaRecorder.onstart`** event handler (part of the [MediaRecorder API](/en-US/docs/Web/API/MediaStream_Recording_API)) handles the
`start` event, allowing you to run code in response to media recording being
started by a `MediaRecorder`.

The `start` event is thrown as a result of the
{{domxref("MediaRecorder.start()")}} method being invoked. At this point, the data
starts being gathered into a {{domxref("Blob")}}.

## Syntax

```js
MediaRecorder.onstart = function(event) { /* ... */ }
MediaRecorder.addEventListener('start', function(event) { /* ... */ })
```

## Example

```js
...

  record.onclick = function() {
    mediaRecorder.start();
    console.log("recorder started");
  }

  mediaRecorder.onstart = function() {
    // do something in response to
    // recording being started
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
