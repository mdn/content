---
title: MediaRecorder.onwarning
slug: Web/API/MediaRecorder/warning_event
tags:
  - API
  - Audio
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Property
  - Reference
  - Video
  - onwarning
  - warning event
  - Deprecated
browser-compat: api.MediaRecorder.warning_event
---
{{Deprecated_header}}{{APIRef("Media Recorder API")}}

The `warning` event fires on non-fatal errors during media recording via a `MediaRecorder`. Non-fatal errors are one's that don't halt recording.

## Value

A function reference.

## Examples

```js
...

  mediaRecorder.onwarning = function(e) {
    console.log("A warning has been raised: " + e.message);
  }

...
```

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaRecorder API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on GitHub](https://github.com/mdn/web-dictaphone/).)
- [simpl.info MediaStream Recording demo](http://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.getUserMedia")}}
