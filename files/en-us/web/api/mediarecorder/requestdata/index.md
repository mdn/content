---
title: MediaRecorder.requestData()
slug: Web/API/MediaRecorder/requestData
tags:
  - API
  - Audio
  - Media
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - MediaStream Recording
  - Method
  - Reference
  - Video
  - requestData
browser-compat: api.MediaRecorder.requestData
---
{{APIRef("MediaStream Recording")}}

The **`MediaRecorder.requestData()`**
method (part of the [MediaRecorder
API](/en-US/docs/Web/API/MediaStream_Recording_API)) is used to raise a {{domxref("dataavailable")}} event containing a
{{domxref("Blob")}} object of the captured media as it was when the method was
called. This can then be grabbed and manipulated as you wish.

When the `requestData()` method is invoked, the browser queues a task that
runs the following steps:

1.  If {{domxref("MediaRecorder.state")}} is "inactive", raise a DOM
    `InvalidState` error and terminate these steps. If
    {{domxref("MediaRecorder.state")}} is not "inactive", continue to the next step.
2.  Raise a {{event("dataavailable")}} event containing a {{domxref("Blob")}} of the
    currently captured data (the Blob is available under the event's `data`
    attribute.)
3.  Create a new Blob and place subsequently captured data into it.

## Syntax

```js
MediaRecorder.requestData()
```

### Errors

An `InvalidState` error is raised if the `requestData()` method
is called while the `MediaRecorder` object’s
{{domxref("MediaRecorder.state")}} is not "recording" — the media cannot be captured if
recording is not occurring.

## Example

```js
...

  captureMedia.onclick = function() {
    mediaRecorder.requestData();
    // makes snapshot available of data so far
    // ondataavailable fires, then capturing continues
    // in new Blob
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
