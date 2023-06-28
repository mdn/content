---
title: "MediaRecorder: state property"
short-title: state
slug: Web/API/MediaRecorder/state
page-type: web-api-instance-property
browser-compat: api.MediaRecorder.state
---

{{APIRef("MediaStream Recording")}}

The **`MediaRecorder.state`** read-only property returns the
current state of the current `MediaRecorder` object.

## Value

A string containing one of the following values:

- `inactive`
  - : Recording is not occurring — it has either not been started yet, or it has been
    started and then stopped.
- `recording`
  - : Recording has been started and the UA is capturing data.
- `paused`
  - : Recording has been started, then paused, but not yet stopped or resumed.

## Examples

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  // Will return "recording"
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
  getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.getUserMedia")}}
