---
title: HTMLMediaElement.audioTracks
slug: Web/API/HTMLMediaElement/audioTracks
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - Audio Tracks
  - HTML DOM
  - HTMLMediaElement
  - Media
  - Property
  - Reference
  - Tracks
  - Web
  - audiotracks
browser-compat: api.HTMLMediaElement.audioTracks
---
{{APIRef("HTML DOM")}}

The read-only **`audioTracks`**
property on {{domxref("HTMLMediaElement")}} objects returns
an {{domxref("AudioTrackList")}} object listing all of the {{domxref("AudioTrack")}}
objects representing the media element's audio tracks.

The media element may be
either an {{HTMLElement("audio")}} element or a {{HTMLElement("video")}} element.

The returned list is _live_; that is, as tracks are added to and removed from
the media element, the list's contents change dynamically. Once you have a reference to
the list, you can monitor it for changes to detect when new audio tracks are added or
existing ones removed. See {{SectionOnPage("/en-US/docs/Web/API/AudioTrackList", "Event
  handlers")}} to learn more about watching for changes to a media element's track list.

## Value

An {{domxref("AudioTrackList")}} object representing the list of audio tracks included
in the media element. The list of tracks can be accessed using array notation, or using
the object's {{domxref("AudioTrackList.getTrackById", "getTrackById()")}} method.

Each track is represented by an {{domxref("AudioTrack")}} object which provides
information about the track.

## Examples

In this example, all of the audio tracks on a given element are muted.

### HTML

The HTML establishes the element itself.

```html
<video id="video" src="somevideo.mp4"></video>
```

### JavaScript

The JavaScript code handles muting the video element's audio tracks.

```js
const video = document.getElementById("video");

for (let i = 0; i < video.audioTracks.length; i += 1) {
  video.audioTracks[i].enabled = false;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
- {{HTMLElement("audio")}} and {{HTMLElement("video")}}
- {{domxref("AudioTrack")}} and {{domxref("AudioTrackList")}}
