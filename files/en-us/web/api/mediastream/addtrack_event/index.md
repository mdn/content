---
title: "MediaStream: addtrack event"
short-title: addtrack
slug: Web/API/MediaStream/addtrack_event
page-type: web-api-event
browser-compat: api.MediaStream.addtrack_event
---

{{APIRef("Media Capture and Streams")}}

The `addtrack` event is fired when a new [`MediaStreamTrack`](/en-US/docs/Web/API/MediaStreamTrack) object has been added to a [`MediaStream`](/en-US/docs/Web/API/MediaStream).

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("addtrack", (event) => {});

onaddtrack = (event) => {};
```

## Event type

A {{domxref("MediaStreamTrackEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MediaStreamTrackEvent")}}

## Event properties

_Also inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("MediaStreamTrackEvent.track")}} {{ReadOnlyInline}}
  - : A {{domxref("MediaStreamTrack")}} object representing the track which was added to the stream.

## Examples

Using `addEventListener()`:

```js
const stream = new MediaStream();

stream.addEventListener("addtrack", (event) => {
  console.log(`New ${event.track.kind} track added`);
});
```

Using the `onaddtrack` event handler property:

```js
const stream = new MediaStream();

stream.onaddtrack = (event) => {
  console.log(`New ${event.track.kind} track added`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`removetrack`](/en-US/docs/Web/API/MediaStream/removetrack_event)
- This event on [`AudioTrackList`](/en-US/docs/Web/API/AudioTrackList) targets: [`addtrack`](/en-US/docs/Web/API/AudioTrackList/addtrack_event)
- This event on [`VideoTrackList`](/en-US/docs/Web/API/VideoTrackList) targets: [`addtrack`](/en-US/docs/Web/API/VideoTrackList/addtrack_event)
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
