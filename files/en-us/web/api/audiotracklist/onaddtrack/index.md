---
title: AudioTrackList.onaddtrack
slug: Web/API/AudioTrackList/onaddtrack
tags:
  - API
  - Adding Audio Tracks
  - Adding Tracks
  - Audio
  - AudioTrackList
  - Event Handler
  - HTML DOM
  - Media
  - Property
  - Reference
  - addTrack
  - onaddtrack
  - track
browser-compat: api.AudioTrackList.onaddtrack
---
{{APIRef("HTML DOM")}}

The **{{domxref("AudioTrackList")}}** property
**`onaddtrack`** is an event handler which is called when the
{{event("addtrack")}} event occurs, indicating that a new audio track has been added
to the media element whose audio tracks the `AudioTrackList`
represents.

The event is passed into the event handler in the form of a {{domxref("TrackEvent")}}
object, whose {{domxref("TrackEvent.track", "track")}} property identifies the
newly-added track.

> **Note:** You can also add a handler for the `addtrack` event
> using {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

## Syntax

```js
AudioTrackList.onaddtrack = eventHandler;
```

### Value

Set `onaddtrack` to a function that accepts as input a
{{domxref("TrackEvent")}} object which indicates in its {{domxref("TrackEvent.track",
  "track")}} property which audio track has been added to the media.

## Usage notes

The {{event("addtrack")}} event is called whenever a new track is added to the media
element whose audio tracks are represented by the `AudioTrackList` object.
This happens when tracks are added to the element when the media is first attached to
the element; one `addtrack` event will occur for each audio track in the
media resource.

## Example

This snippet establishes a handler for the {{event("addtrack")}} event that calls a
function, `addToTrackList()`, passing in the {{domxref("AudioTrack")}} object
representing the newly-added track. In this scenario, that function's role is to add the
new track to a list of audio tracks available to choose from.

```js
document.querySelector("video").audioTracks.onaddtrack = function(event) {
  addToTrackList(event.track);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
