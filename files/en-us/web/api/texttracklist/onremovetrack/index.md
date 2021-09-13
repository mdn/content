---
title: TextTrackList.onremovetrack
slug: Web/API/TextTrackList/onremovetrack
tags:
  - API
  - Event Handler
  - HTML DOM
  - Media
  - Property
  - Reference
  - Removing Tracks
  - TextTrack
  - TextTrackList
  - VideoTrackList
  - onremovetrack
  - remove
  - removeTrack
  - track
browser-compat: api.TextTrackList.onremovetrack
---
{{APIRef("HTML DOM")}}

The **{{domxref("TextTrackList")}}**
**`onremovetrack`** event handler is called when the
{{event("removetrack")}} event occurs, indicating that a text track has been removed
from the media element, and therefore also from the `TextTrackList`.

The event is passed into the event handler in the form of a {{domxref("TrackEvent")}}
object, whose {{domxref("TrackEvent.track", "track")}} property identifies the track
that was removed from the media element's `TextTrackList`.

> **Note:** You can also add a handler for the `removetrack`
> event using {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

## Syntax

```js
TextTrackList.onremovetrack = eventHandler;
```

### Value

Set `onremovetrack` to a function that accepts as input a
{{domxref("TrackEvent")}} object which indicates in its {{domxref("TrackEvent.track",
  "track")}} property which text track has been removed from the media element.

## Example

This simple example just fetches the current number of text tracks in the first media
element whenever a track is removed from the media element.

```js
document.querySelectorAll("video, audio")[0].textTracks.onremovetrack = function(event) {
  myTrackCount = document.querySelectorAll("video, audio")[0].textTracks.length;
};
```

The current number of text tracks remaining in the media element is obtained from
`TextTrackList` property {{domxref("TextTrackList.length", "length")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
