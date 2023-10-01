---
title: "MediaRecorder: stop() method"
short-title: stop()
slug: Web/API/MediaRecorder/stop
page-type: web-api-instance-method
browser-compat: api.MediaRecorder.stop
---

{{APIRef("MediaStream Recording")}}

The **`MediaRecorder.stop()`** method
(part of the [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API)) is
used to stop media capture.

When the `stop()` method is invoked, the UA queues a task that runs the
following steps:

1. If {{domxref("MediaRecorder.state")}} is "inactive", raise a DOM
   `InvalidState` error and terminate these steps. If the
   {{domxref("MediaRecorder.state")}} is not "inactive", continue on to the next step.
2. Set the {{domxref("MediaRecorder.state")}} to "inactive" and stop capturing media.
3. Raise a `dataavailable` event containing the Blob of data that has been
   gathered.
4. Raise a `stop` event.

## Syntax

```js-nolint
stop()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Errors

An `InvalidState` error is raised if the `stop()` method is
called while the `MediaRecorder` object's {{domxref("MediaRecorder.state")}}
is "inactive" — it makes no sense to stop media capture if it is already stopped.

## Examples

```js
stop.onclick = () => {
  mediaRecorder.stop();
  console.log("recorder stopped, data available");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.getUserMedia")}}
