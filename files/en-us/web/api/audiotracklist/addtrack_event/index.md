---
title: "AudioTrackList: addtrack event"
short-title: addtrack
slug: Web/API/AudioTrackList/addtrack_event
page-type: web-api-event
browser-compat: api.AudioTrackList.addtrack_event
---

{{APIRef}}

The `addtrack` event is fired when a track is added to an [`AudioTrackList`](/en-US/docs/Web/API/AudioTrackList).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("addtrack", (event) => { })

onaddtrack = (event) => { }
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

The {{domxref("AudioTrackList/addtrack_event", "addtrack")}} event is called whenever a new track is added to the media
element whose audio tracks are represented by the `AudioTrackList` object.
This happens when tracks are added to the element when the media is first attached to
the element; one `addtrack` event will occur for each audio track in the
media resource.

This event is not cancelable and does not bubble.

### Use cases

You can use this event to react to a new audio track becoming available. You may want to update your UI elements to allow for user selection of the new audio track, for example.

## Examples

Using `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.addEventListener("addtrack", (event) => {
  console.log(`Audio track: ${event.track.label} added`);
});
```

Using the `onaddtrack` event handler property:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.onaddtrack = (event) => {
  console.log(`Audio track: ${event.track.label} added`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`removetrack`](/en-US/docs/Web/API/AudioTrackList/removetrack_event), [`change`](/en-US/docs/Web/API/AudioTrackList/change_event)
- This event on [`VideoTrackList`](/en-US/docs/Web/API/VideoTrackList) targets: [`addtrack`](/en-US/docs/Web/API/VideoTrackList/addtrack_event)
- This event on [`MediaStream`](/en-US/docs/Web/API/MediaStream) targets: [`addtrack`](/en-US/docs/Web/API/MediaStream/addtrack_event)
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
