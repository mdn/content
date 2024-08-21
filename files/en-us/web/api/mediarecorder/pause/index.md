---
title: "MediaRecorder: pause() method"
short-title: pause()
slug: Web/API/MediaRecorder/pause
page-type: web-api-instance-method
browser-compat: api.MediaRecorder.pause
---

{{APIRef("MediaStream Recording")}}

The **`pause()`** method of the {{domxref("MediaRecorder")}} interface is used
to pause recording of media streams.

When a `MediaRecorder` object's `pause()` method is called, the
browser queues a task that runs the below steps:

1. If {{domxref("MediaRecorder.state")}} is "inactive", raise a DOM
   `InvalidState` error and terminate these steps. If not, continue to the
   next step.
2. Set {{domxref("MediaRecorder.state")}} to "paused".
3. Stop gathering data into the current {{domxref("Blob")}}, but keep it available so
   that recording can be resumed later on.
4. Raise a {{domxref("MediaRecorder/pause_event", "pause")}} event.

## Syntax

```js-nolint
pause()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `MediaRecorder` is currently `"inactive"`; you cannot pause
    the recording if the `MediaRecorder` is not active. If you call `pause()` while already paused,
    the method silently does nothing.

## Examples

```js
pause.onclick = () => {
  mediaRecorder.pause();
  console.log("recording paused");
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
- {{domxref("Navigator.getUserMedia")}}
