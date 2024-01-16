---
title: "MediaStream: removetrack event"
short-title: removetrack
slug: Web/API/MediaStream/removetrack_event
page-type: web-api-event
browser-compat: api.MediaStream.removetrack_event
---

{{APIRef("Media Capture and Streams")}}

The **`removetrack`** event is fired when a new {{domxref("MediaStreamTrack")}} object has been removed from a {{domxref("MediaStream")}}.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("removetrack", (event) => {});

onremovetrack = (event) => {};
```

## Event type

A {{domxref("MediaStreamTrackEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MediaStreamTrackEvent")}}

## Event properties

_Also inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("MediaStreamTrackEvent.track")}} {{ReadOnlyInline}}
  - : A {{domxref("MediaStreamTrack")}} object representing the track which was removed from the stream.

## Examples

Using `addEventListener()`:

```js
const stream = new MediaStream();

stream.addEventListener("removetrack", (event) => {
  console.log(`${event.track.kind} track removed`);
});
```

Using the `onremovetrack` event handler property:

```js
const stream = new MediaStream();

stream.onremovetrack = (event) => {
  console.log(`${event.track.kind} track removed`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`addtrack`](/en-US/docs/Web/API/MediaStream/addtrack_event)
- This event on [`AudioTrackList`](/en-US/docs/Web/API/AudioTrackList) targets: [`removetrack`](/en-US/docs/Web/API/AudioTrackList/removetrack_event)
- This event on [`VideoTrackList`](/en-US/docs/Web/API/VideoTrackList) targets: [`removetrack`](/en-US/docs/Web/API/VideoTrackList/removetrack_event)
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
