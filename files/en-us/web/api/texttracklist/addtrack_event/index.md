---
title: 'TextTrackList: addtrack event'
slug: Web/API/TextTrackList/addtrack_event
page-type: web-api-event
tags:
  - API
  - Reference
  - TextTrack
  - TextTrackList
  - addTrack
  - addTrack Event
  - events
  - Event
browser-compat: api.TextTrackList.addtrack_event
---
{{APIRef}}

The **`addtrack`** event is fired when a track is added to a [`TextTrackList`](/en-US/docs/Web/API/TextTrackList).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('addtrack', (event) => { })

onaddtrack = (event) => { }
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
const mediaElement = document.querySelector('video, audio');

mediaElement.textTracks.addEventListener('addtrack', (event) => {
  console.log(`Text track: ${event.track.label} added`);
});
```

Using the `onaddtrack` event handler property:

```js
const mediaElement = document.querySelector('video, audio');

mediaElement.textTracks.onaddtrack = (event) => {
  console.log(`Text track: ${event.track.label} added`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`removetrack`](/en-US/docs/Web/API/VideoTrackList/removetrack_event), [`change`](/en-US/docs/Web/API/VideoTrackList/change_event)
- This event on [`VideoTrackList`](/en-US/docs/Web/API/VideoTrackList) targets: [`addtrack`](/en-US/docs/Web/API/VideoTrackList/addtrack_event)
- This event on [`AudioTrackList`](/en-US/docs/Web/API/AudioTrackList) targets: [`addtrack`](/en-US/docs/Web/API/AudioTrackList/addtrack_event)
- This event on [`MediaStream`](/en-US/docs/Web/API/MediaStream) targets: [`addtrack`](/en-US/docs/Web/API/MediaStream/addtrack_event)
- [Media Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
