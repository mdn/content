---
title: TextTrackList
slug: Web/API/TextTrackList
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Interface
  - Media
  - Reference
  - TextTrackList
  - Track List
  - Tracks
  - list
browser-compat: api.TextTrackList
---
{{APIRef("HTML DOM")}}

The **`TextTrackList`** interface is used to represent a list of the text tracks defined by the {{HTMLElement("track")}} element, with each track represented by a separate {{domxref("textTrack")}} object in the list.

Retrieve an instance of this object with {{domxref('HTMLMediaElement.textTracks')}}. The individual tracks can be accessed using array syntax or functions such as {{jsxref("Array.forEach", "forEach()")}} for example.

## Properties

_This interface also inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("TextTrackList.length", "length")}} {{ReadOnlyInline}}
  - : The number of tracks in the list.

## Event handlers

- {{domxref("TextTrackList.onaddtrack", "onaddtrack")}}
  - : An event handler to be called when the {{event("addtrack")}} event is fired, indicating that a new text track has been added to the media element.
- {{domxref("TextTrackList.onchange", "onchange")}}
  - : An event handler to be called when the {{event("change")}} event occurs.
- {{domxref("TextTrackList.onremovetrack", "onremovetrack")}}
  - : An event handler to call when the {{event("removetrack")}} event is sent, indicating that a text track has been removed from the media element.

## Methods

_This interface also inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("TextTrackList.getTrackById", "getTrackById()")}}
  - : Returns the {{domxref("TextTrack")}} found within the `TextTrackList` whose {{domxref("TextTrack.id", "id")}} matches the specified string. If no match is found, `null` is returned.

## Events

- [`addtrack`](/en-US/docs/Web/API/TextTrackList/addtrack_event)
  - : Fired when a new text track has been added to the media element.
    Also available via the [`onaddtrack`](/en-US/docs/Web/API/TextTrackList/onaddtrack) property.
- [`change`](/en-US/docs/Web/API/TextTrackList/change_event)
  - : Fired when a text track has been made active or inactive.
    Also available via the [`onchange`](/en-US/docs/Web/API/TextTrackList/onchange) property.
- [`removetrack`](/en-US/docs/Web/API/TextTrackList/removeTrack_event)
  - : Fired when a new text track has been removed from the media element.
    Also available via the [`onremovetrack`](/en-US/docs/Web/API/TextTrackList/onremovetrack) property.

## Usage notes

In addition to being able to obtain direct access to the text tracks present on a media element, `TextTrackList` lets you set event handlers on the {{event("addtrack")}} and {{event("removetrack")}} events, so that you can detect when tracks are added to or removed from the media element's stream. See {{domxref("TextTrackList.onaddtrack", "onaddtrack")}} and {{domxref("TextTrackList.onremovetrack", "onremovetrack")}} for details and examples.

## Examples

### Getting a video element's text track list

To get a media element's {{domxref("TextTrackList")}}, use its {{domxref("HTMLMediaElement.textTracks", "textTracks")}} property.

```js
var textTracks = document.querySelector("video").textTracks;
```

### Monitoring track count changes

In this example, we have an app that displays information about the number of channels available. To keep it up to date, handlers for the {{event("addtrack")}} and {{event("removetrack")}} events are set up.

```js
textTracks.onaddtrack = updateTrackCount;
textTracks.onremovetrack = updateTrackCount;

function updateTrackCount(event) {
  trackCount = textTracks.length;
  drawTrackCountIndicator(trackCount);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
