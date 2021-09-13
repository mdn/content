---
title: MediaRecorder.resume()
slug: Web/API/MediaRecorder/resume
tags:
  - API
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Method
  - Reference
  - resume
browser-compat: api.MediaRecorder.resume
---
{{APIRef("MediaStream Recording")}}

The **`MediaRecorder.resume()`**
method (part of the [MediaRecorder
API](/en-US/docs/Web/API/MediaStream_Recording_API)) is used to resume media recording when it has been previously
paused.

When the `resume()` method is invoked, the browser queues a task that runs
the following steps:

1.  If {{domxref("MediaRecorder.state")}} is "inactive", raise a DOM
    `InvalidState` error and terminate these steps. If
    {{domxref("MediaRecorder.state")}} is not "inactive", continue to the next step.
2.  Set {{domxref("MediaRecorder.state")}} to "recording".
3.  Continue gathering data into the current {{domxref("Blob")}}.
4.  Raise a `resume` event.

## Syntax

```js
MediaRecorder.resume()
```

### Errors

An `InvalidState` error is raised if the `resume()` method is
called while the `MediaRecorder` object’s {{domxref("MediaRecorder.state")}}
is "inactive" — the recording cannot be resumed if it is not already paused; if
{{domxref("MediaRecorder.state")}} is already "recording", `resume()` has no
effect.

## Example

```js
...

  pause.onclick = function() {
    if(MediaRecorder.state === "recording") {
      mediaRecorder.pause();
      // recording paused
    } else if(MediaRecorder.state === "paused") {
      mediaRecorder.resume();
      // resume recording
    }
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
