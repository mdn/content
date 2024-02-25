---
title: "MediaRecorder: pause event"
short-title: pause
slug: Web/API/MediaRecorder/pause_event
page-type: web-api-event
browser-compat: api.MediaRecorder.pause_event
---

{{APIRef("MediaStream Recording")}}

The **`pause`** event of the {{domxref("MediaRecorder")}} interface is fired when
{{domxref("MediaRecorder.pause()")}} is called.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("pause", (event) => {});

onpause = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Example

```js
pause.onclick = () => {
  if (mediaRecorder.state === "recording") {
    mediaRecorder.pause();
    // recording paused
  } else if (mediaRecorder.state === "paused") {
    mediaRecorder.resume();
    // resume recording
  }
};

mediaRecorder.onpause = () => {
  // do something in response to
  // recording being paused
};

mediaRecorder.onresume = () => {
  // do something in response to
  // recording being resumed
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
