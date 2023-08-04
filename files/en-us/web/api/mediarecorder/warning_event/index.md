---
title: "MediaRecorder: warning event"
short-title: warning
slug: Web/API/MediaRecorder/warning_event
page-type: web-api-event
status:
  - deprecated
browser-compat: api.MediaRecorder.warning_event
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}

The `warning` event fires on non-fatal errors during media recording via a `MediaRecorder`. Non-fatal errors are one's that don't halt recording.

## Value

A function reference.

## Examples

```js
mediaRecorder.onwarning = (e) => {
  console.warn(`A warning has been raised: ${e.message}`);
};
```

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.getUserMedia")}}
