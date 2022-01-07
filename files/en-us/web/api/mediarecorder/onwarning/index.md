---
title: MediaRecorder.onwarning
slug: Web/API/MediaRecorder/onwarning
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
browser-compat: api.MediaRecorder.onwarning
---
{{Deprecated_header}}{{APIRef("Media Recorder API")}}

The **`MediaRecorder.onwarning`** event handler (part of the [MediaRecorder API](/en-US/docs/Web/API/MediaStream_Recording_API)) handles the
recording `warning` event, allowing you to run code in response to non-fatal
errors being thrown during media recording via a `MediaRecorder` (errors that don't
halt recording).

## Syntax

```js
mediaRecorder.onwarning = function(event) { /* ... */ }
mediaRecorder.addEventListener('warning', function(event) { /* ... */ })
```

## Example

```js
...

  mediaRecorder.onwarning = function(e) {
    console.log("A warning has been raised: " + e.message);
  }

...
```

## Properties

- `message`
  - : Contains information about the error that occurred.

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
