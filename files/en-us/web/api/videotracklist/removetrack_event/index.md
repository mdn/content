---
title: 'VideoTrackList: removetrack event'
slug: Web/API/VideoTrackList/removetrack_event
page-type: web-api-event
tags:
  - API
  - Media Streams API
  - MediaStreamTrackEvent
  - Reference
  - Removing Tracks
  - events
  - Event
browser-compat: api.VideoTrackList.removetrack_event
---
{{APIRef}}

The `removetrack` event is fired when a video track is removed from a [`VideoTrackList`](/en-US/docs/Web/API/VideoTrackList).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('removetrack', (event) => { })

onremovetrack = (event) => { }
```

## Event type

A {{domxref("TrackEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("TrackEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("TrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : The newly-removed {{domxref("VideoTrack")}} the event is in reference to.

## Examples

Using `addEventListener()`:

```js
const videoElement = document.querySelector('video');

videoElement.videoTracks.addEventListener('removetrack', (event) => {
  console.log(`Video track: ${event.track.label} removed`);
});
```

Using the `onremovetrack` event handler property:

```js
const videoElement = document.querySelector('video');

videoElement.videoTracks.onremovetrack = (event) => {
  console.log(`Video track: ${event.track.label} removed`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`addtrack`](/en-US/docs/Web/API/VideoTrackList/addtrack_event), [`change`](/en-US/docs/Web/API/VideoTrackList/change_event)
- This event on [`AudioTrackList`](/en-US/docs/Web/API/AudioTrackList) targets: [`removetrack`](/en-US/docs/Web/API/AudioTrackList/removetrack_event)
- This event on [`MediaStream`](/en-US/docs/Web/API/MediaStream) targets: [`removetrack`](/en-US/docs/Web/API/MediaStream/removetrack_event)
- [Media Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
