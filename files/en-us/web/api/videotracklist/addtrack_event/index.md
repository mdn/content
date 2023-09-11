---
title: "VideoTrackList: addtrack event"
short-title: addtrack
slug: Web/API/VideoTrackList/addtrack_event
page-type: web-api-event
browser-compat: api.VideoTrackList.addtrack_event
---

{{APIRef}}

The `addtrack` event is fired when a video track is added to a [`VideoTrackList`](/en-US/docs/Web/API/VideoTrackList).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("addtrack", (event) => {});

onaddtrack = (event) => {};
```

## Event type

A {{domxref("TrackEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("TrackEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("TrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : The newly-added {{domxref("VideoTrack")}} the event is in reference to.

## Examples

Using `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.videoTracks.addEventListener("addtrack", (event) => {
  console.log(`Video track: ${event.track.label} added`);
});
```

Using the `onaddtrack` event handler property:

```js
const videoElement = document.querySelector("video");

videoElement.videoTracks.onaddtrack = (event) => {
  console.log(`Video track: ${event.track.label} added`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`removetrack`](/en-US/docs/Web/API/VideoTrackList/removetrack_event), [`change`](/en-US/docs/Web/API/VideoTrackList/change_event)
- This event on [`AudioTrackList`](/en-US/docs/Web/API/AudioTrackList) targets: [`addtrack`](/en-US/docs/Web/API/AudioTrackList/addtrack_event)
- This event on [`MediaStream`](/en-US/docs/Web/API/MediaStream) targets: [`addtrack`](/en-US/docs/Web/API/MediaStream/addtrack_event)
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
