---
title: "TextTrackList: removeTrack event"
short-title: removeTrack
slug: Web/API/TextTrackList/removeTrack_event
page-type: web-api-event
browser-compat: api.TextTrackList.removetrack_event
---

{{APIRef}}

The **`removetrack`** event is fired when a track is removed from a [`TextTrackList`](/en-US/docs/Web/API/TextTrackList).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("removetrack", (event) => {});

onremovetrack = (event) => {};
```

## Event type

A {{domxref("TrackEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("TrackEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("TrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : The {{domxref("TextTrack")}} object to which the event refers.

## Examples

Using `addEventListener()`:

```js
const mediaElement = document.querySelector("video, audio");

mediaElement.textTracks.addEventListener("removetrack", (event) => {
  console.log(`Text track: ${event.track.label} removed`);
});
```

Using the `onremovetrack` event handler property:

```js
const mediaElement = document.querySelector("video, audio");

mediaElement.textTracks.onremovetrack = (event) => {
  console.log(`Text track: ${event.track.label} removed`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`addtrack`](/en-US/docs/Web/API/VideoTrackList/addtrack_event), [`change`](/en-US/docs/Web/API/VideoTrackList/change_event)
- This event on [`VideoTrackList`](/en-US/docs/Web/API/VideoTrackList) targets: [`removetrack`](/en-US/docs/Web/API/VideoTrackList/removetrack_event)
- This event on [`AudioTrackList`](/en-US/docs/Web/API/AudioTrackList) targets: [`removetrack`](/en-US/docs/Web/API/AudioTrackList/removetrack_event)
- This event on [`MediaStream`](/en-US/docs/Web/API/MediaStream) targets: [`removetrack`](/en-US/docs/Web/API/MediaStream/removetrack_event)
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
