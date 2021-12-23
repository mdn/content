---
title: AudioTrackList.onremovetrack
slug: Web/API/AudioTrackList/onremovetrack
tags:
  - API
  - Audio
  - AudioTrackList
  - Event Handler
  - HTML DOM
  - Media
  - Property
  - Reference
  - Removing Audio Tracks
  - Removing Tracks
  - onremovetrack
  - remove
  - removeTrack
  - track
browser-compat: api.AudioTrackList.onremovetrack
---
{{APIRef("HTML DOM")}}

The **{{domxref("AudioTrackList")}}**
**`onremovetrack`** event handler is called when the
{{event("removetrack")}} event occurs, indicating that an audio track has been removed
from the media element, and therefore also from the
`AudioTrackList`.

The event is passed into the event handler in the form of a {{domxref("TrackEvent")}}
object, whose {{domxref("TrackEvent.track", "track")}} property identifies the track
that was removed from the media element's `AudioTrackList`.

> **Note:** You can also add a handler for the `removetrack`
> event using {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

## Syntax

```js
AudioTrackList.onremovetrack = eventHandler;
```

### Value

Set `onremovetrack` to a function that accepts as input a
{{domxref("TrackEvent")}} object which indicates in its {{domxref("TrackEvent.track",
  "track")}} property which audio track has been removed from the media element.

## Example

This simple example just fetches the current number of audio tracks in the media
element whenever a track is removed from the media element.

```js
document.querySelector("my-video").audioTracks.onremovetrack = function(event) {
  myTrackCount = document.querySelector("my-video").audioTracks.length;
};
```

The current number of audio tracks remaining in the media element is obtained from
`AudioTrackList` property {{domxref("AudioTrackList.length", "length")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
