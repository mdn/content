---
title: TextTrackList.onchange
slug: Web/API/TextTrackList/onchange
tags:
  - API
  - Adding Tracks
  - Event Handler
  - HTML DOM
  - HTMLMediaElement
  - Media
  - Property
  - Reference
  - TextTrack
  - TextTrackList
  - addTrack
  - onchange
  - text track
  - track
browser-compat: api.TextTrackList.onchange
---
{{APIRef("HTML DOM")}}

The **{{domxref("TextTrackList")}}** property
**`onchange`** is an event handler which is called when the
{{event("change")}} event occurs, indicating that a change has occurred on a
{{domxref("TextTrack")}} in the `VideoTrackList`.

> **Note:** You can also add a handler for the `change` event
> using {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

## Syntax

```js
TextTrackList.onchange = eventHandler;
```

## Example

This snippet establishes a handler for the {{event("change")}} event that looks at each
of the tracks in the list, calling a function to update the state of a user interface
control that indicates the current state of the track.

```js
var trackList = document.querySelector("video, audio").textTracks;

trackList.onchange = function(event) {
   .... /* do something */
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
