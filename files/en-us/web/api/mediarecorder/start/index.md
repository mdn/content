---
title: "MediaRecorder: start() method"
short-title: start()
slug: Web/API/MediaRecorder/start
page-type: web-api-instance-method
browser-compat: api.MediaRecorder.start
---

{{APIRef("MediaStream Recording")}}

The **`start()`** method of the {{domxref("MediaRecorder")}} interface begins recording media into one or more {{domxref("Blob")}} objects.

You can
record the entire duration of the media into a single `Blob` (or until you
call {{domxref("MediaRecorder.requestData", "requestData()")}}), or you can specify the
number of milliseconds to record at a time. Then, each time that amount of media has
been recorded, an event will be delivered to let you act upon the recorded media, while
a new `Blob` is created to record the next slice of the media.

Assuming the `MediaRecorder`'s {{domxref("MediaRecorder.state", "state")}}
is `inactive`, `start()` sets the `state` to
`recording`, then begins capturing media from the input stream. A
`Blob` is created and the data is collected in it until the time slice period
elapses or the source media ends. Each time a `Blob` is filled up to that
point (the timeslice duration or the end-of-media, if no slice duration was provided), a
{{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} event is sent to the `MediaRecorder` with the
recorded data. If the source is still playing, a new `Blob` is created and
recording continues into that, and so forth.

When the source stream ends, `state` is set to `inactive` and
data gathering stops. A final {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} event is sent to the
`MediaRecorder`, followed by a {{domxref("MediaRecorder/stop_event", "stop")}} event.

> [!NOTE]
> If the browser is unable to start recording or continue
> recording, it will raise an {{domxref("MediaRecorder.error_event", "error")}} event, followed by a
> {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} event containing the `Blob` it
> has gathered, followed by the {{domxref("MediaRecorder/stop_event", "stop")}} event.

## Syntax

```js-nolint
start()
start(timeslice)
```

### Parameters

- `timeslice` {{optional_inline}}

  - : The number of milliseconds to record into each {{domxref("Blob")}}. If this
    parameter isn't included, the entire media duration is recorded into a single
    `Blob` unless the {{domxref("MediaRecorder.requestData", "requestData()")}}
    method is called to obtain the `Blob` and trigger the creation of a new
    `Blob` into which the media continues to be recorded.

    > [!NOTE]
    > Like other time values in web APIs, `timeslice` is not exact and the real intervals may be slightly longer due to other pending tasks before the creation of the next blob.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

Errors that can be detected immediately are thrown as DOM exceptions. All other errors
are reported through {{domxref("MediaRecorder.error_event", "error")}} events sent to the `MediaRecorder`
object. You can implement the {{domxref("MediaRecorder.error_event", "onerror")}} event
handler to respond to these errors.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `MediaRecorder` is not in the `inactive` state; you cannot
    start recording media if it is already being recorded. See the
    {{domxref("MediaRecorder.state", "state")}} property.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if:
    - The media stream you are attempting to record is inactive.
    - One or more of the stream's tracks is in a format that cannot be recorded using the current configuration
    - The `videoKeyFrameIntervalDuration` and `videoKeyFrameIntervalCount` parameter are both specified when creating the `MediaRecorder`.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("MediaStream")}} is configured to disallow recording. This may be the
    case, for example, with sources obtained using {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} when the user denies permission to use an input device. This
    exception may also be delivered as an {{domxref("MediaRecorder.error_event", "error")}} event if
    the security options for the source media change after recording begins.

## Examples

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log("recorder started");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://github.com/chrisdavidmills) ([source on GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://github.com/samdutton).
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
