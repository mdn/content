---
title: TextTrackList
slug: Web/API/TextTrackList
page-type: web-api-interface
browser-compat: api.TextTrackList
---

{{APIRef("HTML DOM")}}

The **`TextTrackList`** interface is used to represent a list of the text tracks defined for the associated video or audio element, with each track represented by a separate {{domxref("textTrack")}} object in the list.

Text tracks can be added to a media element declaratively using the {{HTMLElement("track")}} element or programmatically using the {{domxref('HTMLMediaElement.addTextTrack()')}} method.

An instance of this object can be retrieved using the {{domxref('HTMLMediaElement.textTracks', 'textTracks')}} property of an {{domxref('HTMLMediaElement')}} object.

For a given {{domxref('HTMLMediaElement')}} object _media_, the individual tracks can be accessed using:

- `media.TextTracks[n]`, to get the n-th text track from the object's list of text tracks
- the [`media.textTracks.getTrackById()`](/en-US/docs/Web/API/TextTrackList/getTrackById) method

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("TextTrackList.length", "length")}} {{ReadOnlyInline}}
  - : The number of tracks in the list.

## Instance methods

_This interface also inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("TextTrackList.getTrackById", "getTrackById()")}}
  - : Returns the {{domxref("TextTrack")}} found within the `TextTrackList` whose {{domxref("TextTrack.id", "id")}} matches the specified string. If no match is found, `null` is returned.

## Events

- [`addtrack`](/en-US/docs/Web/API/TextTrackList/addtrack_event)
  - : Fired when a new text track has been added to the media element.
    Also available via the `onaddtrack` property.
- [`change`](/en-US/docs/Web/API/TextTrackList/change_event)
  - : Fired when a text track has been made active or inactive.
    Also available via the `onchange` property.
- [`removetrack`](/en-US/docs/Web/API/TextTrackList/removetrack_event)
  - : Fired when a new text track has been removed from the media element.
    Also available via the `onremovetrack` property.

## Usage notes

In addition to being able to obtain direct access to the text tracks present on a media element, `TextTrackList` lets you set event handlers on the {{domxref("TextTrackList/addtrack_event", "addtrack")}} and {{domxref("TextTrackList/removetrack_event", "removetrack")}} events, so that you can detect when tracks are added to or removed from the media element's stream.

## Examples

### Getting a video element's text track list

To get a media element's `TextTrackList`, use its {{domxref("HTMLMediaElement.textTracks", "textTracks")}} property.

```js
const textTracks = document.querySelector("video").textTracks;
```

### Monitoring track count changes

In this example, we have an app that displays information about the number of channels available. To keep it up to date, handlers for the {{domxref("TextTrackList/addtrack_event", "addtrack")}} and {{domxref("TextTrackList/removetrack_event", "removetrack")}} events are set up.

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
