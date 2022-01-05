---
title: MediaRecorder.pause()
slug: Web/API/MediaRecorder/pause
tags:
  - API
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Method
  - Reference
  - pause
browser-compat: api.MediaRecorder.pause
---
{{APIRef("MediaStream Recording")}}

The **`Media.pause()`** method (part
of the [MediaRecorder API](/en-US/docs/Web/API/MediaStream_Recording_API)) is used
to pause recording of media streams.

When a `MediaRecorder` object’s `pause()`method is called, the
browser queues a task that runs the below steps:

1.  If {{domxref("MediaRecorder.state")}} is "inactive", raise a DOM
    `InvalidState` error and terminate these steps. If not, continue to the
    next step.
2.  Set {{domxref("MediaRecorder.state")}} to "paused".
3.  Stop gathering data into the current {{domxref("Blob")}}, but keep it available so
    that recording can be resumed later on.
4.  Raise a {{event("pause")}} event.

## Syntax

```js
MediaRecorder.pause()
```

### Return value

`undefined`.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `MediaRecorder` is currently `"inactive"`; you cannot pause
    the recording if the `MediaRecorder` is not active. If you call `pause()` while already paused,
    the method silently does nothing.

## Example

```js
...

 pause.onclick = function() {
     mediaRecorder.pause();
     console.log("recording paused");
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
