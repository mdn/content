---
title: AudioTrackList.onchange
slug: Web/API/AudioTrackList/onchange
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
  - onchange
  - track
browser-compat: api.AudioTrackList.onchange
---
{{APIRef("HTML DOM")}}

The **{{domxref("AudioTrackList")}}** property
**`onchange`** is an event handler which is called when the
{{event("change")}} event occurs, indicating that one or more of the
{{domxref("AudioTrack")}}s in the `AudioTrackList` have been enabled or
disabled.

The event is passed into the event handler in the form of an {{domxref("Event")}}
object; the event doesn't provide any additional information. To determine the new state
of media's tracks, you'll have to look at their {{domxref("AudioTrack.enabled")}} flags.

> **Note:** You can also add a handler for the `change` event
> using {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

## Syntax

```js
AudioTrackList.onchange = eventHandler;
```

### Value

Set `onchange` to a function that should be called whenever tracks are
enabled or disabled on the media element.

## Example

This snippet establishes a handler for the {{event("change")}} event that looks at each
of the tracks in the list, calling a function to update the state of a user interface
control that indicates the current state of the track.

```js
var trackList = document.querySelector("video").audioTracks;

trackList.onchange = function(event) {
  trackList.forEach(function(track) {
    updateTrackEnabledButton(track.id, track.enabled);
  });
};
```

The `updateTrackEnabledButton()`, in this example, should be a function that
finds a user interface control using the track's {{domxref("AudioTrack.id", "id")}}
(perhaps the app uses the track ID as the control element's ID) and the track's
{{domxref("AudioTrack.enabled", "enabled")}} flag to determine which state the control
should be in now.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
