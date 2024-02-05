---
title: VideoTrackList
slug: Web/API/VideoTrackList
page-type: web-api-interface
browser-compat: api.VideoTrackList
---

{{APIRef("HTML DOM")}}

The **`VideoTrackList`** interface is used to represent a list of the video tracks contained within a {{HTMLElement("video")}} element, with each track represented by a separate {{domxref("VideoTrack")}} object in the list.

Retrieve an instance of this object with {{domxref('HTMLMediaElement.videoTracks')}}. The individual tracks can be accessed using array syntax or functions such as {{jsxref("Array.forEach", "forEach()")}} for example.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("VideoTrackList.length", "length")}} {{ReadOnlyInline}}
  - : The number of tracks in the list.
- {{domxref("VideoTrackList.selectedIndex", "selectedIndex")}} {{ReadOnlyInline}}
  - : The index of the currently selected track, if any, or `−1` otherwise.

## Instance methods

_This interface also inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("VideoTrackList.getTrackById", "getTrackById()")}}
  - : Returns the {{domxref("VideoTrack")}} found within the `VideoTrackList` whose {{domxref("VideoTrack.id", "id")}} matches the specified string. If no match is found, `null` is returned.

## Events

- {{domxref("VideoTrackList/addtrack_event", "addtrack")}}
  - : Fired when a new video track has been added to the media element.
    Also available via the `onaddtrack` property.
- {{domxref("VideoTrackList.change_event", "change")}}
  - : Fired when a video track has been made active or inactive.
    Also available via the `onchange` property.
- {{domxref("VideoTrackList/removetrack_event", "removetrack")}}
  - : Fired when a new video track has been removed from the media element.
    Also available via the `onremovetrack` property.

## Usage notes

In addition to being able to obtain direct access to the video tracks present on a media element, `VideoTrackList` lets you set event handlers on the {{domxref("VideoTrackList/addtrack_event", "addtrack")}} and {{domxref("VideoTrackList/removetrack_event", "removetrack")}} events, so that you can detect when tracks are added to or removed from the media element's stream.

## Examples

### Getting a media element's video track list

To get a media element's {{domxref("VideoTrackList")}}, use its {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}} property.

```js
const videoTracks = document.querySelector("video").videoTracks;
```

### Monitoring track count changes

In this example, we have an app that displays information about the number of channels available. To keep it up to date, handlers for the {{domxref("VideoTrackList/addtrack_event", "addtrack")}} and {{domxref("VideoTrackList/removetrack_event", "removetrack")}} events are set up.

```js
videoTracks.onaddtrack = updateTrackCount;
videoTracks.onremovetrack = updateTrackCount;

function updateTrackCount(event) {
  trackCount = videoTracks.length;
  drawTrackCountIndicator(trackCount);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
