---
title: "MediaRecorder: dataavailable event"
short-title: dataavailable
slug: Web/API/MediaRecorder/dataavailable_event
page-type: web-api-event
browser-compat: api.MediaRecorder.dataavailable_event
---

{{APIRef("MediaStream Recording")}}

The **`dataavailable`** event of the {{domxref("MediaRecorder")}} interface is fired when the MediaRecorder delivers media
data to your application for its use. The data is provided in a {{domxref("Blob")}}
object that contains the data. This occurs in four situations:

- When the media stream ends, any media data not already delivered to your
  `ondataavailable` handler is passed in a single {{domxref("Blob")}}.
- When {{domxref("MediaRecorder.stop()")}} is called, all media data which has been
  captured since recording began or the last time a `dataavailable` event
  occurred is delivered in a {{domxref("Blob")}}; after this, capturing ends.
- When {{domxref("MediaRecorder.requestData()")}} is called, all media data which has
  been captured since recording began or the last time a `dataavailable`
  event occurred is delivered; then a new `Blob` is created and media capture
  continues into that blob.
- If a `timeslice` property was passed into the
  {{domxref("MediaRecorder.start()")}} method that started media capture, a
  `dataavailable` event is fired every `timeslice` milliseconds.
  That means that normally, each blob will have a specific time duration (except the last blob,
  which might be shorter, since it would be whatever is left over since the last event).
  So if the method call looked like this — `recorder.start(1000);` — the
  `dataavailable` event would fire after each second of media capture, and
  our event handler would be called every second with a blob of media data that's one
  second long. You can use `timeslice` alongside
  {{domxref("MediaRecorder.stop()")}} and {{domxref("MediaRecorder.requestData()")}} to
  produce multiple same-length blobs plus other shorter blobs as well.

> [!NOTE]
> Like other time values in web APIs, `timeslice` is not exact and the real intervals may be delayed due to other pending tasks, browser features (pausing the camera and microphone in Safari), browser-specific behaviors (locking the screen while recording on Chrome on Android pauses the `dataavailable` event), or other browser bugs. Such scenarios can also lead to significantly larger chunks.
>
> Therefore, don't rely on `timeslice` and the number of chunks received to calculate the time elapsed, because errors may accumulate. Instead, keep a separate timer using {{domxref("Event.timeStamp")}} or similar, that records the total time elapsed since starting.

The {{domxref("Blob")}} containing the media data is available in the `dataavailable` event's `data` property.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("dataavailable", (event) => {});

ondataavailable = (event) => {};
```

## Event type

A {{domxref("BlobEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("BlobEvent")}}

## Example

```js
const chunks = [];

mediaRecorder.onstop = (e) => {
  console.log("data available after MediaRecorder.stop() called.");

  const audio = document.createElement("audio");
  audio.controls = true;
  const blob = new Blob(chunks, { type: mediaRecorder.mimeType });
  const audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;
  console.log("recorder stopped");
};

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://github.com/chrisdavidmills) ([source on GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://github.com/samdutton).
- {{domxref("Navigator.getUserMedia()")}}
- [Dealing with huge MediaRecorder chunks](https://blog.addpipe.com/dealing-with-huge-mediarecorder-slices/) on addpipe.com (2024)
