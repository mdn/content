---
title: TextTrackList.onaddtrack
slug: Web/API/TextTrackList/onaddtrack
tags:
  - API
  - Adding Tracks
  - Event Handler
  - HTML DOM
  - HTMLMediaElement
  - Media
  - Property
  - Reference
  - addTrack
  - onaddtrack
  - track
browser-compat: api.TextTrackList.onaddtrack
---
{{APIRef("HTML DOM")}}

The **{{domxref("TextTrackList")}}** property
**`onaddtrack`** is an event handler which is called when the
{{event("addtrack")}} event occurs, indicating that a new text track has been added to
the media element whose text tracks the `TextTrackList` represents.

The event is passed into the event handler in the form of a {{domxref("TrackEvent")}}
object, whose {{domxref("TrackEvent.track", "track")}} property identifies the
newly-added track.

> **Note:** You can also add a handler for the `addtrack` event
> using {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

## Syntax

```js
TextTrackList.onaddtrack = eventHandler;
```

### Value

Set `onaddtrack` to a function that accepts as input a
{{domxref("TrackEvent")}} object which indicates in its {{domxref("TrackEvent.track",
  "track")}} property which video track has been added to the media.

## Usage notes

The {{event("addtrack")}} event is called whenever a new track is added to the media
element whose video tracks are represented by the `TextTrackList` object.
This happens when tracks are added to the element when the media is first attached to
the element; one `addtrack` event will occur for each video track in the
media resource.

## Example

This snippet establishes a handler for the {{event("addtrack")}} event that calls a
function, `addToTrackList()`, passing in the {{domxref("VideoTrack")}} object
representing the newly-added track. In this scenario, that function's role is to add the
new track to a list of video tracks available to choose from.

```js
document.querySelector("video").textTracks.onaddtrack = function(event) {
  addToTrackList(event.track);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
