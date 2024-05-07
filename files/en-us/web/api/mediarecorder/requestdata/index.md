---
title: "MediaRecorder: requestData() method"
short-title: requestData()
slug: Web/API/MediaRecorder/requestData
page-type: web-api-instance-method
browser-compat: api.MediaRecorder.requestData
---

{{APIRef("MediaStream Recording")}}

The **`requestData()`**
method of the {{domxref("MediaRecorder")}} interface is used to raise a {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} event containing a
{{domxref("Blob")}} object of the captured media as it was when the method was
called. This can then be grabbed and manipulated as you wish.

When the `requestData()` method is invoked, the browser queues a task that
runs the following steps:

1. If {{domxref("MediaRecorder.state")}} is "inactive", raise a DOM
   `InvalidState` error and terminate these steps. If
   {{domxref("MediaRecorder.state")}} is not "inactive", continue to the next step.
2. Raise a {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} event containing a {{domxref("Blob")}} of the
   currently captured data (the Blob is available under the event's `data`
   attribute.)
3. Create a new Blob and place subsequently captured data into it.

## Syntax

```js-nolint
requestData()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `MediaRecorder` is currently `"inactive"`; you cannot capture
    the recording if the `MediaRecorder` is not active.

## Examples

```js
captureMedia.onclick = () => {
  mediaRecorder.requestData();
  // makes snapshot available of data so far
  // ondataavailable fires, then capturing continues
  // in new Blob
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
- {{domxref("Navigator.getUserMedia()")}}
