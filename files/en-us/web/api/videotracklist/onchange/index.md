---
title: VideoTrackList.onchange
slug: Web/API/VideoTrackList/onchange
tags:
  - API
  - Adding Tracks
  - Adding Video Tracks
  - Event Handler
  - HTML DOM
  - Media
  - Property
  - Reference
  - Video
  - VideoTrackList
  - addTrack
  - onchange
  - track
browser-compat: api.VideoTrackList.onchange
---
{{APIRef("HTML DOM")}}

The **{{domxref("VideoTrackList")}}** property
**`onchange`** is an event handler which is called when the
{{event("change")}} event occurs, indicating that a {{domxref("VideoTrack")}} in the
`VideoTrackList` has been made active.

The event is passed into the event handler in the form of an {{domxref("Event")}}
object; the event doesn't provide any additional information. To determine the new state
of media's tracks, you'll have to look at their {{domxref("VideoTrack.selected")}}
flags.

> **Note:** You can also add a handler for the `change` event
> using {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

## Syntax

```js
VideoTrackList.onchange = eventHandler;
```

### Value

Set `onchange` to a function that should be called whenever a track is made
active.

## Example

This snippet establishes a handler for the {{event("change")}} event that looks at each
of the tracks in the list, calling a function to update the state of a user interface
control that indicates the current state of the track.

```js
var trackList = document.querySelector("video").videoTracks;

trackList.onchange = function(event) {
  trackList.forEach(function(track) {
    updateTrackSelectedButton(track.id, track.selected);
  });
};
```

The `updateTrackSelectedButton()`, in this example, should be a function
that finds a user interface control using the track's {{domxref("VideoTrack.id", "id")}}
(perhaps the app uses the track ID as the control element's ID) and the track's
{{domxref("VideoTrack.selected", "selected")}} flag to determine which state the control
should be in now.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
