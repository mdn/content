---
title: MediaRecorder.onerror
slug: Web/API/MediaRecorder/onerror
tags:
  - API
  - Audio
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Property
  - Reference
  - Video
  - onerror
browser-compat: api.MediaRecorder.onerror
---
{{APIRef("MediaStream Recording")}}

The {{domxref("MediaRecorder")}} interface's
**`onerror`** event handler is called by the [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API)
when an error occurs. You can provide an event handler to deal with errors that occur
while creating or using a media recorder.

The error object is of type
{{domxref("MediaRecorderErrorEvent")}}, and its
{{domxref("MediaRecorderErrorEvent.error", "error")}} property contains a
{{domxref("DOMException")}} object that describes the error that occurred.

## Syntax

```js
MediaRecorder.onerror = errorHandlerFunction;
```

### Value

A function to be called whenever an error occurs during the recorder's lifetime. In
addition to other general errors that might occur, the following errors are specifically
possible when using the MediaStream Recording API; to determine which occurred, check
the value of {{domxref("DOMException.name", "MediaRecorderErrorEvent.error.name")}}.

- `InvalidStateError`
  - : An attempt was made to stop or pause or an inactive recorder, start or resume an
    active recorder, or otherwise manipulate the `MediaRecorder` while in the
    wrong state. This exception can also occur when a request is made on a source that has
    been deleted or removed.
- `SecurityError`
  - : The {{domxref("MediaStream")}} is configured to disallow recording. This may be the
    case, for example, with sources obtained using {{domxref("MediaDevices.getUserMedia",
    "getUserMedia()")}} when the user denies permission to use an input device.
- `NotSupportedError`
  - : An attempt was made to instantiate a `MediaRecorder` using a MIME type
    that isn't supported on the user's device; one or more of the requested container,
    codecs, or profiles as well as other information may be invalid.
- `InvalidModificationError`
  - : The number of tracks on the stream being recorded has changed. You can't add or
    remove tracks while recording media.
- `UnknownError`
  - : An non-security related error occurred that cannot otherwise be categorized.
    Recording stops, the `MediaRecorder`'s {{domxref("MediaRecorder.state",
    "state")}} becomes `inactive`, one last {{event("dataavailable")}} event is
    sent to the `MediaRecorder` with the remaining received data, and finally a
    {{event("stop")}} event is sent.

These errors may occur either directly because of a call to a
`MediaRecorder` method, or indirectly due to a problem arising during the
recording process.

## Example

This example creates a new {{domxref("MediaRecorder")}} instance and starts recording
using the {{Glossary("user agent", "user agent's")}} default media format. It returns
either the `MediaRecorder` or the name of the error that occurred if any
exceptions are thrown during the setup process.

```js
function recordStream(stream) {
let recorder = null;
let bufferList = [];

try {
  recorder = new MediaRecorder(stream);
} catch(err) {
  return err.name;     /* return the error name */
}

recorder.ondataavailable = function(event) {
  bufferList.push(event.data);
};

recorder.onerror = function(event) {
  let error = event.error;

  switch(error.name) {
    case InvalidStateError:
      showNotification("You can't record the video right " +
                       "now. Try again later.");
      break;
    case SecurityError:
      showNotification("Recording the specified source " +
                       "is not allowed due to security " +
                       "restrictions.");
      break;
    default:
      showNotification("A problem occurred while trying " +
                       "to record the video.");
      break;
    }
  };

  /* this would be a good place to create a Worker to handle
     writing the buffers to disk periodically */

  recorder.start(100);  /* 100ms time slices per buffer */
  return recorder;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaRecorder API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on Github](https://github.com/mdn/web-dictaphone/).)
- [simpl.info MediaStream Recording demo](http://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.getUserMedia")}}
