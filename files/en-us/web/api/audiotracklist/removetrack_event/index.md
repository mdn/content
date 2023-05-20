---
title: "AudioTrackList: removetrack event"
short-title: removetrack
slug: Web/API/AudioTrackList/removetrack_event
page-type: web-api-event
browser-compat: api.AudioTrackList.removetrack_event
---

{{APIRef}}

The `removetrack` event is fired when a track is removed from an [`AudioTrackList`](/en-US/docs/Web/API/AudioTrackList).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("removetrack", (event) => { })

onremovetrack = (event) => { }
```

## Event type

A {{domxref("TrackEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("TrackEvent")}}

## Event properties

_`TrackEvent` is based on {{domxref("Event")}}, so properties of `Event` are also available on `TrackEvent` objects._

- {{domxref("TrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : The DOM track object the event is in reference to. If not `null`, this is always an object of one of the media track types: {{domxref("AudioTrack")}}, {{domxref("VideoTrack")}}, or {{domxref("TextTrack")}}).

## Description

### Trigger

The {{domxref("AudioTrackList/removetrack_event", "removetrack")}} event is called whenever a track is removed from the media
element whose audio tracks are represented by the `AudioTrackList` object.

This event is not cancelable and does not bubble.

### Use cases

You can use this event to react to a new audio track becoming unavailable. You may want to update your UI elements to disallow for user selection of the removed audio track, for example.

## Examples

Using `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.addEventListener("removetrack", (event) => {
  console.log(`Audio track: ${event.track.label} removed`);
});
```

Using the `onremovetrack` event handler property:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.onremovetrack = (event) => {
  console.log(`Audio track: ${event.track.label} removed`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`addtrack`](/en-US/docs/Web/API/AudioTrackList/addtrack_event), [`change`](/en-US/docs/Web/API/AudioTrackList/change_event)
- This event on [`VideoTrackList`](/en-US/docs/Web/API/VideoTrackList) targets: [`removetrack`](/en-US/docs/Web/API/VideoTrackList/removetrack_event)
- This event on [`MediaStream`](/en-US/docs/Web/API/MediaStream) targets: [`removetrack`](/en-US/docs/Web/API/MediaStream/removetrack_event)
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
