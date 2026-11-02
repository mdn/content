---
title: "TextTrackList: removetrack event"
short-title: removetrack
slug: Web/API/TextTrackList/removetrack_event
page-type: web-api-event
browser-compat: api.TextTrackList.removetrack_event
---

{{APIRef("HTML DOM")}}

The **`removetrack`** event is fired when a track is removed from a [`TextTrackList`](/en-US/docs/Web/API/TextTrackList).

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("removetrack", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onremovetrack = (event) => { }
```

## Event type

A {{domxref("TrackEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("TrackEvent")}}

## Examples

Using `addEventListener()`:

```js
const mediaElement = document.querySelector("video, audio");

mediaElement.textTracks.addEventListener("removetrack", (event) => {
  console.log(`Text track: ${event.track.label} removed`);
});
```

Using the `onremovetrack` event handler property (but note that this replaces other event listeners added using `onremovetrack`, if any):

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
