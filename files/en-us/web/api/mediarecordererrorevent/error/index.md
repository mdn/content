---
title: "MediaRecorderErrorEvent: error property"
short-title: error
slug: Web/API/MediaRecorderErrorEvent/error
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.MediaRecorderErrorEvent.error
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

The read-only `error` property in the
**{{domxref("MediaRecorderErrorEvent")}}** interface is a
{{domxref("DOMException")}} object providing details about the exception that was thrown
by a {{domxref("MediaRecorder")}} instance.

When a `MediaRecorderErrorEvent` occurs, you can determine to some extent
what went wrong by examining the `error` property within the
`MediaRecorderErrorEvent` received by the `MediaRecorder`'s
{{domxref("MediaRecorder/error_event", "error")}} event handler, {{domxref("MediaRecorder/error_event", "onerror")}}.

## Value

A {{domxref("DOMException")}} describing the error represented by the event. The
error's {{domxref("DOMException.name", "name")}} property's value may be any exception
that makes sense during the handling of media recording, including these specifically
identified by the specification. The descriptions here are generic ones; you'll find
more specific ones to various scenarios in which they may occur in the corresponding
method references.

- `InvalidStateError`
  - : An operation was attempted in a context in which it isn't allowed, or a request has
    been made on an object that's deleted or removed.
- `NotSupportedError`
  - : A `MediaRecorder` couldn't be created because the specified options
    weren't valid. The `message` attribute should provide additional
    information, if it exists.
- `SecurityError`
  - : The {{domxref("MediaStream")}} is configured to disallow recording. This may be the
    case, for example, with sources obtained using {{domxref("MediaDevices.getUserMedia",
    "getUserMedia()")}} when the user denies permission to use an input device.
- `InvalidModificationError`
  - : The number of tracks on the stream being recorded has changed. You can't add or
    remove tracks while recording media.
- `UnknownError`
  - : A non-security related error occurred that cannot otherwise be categorized.
    Recording stops, the `MediaRecorder`'s {{domxref("MediaRecorder.state",
    "state")}} becomes `inactive`, one last {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} event is
    sent to the `MediaRecorder` with the remaining received data, and finally a
    {{domxref("MediaRecorder/stop_event", "stop")}} event is sent.

## Examples

### Basic error-handling example

This function creates and returns a `MediaRecorder` for a given
{{domxref("MediaStream")}}, configured to buffer data into an array and to watch for
errors.

```js
function recordStream(stream) {
  let recorder = null;
  let bufferList = [];

  try {
    recorder = new MediaRecorder(stream);
  } catch (err) {
    /* exception while trying to create the recorder; handle that */
  }

  recorder.ondataavailable = (event) => {
    bufferList.push(event.data);
  };

  recorder.onerror = (event) => {
    console.error(`Error: ${event.error}`);
  };

  recorder.start(100); /* 100ms time slices per buffer */
  return recorder;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API)
- [Using the MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
