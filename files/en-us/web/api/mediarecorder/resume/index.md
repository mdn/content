---
title: "MediaRecorder: resume() method"
short-title: resume()
slug: Web/API/MediaRecorder/resume
page-type: web-api-instance-method
browser-compat: api.MediaRecorder.resume
---

{{APIRef("MediaStream Recording")}}

The **`resume()`** method of the {{domxref("MediaRecorder")}} interface is used to resume media recording when it has been previously paused.

If {{domxref("MediaRecorder.state")}} is already "recording", calling `resume()` has no effect.

When the `resume()` method is invoked, the browser queues a task that runs
the following steps:

1. If {{domxref("MediaRecorder.state")}} is "inactive", raise a DOM
   `InvalidStateError` exception and terminate these steps. If
   {{domxref("MediaRecorder.state")}} is not "inactive", continue to the next step.
2. Set {{domxref("MediaRecorder.state")}} to "recording".
3. Continue gathering data into the current {{domxref("Blob")}}.
4. Raise a `resume` event.

## Syntax

```js-nolint
resume()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `MediaRecorder` is currently `"inactive"`.

## Examples

```js
pause.onclick = () => {
  if (MediaRecorder.state === "recording") {
    mediaRecorder.pause();
    // recording paused
  } else if (MediaRecorder.state === "paused") {
    mediaRecorder.resume();
    // resume recording
  }
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
