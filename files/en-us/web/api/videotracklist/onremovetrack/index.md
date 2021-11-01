---
title: VideoTrackList.onremovetrack
slug: Web/API/VideoTrackList/onremovetrack
tags:
  - API
  - Event Handler
  - HTML DOM
  - Media
  - Property
  - Reference
  - Removing Tracks
  - Removing Video Tracks
  - Video
  - VideoTrackList
  - onremovetrack
  - remove
  - removeTrack
  - track
browser-compat: api.VideoTrackList.onremovetrack
---
{{APIRef("HTML DOM")}}

The **{{domxref("VideoTrackList")}}**
**`onremovetrack`** event handler is called when the
{{event("removetrack")}} event occurs, indicating that a video track has been removed
from the media element, and therefore also from the
`VideoTrackList`.

The event is passed into the event handler in the form of a {{domxref("TrackEvent")}}
object, whose {{domxref("TrackEvent.track", "track")}} property identifies the track
that was removed from the media element's `VideoTrackList`.

> **Note:** You can also add a handler for the `removetrack`
> event using {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

## Syntax

```js
VideoTrackList.onremovetrack = eventHandler;
```

### Value

Set `onremovetrack` to a function that accepts as input a
{{domxref("TrackEvent")}} object which indicates in its {{domxref("TrackEvent.track",
  "track")}} property which video track has been removed from the media element.

## Example

This simple example just fetches the current number of video tracks in the media
element whenever a track is removed from the media element.

```js
document.querySelector("my-video").videoTracks.onremovetrack = function(event) {
  myTrackCount = document.querySelector("my-video").videoTracks.length;
};
```

The current number of video tracks remaining in the media element is obtained from
`VideoTrackList` property {{domxref("VideoTrackList.length", "length")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
