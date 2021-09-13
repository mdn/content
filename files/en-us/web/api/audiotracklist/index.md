---
title: AudioTrackList
slug: Web/API/AudioTrackList
tags:
  - API
  - Audio
  - AudioTrackList
  - HTML DOM
  - Interface
  - Media
  - Reference
  - Track List
  - Tracks
  - list
browser-compat: api.AudioTrackList
---
{{APIRef("HTML DOM")}}

The **`AudioTrackList`** interface is used to represent a list of the audio tracks contained within a given HTML media element, with each track represented by a separate {{domxref("AudioTrack")}} object in the list.

Retrieve an instance of this object with {{domxref('HTMLMediaElement.audioTracks')}}. The individual tracks can be accessed using array syntax.

## Properties

_This interface also inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("AudioTrackList.length", "length")}} {{ReadOnlyInline}}
  - : The number of tracks in the list.

## Event handlers

- {{domxref("AudioTrackList.onaddtrack", "onaddtrack")}}
  - : An event handler to be called when the {{event("addtrack")}} event is fired, indicating that a new audio track has been added to the media element.
- {{domxref("AudioTrackList.onchange", "onchange")}}
  - : An event handler to be called when the {{event("change")}} event occurs. This occurs when one or more tracks have been enabled or disabled by their {{domxref("AudioTrack.enabled", "enabled")}} flag being changed.
- {{domxref("AudioTrackList.onremovetrack", "onremovetrack")}}
  - : An event handler to call when the {{event("removetrack")}} event is sent, indicating that an audio track has been removed from the media element.

## Methods

_This interface also inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("AudioTrackList.getTrackById", "getTrackById()")}}
  - : Returns the {{domxref("AudioTrack")}} found within the `AudioTrackList` whose {{domxref("AudioTrack.id", "id")}} matches the specified string. If no match is found, `null` is returned.

## Events

- [`addtrack`](/en-US/docs/Web/API/AudioTrackList/addtrack_event)
  - : Fired when a new audio track has been added to the media element.
    Also available via the [`onaddtrack`](/en-US/docs/Web/API/AudioTrackList/onaddtrack) property.
- [`change`](/en-US/docs/Web/API/AudioTrackList/change_event)
  - : Fired when a track has been enabled or disabled.
    Also available via the [`onchange`](/en-US/docs/Web/API/AudioTrackList/onchange) property.
- [`removetrack`](/en-US/docs/Web/API/AudioTrackList/removetrack_event)
  - : Fired when a new audio track has been removed from the media element.
    Also available via the [`onremovetrack`](/en-US/docs/Web/API/AudioTrackList/onremovetrack) property.

## Usage notes

In addition to being able to obtain direct access to the audio tracks present on a media element, `AudioTrackList` lets you set event handlers on the {{event("addtrack")}} and {{event("removetrack")}} events, so that you can detect when tracks are added to or removed from the media element's stream. See {{domxref("AudioTrackList.onaddtrack", "onaddtrack")}} and {{domxref("AudioTrackList.onremovetrack", "onremovetrack")}} for details and examples.

## Examples

### Getting a media element's audio track list

To get a media element's {{domxref("AudioTrackList")}}, use its {{domxref("HTMLMediaElement.audioTracks", "audioTracks")}} property.

```js
var audioTracks = document.querySelector("video").audioTracks;
```

### Monitoring track count changes

In this example, we have an app that displays information about the number of channels available. To keep it up to date, handlers for the {{event("addtrack")}} and {{event("removetrack")}} events are set up.

```js
audioTracks.onaddtrack = updateTrackCount;
audioTracks.onremovetrack = updateTrackCount;

function updateTrackCount(event) {
  trackCount = audioTracks.length;
  drawTrackCountIndicator(trackCount);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
