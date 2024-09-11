---
title: "MediaRecorder: stream property"
short-title: stream
slug: Web/API/MediaRecorder/stream
page-type: web-api-instance-property
browser-compat: api.MediaRecorder.stream
---

{{APIRef("MediaStream Recording")}}

The **`stream`** read-only property of the {{domxref("MediaRecorder")}} interface returns the stream that was passed into the {{domxref("MediaRecorder.MediaRecorder", "MediaRecorder()")}} constructor when the `MediaRecorder` was created.

## Value

The {{domxref("MediaStream")}} passed into the `MediaRecorder()` constructor when the `MediaRecorder` was originally created.

## Examples

```js
if (navigator.getUserMedia) {
  console.log("getUserMedia supported.");
  navigator.getUserMedia(
    // constraints - only audio needed for this app
    {
      audio: true,
    },

    // Success callback
    (stream) => {
      const mediaRecorder = new MediaRecorder(stream);

      const myStream = mediaRecorder.stream;
      console.log(myStream);
    },
  );
}
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
