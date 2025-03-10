---
title: "MediaRecorder: start event"
short-title: start
slug: Web/API/MediaRecorder/start_event
page-type: web-api-event
browser-compat: api.MediaRecorder.start_event
---

{{APIRef("MediaStream Recording")}}

The **`start`** event of the {{domxref("MediaRecorder")}} interface is fired when
{{domxref("MediaRecorder.start()")}} is called. At this point, the data
starts being gathered into a {{domxref("Blob")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("start", (event) => {});

onstart = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Example

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log("recorder started");
};

mediaRecorder.onstart = () => {
  // do something in response to
  // recording being started
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
